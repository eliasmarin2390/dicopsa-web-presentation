import { renderCards } from '../components/cards.js';
import { renderFooter } from '../components/footer.js';
import { renderNavbar } from '../components/navbar.js';
import { renderTimeline } from '../components/timeline.js';
import { renderTabs } from '../components/tabs.js';
import {
  renderPestelPanel,
  renderSpecRows,
  renderTable
} from '../components/analysis.js';
import {
  competition,
  companyCards,
  companyOpportunities,
  companyProfile,
  companyStrengths,
  companyTimeline,
  competitiveAdvantage,
  currentSituation,
  economicResponse,
  externalRisk,
  futureSituation,
  suppliers
} from '../data/company.js';
import {
  backupSystem,
  helpDesk,
  internalAnalysis,
  internalLimitation,
  serviceCatalog,
  serviceKpis,
  serviceMap,
  servicePortfolio,
  techMaturity,
  techSummary
} from '../data/infrastructure.js';
import {
  bestPractices,
  businessObjectives,
  indicators,
  itObjectives,
  planPeriod,
  policies,
  swot,
  trends
} from '../data/strategy.js';
import { projectCover } from '../data/project.js';
import { pestelRows } from '../data/pestel.js';
import { siteFooter, siteNavigation, siteTitle } from '../data/site.js';
import { applyReducedMotionClass, setupBackToTop } from './interactions.js';
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

function renderProfile() {
  queryRequired('#company-profile-text').textContent =
    `${companyProfile.name} ${companyProfile.location} ${companyProfile.branches}`;
  renderCards(queryRequired('#company-cards'), companyCards, {
    variant: 'feature'
  });
  renderTimeline(queryRequired('#company-timeline'), companyTimeline);
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
  renderList(queryRequired('#economic-response'), economicResponse);
}

function renderMarket() {
  renderCards(queryRequired('#competition-cards'), competition, {
    variant: 'feature'
  });
  renderCards(queryRequired('#supplier-cards'), suppliers, {
    variant: 'feature'
  });
  renderCards(queryRequired('#advantage-card'), [competitiveAdvantage], {
    variant: 'feature'
  });
}

function renderKeyFactors() {
  renderList(queryRequired('#key-strengths'), companyStrengths);
  renderList(queryRequired('#key-opportunities'), companyOpportunities);
  queryRequired('#key-risk-text').textContent = externalRisk.text;
  renderList(queryRequired('#key-risk-points'), externalRisk.points);
}

function renderTechnology() {
  queryRequired('#maturity-stage').textContent =
    `Etapa ${techMaturity.stage} · ${techMaturity.stageLabel}`;
  queryRequired('#maturity-text').textContent = techMaturity.text;
  queryRequired('#maturity-from').textContent = techMaturity.scale.from;
  queryRequired('#maturity-to').textContent = techMaturity.scale.to;
  queryRequired('#maturity-note').textContent = techMaturity.scale.note;
  renderCards(queryRequired('#tech-summary'), techSummary, {
    variant: 'feature'
  });
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
  queryRequired('#internal-limitation').textContent = internalLimitation;
  renderTabs(
    queryRequired('#internal-tabs'),
    Object.values(internalAnalysis).map((area) => ({
      label: area.label,
      render: (panel) => renderSpecRows(panel, area.rows)
    }))
  );
}

function renderServices() {
  renderTable(queryRequired('#service-map'), serviceMap);
  renderTable(queryRequired('#service-catalog'), serviceCatalog);
  renderTable(queryRequired('#service-portfolio'), servicePortfolio);
  renderCards(queryRequired('#help-desk'), helpDesk, { variant: 'feature' });
  renderTable(queryRequired('#service-kpis'), serviceKpis);
  queryRequired('#backup-title').textContent = backupSystem.title;
  renderList(queryRequired('#backup-points'), backupSystem.points);
}

function renderSwot() {
  const grid = queryRequired('#swot-grid');
  grid.replaceChildren(
    ...swot.map(({ title, items }) => {
      const panel = createElement('article', { className: 'swot-panel' });
      const list = createElement('ul', { className: 'bullet-list' });
      renderList(list, items);
      panel.append(createElement('h3', { textContent: title }), list);
      return panel;
    })
  );
}

function renderStrategy() {
  queryRequired('#plan-period').textContent = planPeriod;
  renderCards(queryRequired('#business-objectives'), businessObjectives, {
    variant: 'roadmap'
  });
  renderCards(queryRequired('#it-objectives'), itObjectives, {
    variant: 'roadmap'
  });
  renderCards(queryRequired('#trend-cards'), trends, { variant: 'feature' });
  renderCards(queryRequired('#policy-cards'), policies, { variant: 'feature' });
  renderCards(queryRequired('#practice-cards'), bestPractices, {
    variant: 'feature'
  });
  renderCards(queryRequired('#indicator-cards'), indicators, {
    variant: 'feature'
  });
}

function bootstrap() {
  document.title = siteTitle;
  applyReducedMotionClass();

  renderNavbar(queryRequired('#site-header'), siteNavigation);
  renderFooter(queryRequired('#site-footer'), siteFooter, siteNavigation);
  renderCoverMeta(queryRequired('#cover-meta'));

  renderProfile();
  renderSituation();
  renderMarket();
  renderKeyFactors();
  renderTechnology();
  renderPestel();
  renderInternal();
  renderServices();
  renderSwot();
  renderStrategy();

  // Efectos: se activan después de renderizar para que observen el contenido final.
  setupReveal(document);
  setupSectionProgress(document);
  setupScrollProgress(queryRequired('[data-scroll-progress-bar]'));
  setupParallax(queryAll('[data-parallax-speed]'));

  setupScrollSpy(queryAll('main section[id]'));
  setupBackToTop(queryRequired('[data-to-top]'));
}

window.addEventListener('DOMContentLoaded', bootstrap, { once: true });
