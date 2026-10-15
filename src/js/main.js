import '../css/main.css';
import { renderCards } from '../components/cards.js';
import { renderFooter } from '../components/footer.js';
import { renderKpis } from '../components/kpis.js';
import { renderNavbar } from '../components/navbar.js';
import { renderTimeline } from '../components/timeline.js';
import { renderTabs } from '../components/tabs.js';
import { renderPestelPanel, renderSpecRows } from '../components/analysis.js';
import {
  competition,
  companyCards,
  companyOpportunities,
  companyProfile,
  companyStrengths,
  currentSituation,
  economicResponse,
  economicResponseNote,
  futureSituation,
  heroKPIs,
  companyTimeline,
  externalRisk,
  suppliers
} from '../data/company.js';
import {
  branchRisks,
  diagnosisRisks,
  diagnosisSynthesis,
  managementQuestions,
  nextStep
} from '../data/diagnosis.js';
import {
  internalAnalysis,
  techMaturity,
  techSummary
} from '../data/infrastructure.js';
import { projectCover } from '../data/project.js';
import { pestelRows, swotThreats, swotWeaknesses } from '../data/pestel.js';
import { improvementRoadmap } from '../data/recommendations.js';
import { siteFooter, siteNavigation, siteTitle } from '../data/site.js';
import { applyReducedMotionClass, setupBackToTop } from './interactions.js';
import { setupCounters } from './effects/counters.js';
import { setupReveal } from './effects/reveal.js';
import {
  setupParallax,
  setupScrollProgress,
  setupSectionProgress
} from './effects/scroll.js';
import { setupScrollSpy } from './navigation.js';
import { createElement, queryAll, queryRequired } from '../utils/dom.js';

function renderList(listElement, items) {
  listElement.replaceChildren(
    ...items.map((item) => createElement('li', { textContent: item }))
  );
}

function renderCoverMeta(element) {
  const { team, teacher, date, place } = projectCover;
  element.textContent = `${team.join(' · ')} · Docente: ${teacher} · ${date} · ${place}`;
}

function renderExternalRisk(container, risk) {
  container.replaceChildren(
    createElement('h3', { textContent: risk.title }),
    createElement('p', { className: 'body-text', textContent: risk.text })
  );
  const list = createElement('ul', { className: 'bullet-list' });
  renderList(list, risk.points);
  container.append(list);
}

function renderQuestions(listElement, questions) {
  listElement.replaceChildren(
    ...questions.map((question) => {
      const item = createElement('li', { className: 'question' });
      item.append(
        createElement('strong', { textContent: question.title }),
        createElement('span', { textContent: question.text })
      );
      return item;
    })
  );
}

function renderSituation() {
  renderCards(
    queryRequired('#situation-cards'),
    [
      {
        title: currentSituation.title,
        text: currentSituation.text,
        points: [currentSituation.note]
      },
      {
        title: futureSituation.title,
        text: futureSituation.text,
        points: futureSituation.points
      }
    ],
    { variant: 'feature' }
  );
}

function renderPestel() {
  renderTabs(
    queryRequired('#pestel-tabs'),
    pestelRows.map((row) => ({
      label: row.label,
      render: (panel) => renderPestelPanel(panel, row)
    }))
  );
}

function renderInternal() {
  renderTabs(queryRequired('#internal-tabs'), [
    {
      label: internalAnalysis.mdf.label,
      render: (panel) => renderSpecRows(panel, internalAnalysis.mdf.rows)
    },
    {
      label: internalAnalysis.idf.label,
      render: (panel) => renderSpecRows(panel, internalAnalysis.idf.rows)
    }
  ]);
}

function renderMaturity() {
  queryRequired('#maturity-stage').textContent =
    `Etapa ${techMaturity.stage} · ${techMaturity.stageLabel}`;
  queryRequired('#maturity-text').textContent = techMaturity.text;
  queryRequired('#maturity-from').textContent = techMaturity.scale.from;
  queryRequired('#maturity-to').textContent = techMaturity.scale.to;
  queryRequired('#maturity-note').textContent = techMaturity.scale.note;
}

function renderSynthesis() {
  queryRequired('#loop-name').textContent = diagnosisSynthesis.loop;
  queryRequired('#loop-step').textContent = diagnosisSynthesis.step;
  queryRequired('#critical-points').textContent =
    diagnosisSynthesis.criticalPoints;
  queryRequired('#next-step-text').textContent = nextStep.text;
  renderQuestions(queryRequired('#mgmt-questions'), managementQuestions);
}

function bootstrap() {
  document.title = siteTitle;
  applyReducedMotionClass();

  renderNavbar(queryRequired('#site-header'), siteNavigation);
  renderFooter(queryRequired('#site-footer'), siteFooter, siteNavigation);
  renderCoverMeta(queryRequired('#cover-meta'));

  renderKpis(queryRequired('#home-kpis'), heroKPIs);
  queryRequired('#company-profile-text').textContent =
    `${companyProfile.location} ${companyProfile.branches}`;
  renderTimeline(queryRequired('#company-timeline'), companyTimeline);
  renderCards(queryRequired('#company-cards'), companyCards, {
    variant: 'feature'
  });

  renderSituation();
  renderList(queryRequired('#economic-response'), economicResponse);
  queryRequired('#economic-note').textContent = economicResponseNote;
  renderCards(queryRequired('#competition-cards'), competition, {
    variant: 'list'
  });
  renderCards(queryRequired('#supplier-cards'), suppliers, {
    variant: 'feature'
  });

  renderMaturity();
  renderCards(queryRequired('#tech-summary'), techSummary, {
    variant: 'feature'
  });

  renderPestel();

  renderList(queryRequired('#swot-strengths'), companyStrengths);
  renderList(queryRequired('#swot-opportunities'), companyOpportunities);
  renderList(queryRequired('#swot-weaknesses'), swotWeaknesses);
  renderList(queryRequired('#swot-threats'), swotThreats);

  renderInternal();

  renderCards(queryRequired('#risk-cards'), diagnosisRisks, {
    variant: 'feature'
  });
  renderList(queryRequired('#branch-risks'), branchRisks);
  renderExternalRisk(queryRequired('#external-risk'), externalRisk);

  renderCards(queryRequired('#roadmap'), improvementRoadmap, {
    variant: 'roadmap'
  });

  renderSynthesis();

  // Efectos: se activan después de renderizar para que observen el contenido final.
  setupReveal(document);
  setupCounters(document);
  setupSectionProgress(document);
  setupScrollProgress(queryRequired('[data-scroll-progress-bar]'));
  setupParallax(queryAll('[data-parallax-speed]'));

  setupScrollSpy(queryAll('main section[id]'));
  setupBackToTop(queryRequired('[data-to-top]'));
}

window.addEventListener('DOMContentLoaded', bootstrap, { once: true });
