import '../css/main.css';
import { renderCards } from '../components/cards.js';
import { renderFooter } from '../components/footer.js';
import { renderNavbar } from '../components/navbar.js';
import { renderTable } from '../components/tables.js';
import { renderTimeline } from '../components/timeline.js';
import { companyCards, companyTimeline, heroKPIs } from '../data/company.js';
import { diagnosisCards } from '../data/diagnosis.js';
import {
  infraStrengths,
  infraSummaryCards,
  infraWeaknesses,
  idfCards,
  mdfInventory,
  monitoringProposals,
  securityProposals
} from '../data/infrastructure.js';
import { pestelRows, swotData } from '../data/pestel.js';
import { improvementRoadmap } from '../data/recommendations.js';
import { siteFooter, siteNavigation, siteTitle } from '../data/site.js';
import { applyReducedMotionClass, setupBackToTop } from './interactions.js';
import { setupScrollSpy } from './navigation.js';
import { queryAll, queryRequired } from '../utils/dom.js';

function renderList(listElement, items) {
  listElement.replaceChildren();

  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    fragment.append(listItem);
  });

  listElement.append(fragment);
}

function bootstrap() {
  document.title = siteTitle;
  applyReducedMotionClass();

  renderNavbar(queryRequired('#site-header'), siteNavigation);
  renderFooter(queryRequired('#site-footer'), siteFooter, siteNavigation);

  renderCards(queryRequired('#home-kpis'), heroKPIs, { variant: 'summary' });
  renderTimeline(queryRequired('#company-timeline'), companyTimeline);
  renderCards(queryRequired('#company-cards'), companyCards, {
    variant: 'feature'
  });
  renderTable(queryRequired('#pestel-table'), pestelRows);
  renderCards(queryRequired('#strengths-list'), swotData.strengths, {
    variant: 'list'
  });
  renderCards(queryRequired('#opportunities-list'), swotData.opportunities, {
    variant: 'list'
  });
  renderCards(queryRequired('#weaknesses-list'), swotData.weaknesses, {
    variant: 'list'
  });
  renderCards(queryRequired('#threats-list'), swotData.threats, {
    variant: 'list'
  });
  renderCards(queryRequired('#tech-summary'), infraSummaryCards, {
    variant: 'feature'
  });
  renderTable(queryRequired('#mdf-table'), mdfInventory);
  renderCards(queryRequired('#idf-cards'), idfCards, { variant: 'feature' });
  renderList(queryRequired('#infra-strengths'), infraStrengths);
  renderList(queryRequired('#infra-weaknesses'), infraWeaknesses);
  renderCards(queryRequired('#risk-cards'), diagnosisCards.risks, {
    variant: 'feature'
  });
  renderList(queryRequired('#branch-risks'), diagnosisCards.branchRisks);
  renderList(
    queryRequired('#continuity-impact'),
    diagnosisCards.continuityImpact
  );
  renderCards(queryRequired('#roadmap'), improvementRoadmap, {
    variant: 'roadmap'
  });
  renderList(queryRequired('#monitoring-list'), monitoringProposals);
  renderList(queryRequired('#security-list'), securityProposals);
  renderCards(queryRequired('#diagnosis-cards'), diagnosisCards.summary, {
    variant: 'feature'
  });

  setupScrollSpy(queryAll('main section[id]'));
  setupBackToTop(queryRequired('[data-to-top]'));
}

window.addEventListener('DOMContentLoaded', bootstrap, { once: true });
