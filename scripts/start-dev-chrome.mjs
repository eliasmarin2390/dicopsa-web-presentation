import { existsSync } from 'node:fs';
import { request } from 'node:http';
import { spawn } from 'node:child_process';
import { delimiter, join } from 'node:path';
import process from 'node:process';

const host = '127.0.0.1';
const port = 5173;
const url = `http://localhost:${port}/dicopsa-corporate-website/`;
const viteEntryPoint = join(process.cwd(), 'node_modules', 'vite', 'bin', 'vite.js');

const chromeCandidates = [
  process.env.GOOGLE_CHROME_BIN,
  process.env.CHROME_PATH,
  process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, 'Google', 'Chrome', 'Application', 'chrome.exe'),
  process.env.PROGRAMFILES && join(process.env.PROGRAMFILES, 'Google', 'Chrome', 'Application', 'chrome.exe'),
  process.env['PROGRAMFILES(X86)'] && join(process.env['PROGRAMFILES(X86)'], 'Google', 'Chrome', 'Application', 'chrome.exe')
].filter(Boolean);

const findChrome = () => {
  const pathEntries = (process.env.PATH ?? '').split(delimiter);
  const pathChrome = pathEntries
    .map((entry) => join(entry, 'chrome.exe'))
    .find((candidate) => existsSync(candidate));

  return chromeCandidates.find((candidate) => existsSync(candidate)) ?? pathChrome;
};

const waitForServer = (attempts = 60) => new Promise((resolve, reject) => {
  const check = (remaining) => {
    const probe = request({ hostname: host, port, path: '/', method: 'HEAD' }, (response) => {
      response.resume();
      resolve();
    });

    probe.on('error', () => {
      if (remaining === 0) {
        reject(new Error(`Vite no respondió en ${url}`));
        return;
      }
      setTimeout(() => check(remaining - 1), 250);
    });
    probe.end();
  };

  check(attempts);
});

const vite = spawn(process.execPath, [viteEntryPoint, '--host', host, '--port', String(port), '--strictPort'], {
  cwd: process.cwd(),
  stdio: 'inherit',
  windowsHide: false
});

let shuttingDown = false;
const stop = (signal) => {
  if (shuttingDown) return;
  shuttingDown = true;
  if (!vite.killed) vite.kill(signal);
};

process.on('SIGINT', () => stop('SIGINT'));
process.on('SIGTERM', () => stop('SIGTERM'));
vite.on('exit', (code, signal) => {
  if (!shuttingDown) {
    console.error(`Vite terminó inesperadamente (${signal ?? `código ${code}`}).`);
  }
  process.exit(code ?? 1);
});

try {
  await waitForServer();
  const chrome = findChrome();

  if (!chrome) {
    console.warn('No se encontró Google Chrome. Vite sigue ejecutándose en:');
    console.warn(url);
  } else {
    spawn(chrome, [url], { detached: true, stdio: 'ignore', windowsHide: false }).unref();
    console.log(`Google Chrome abierto en ${url}`);
  }
} catch (error) {
  console.error(error.message);
  stop('SIGTERM');
  process.exitCode = 1;
}
