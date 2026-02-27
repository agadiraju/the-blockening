const KEY = 'transition-checklist-v1';

const SECTIONS = [
  {
    id: 'urgent',
    title: 'First 48 Hours',
    icon: '⚡',
    color: 'ic-amber',
    items: [
      { id: 'urg-workday-email',   text: 'Check your personal email — Workday login credentials (username + temp password) arrive within 24 hours. If they do not, email askpeople@squareup.com' },
      { id: 'urg-workday-login',   text: 'Log into Workday and update your personal contact information' },
      { id: 'urg-docs-location',   text: 'In Workday, click on the person icon on the top right → Profile to find your Post-Block Benefits Guide, RSU info, and Payroll Access info' },
      { id: 'urg-agreement-check', text: 'Check your Workday inbox for your separation agreement — arrives within 48 hours (some employees receive it via DocuSign email instead)' },
      { id: 'urg-agreement-date',  text: 'Add the signing deadline from the agreement to your personal calendar — Block cannot extend this date' },
      { id: 'urg-timesheet',       text: '(Non-exempt US) If your timecard for time worked before Feb 26 is incomplete, submit the Manual Timesheet in Workday to payrollrequests@squareup.com by Monday, March 2 — if you don\'t see the Manual Timesheet in Workday, email askpeople@squareup.com' },
    ],
  },
  {
    id: 'agreement',
    title: 'Separation Agreement & Severance',
    icon: '📋',
    color: 'ic-teal',
    items: [
      { id: 'agr-review',           text: 'Review and evaluate your options laid out in the severance agreement. <strong>Do NOT proceed with the rest of this section until you are comfortable signing the agreement.</strong> Consult with an employment lawyer if you wish — most initial consultations are free or discounted.' },
      { id: 'agr-severance-calc',   text: 'Review your severance: minimum 7 weeks base pay + 1 additional week per year at Block (tenure rounds up after 6 months) — <strong>this is paid out after your official extended separation date, which for most US employees is sometime in May</strong>' },
      { id: 'agr-severance-formula', text: 'Use this formula to see if your severance payout is in the right ballpark<br><br><strong>INPUTS:</strong><br>A = Annual Base Salary<br>B = Base Severance Weeks = 20<br>T = Tenure Years (rounded)<br>N = Paid Notice Weeks = 13 (up to May 28, 2026, if you sign the extended agreement. This may vary.)<br><br><strong>Severance Package = (A ÷ 52) × (B + T − N)</strong><br><br>Note: this assumes the 20-week base is standard for all employees — your personal situation may vary.' },
      { id: 'agr-transition',       text: 'Confirm your one-time transition assistance payment, included with severance. This is in addition to the gross "Separation Pay"' },
      { id: 'agr-dates',            text: 'Record your key dates on your personal calendar: Notification Date, Separation Date, and Extended Separation Date (if applicable for LOA or NY state)' },
      { id: 'agr-ny',               text: '(NY state only) Your non-working notice period is 90 days instead of 60' },
      { id: 'agr-sign',             text: 'Open the task in your Workday inbox, electronically sign your agreement, and submit to complete' },
      { id: 'agr-confirm',          text: 'Confirm your signed copy: Workday → Personal → Documents → Generated Documents (scroll to bottom)' },
    ],
  },
  {
    id: 'benefits',
    title: 'Benefits & COBRA',
    icon: '🏥',
    color: 'ic-blue',
    items: [
      { id: 'ben-coverage-end',  text: 'Your benefits continue through the last day of your termination month — not just your last working day (your separation date is specified in your agreement; for most US employees it is the "extended separation date" that falls sometime in May)' },
      { id: 'ben-post-guide',    text: 'Download the Post-Block Benefits Guide from Workday → Profile → Overview for details on what happens after termination' },
      { id: 'ben-cobra-packet',  text: 'Watch for a COBRA packet from Optum in the mail — arrives 10–14 business days after your benefits coverage ends' },
      { id: 'ben-cobra-enroll',  text: 'Enroll in COBRA through Optum — you have 60 days from the packet or your separation date, whichever is later' },
      { id: 'ben-cobra-note',    text: 'Signing your agreement unlocks 3 months of Block-covered COBRA premiums after your separation date — you must still enroll through Optum to receive this.<br><br><strong>PSA: if your spouse has their own employer plan, think carefully before choosing COBRA. Losing your coverage is a Qualifying Life Event (QLE) that lets you join their plan — but if you elect COBRA instead, you may forfeit that option until COBRA runs out (up to 18 months). If a spouse\'s plan is available to you, it may be the better choice.</strong>' },
      { id: 'ben-401k',          text: 'Adjust 401K contribution elections if needed via your Fidelity NetBenefits account (changes take 1–2 pay periods)' },
      { id: 'ben-loa',           text: '(On LOA) Review your separation agreement carefully — your separation date may be extended to the end of your approved leave' },
      { id: 'ben-unemployment',  text: 'File for unemployment insurance promptly — deadlines vary by state, typically within 1–2 weeks of your separation date' },
      { id: 'ben-canada',        text: '(Canada) Your benefits cease on your termination date — email askpeople@block.xyz to explore converting to individual policies' },
    ],
  },
  {
    id: 'payroll',
    title: 'Payroll & Pay Access',
    icon: '💳',
    color: 'ic-sage',
    items: [
      { id: 'pay-final-check',   text: 'Confirm your final paycheck date — no later than the next scheduled pay day after your separation' },
      { id: 'pay-vacation',      text: '(Non-exempt US) Unused vacation hours will be paid out in your final paycheck automatically — no action needed' },
      { id: 'pay-ultipro',       text: '(US) Access pay stubs post-termination at n34.ultipro.com' },
      { id: 'pay-ultipro-creds', text: '(US) Ultipro username: "Square" + your Block employee ID (find in Workday); default password: your birthdate as MMDDYYYY' },
      { id: 'pay-canada',        text: '(Canada) Access pay stubs via Payworks at payroll.payworks.ca using your current credentials' },
      { id: 'pay-international', text: '(International) Access pay stubs via your country-specific portal listed in your offboarding materials (Australia/NZ/France: PwC GPP; Germany: DATEV; UK: my@PayWindow; etc.)' },
      { id: 'pay-questions',     text: 'For any payslip or payroll questions: email payrollrequests@squareup.com' },
    ],
  },
  {
    id: 'equity',
    title: 'Stock, RSUs & ESPP',
    icon: '📈',
    color: 'ic-violet',
    items: [
      { id: 'eq-rsu-review',      text: 'Review your severance package for the treatment of unvested RSUs and Pay My Way cash awards' },
      { id: 'eq-etrade-contact',  text: 'Update your contact information on your E*TRADE account before your work email is deactivated — call (800) 838-0908 or visit etrade.com/contact' },
      { id: 'eq-espp-check',      text: 'Check your ESPP participation at etrade.com — you may continue through your extended separation date, and if that date is on or after May 15, 2026, your contributions will be used for the May 15 purchase' },
      { id: 'eq-insider-trading', text: 'You remain subject to Block\'s Insider Trading Policy through your separation date and potentially beyond' },
      { id: 'eq-mnpi',            text: 'If you possess Material Non-Public Information (MNPI): you may not trade until that information is public, regardless of employment status' },
      { id: 'eq-windows',         text: 'Upcoming open trading windows — Schedule I: March 2–17 & May 11–June 16; Schedule II: March 2–3 & May 11–June 2' },
    ],
  },
  {
    id: 'equipment',
    title: 'Equipment & IT',
    icon: '💻',
    color: 'ic-slate',
    items: [
      { id: 'it-keep-devices', text: 'Your Block-issued laptop, phone, and iPad are yours to keep — no return is required' },
      { id: 'it-wipe-note',    text: 'Block sent a remote wipe signal on Feb 26 at 7pm PT; if your device wasn\'t online, it will wipe the next time it connects' },
      { id: 'it-taxable',      text: 'Note: fair market value of kept devices counts as taxable income with your severance payment (most devices < $500; specialty items up to $4,500)' },
      { id: 'it-dont-want',    text: 'If you do NOT want to keep a device: email it-logistics@block.xyz with the 6-digit asset number from each device' },
      { id: 'it-accessories',  text: 'Accessories (keyboards, mice, monitors, cables, hubs) are yours to keep — no action needed, not taxable income' },
      { id: 'it-gmail',        text: 'If you used Gmail for both Block and personal email: reinstall the Gmail app after MDM removal and log into your personal account' },
      { id: 'it-mdm-issues',   text: 'MDM removal issues on personal devices: email mission-control@block.xyz' },
    ],
  },
  {
    id: 'career',
    title: 'Career & Job Search',
    icon: '🔍',
    color: 'ic-rose',
    items: [
      { id: 'car-accomplishments', text: 'Write down as many details of projects, work streams, and accomplishments from your time at Block while it\'s still fresh in your mind' },
      { id: 'car-lhh-activate', text: 'Sign your separation agreement to activate Lee Hecht Harrison (LHH) career transition services — 3 months of interview prep, resume workshops, and more' },
      { id: 'car-lhh-wait',     text: 'Expect contact from LHH within 5–7 business days of signing; find the LHH flyer in your Workday documents if you need to reach out directly' },
      { id: 'car-eap',          text: 'Access Block\'s Employee Assistance Program (EAP) — 3 months of free, 24/7 confidential emotional support and referral resources (details in offboarding materials)' },
      { id: 'car-linkedin',     text: 'Update your LinkedIn profile (headline, summary, current role end date) before your work email is deactivated' },
      { id: 'car-resume',       text: 'Update your resume with your Block role, dates, and key accomplishments' },
      { id: 'car-network',      text: 'Reach out to your professional network — a brief note goes a long way' },
    ],
  },
  {
    id: 'documents',
    title: 'Documents & Accounts',
    icon: '📄',
    color: 'ic-amber',
    items: [
      { id: 'doc-workday-all',     text: 'Download everything from Workday → Profile → Overview before your access ends' },
      { id: 'doc-pay-stubs',       text: 'Download pay stubs from your payroll portal (Ultipro, Payworks, or country-specific) for the last 6–12 months' },
      { id: 'doc-w2',              text: 'Gather W-2s and tax documents for the current year and prior year' },
      { id: 'doc-employment-info', text: 'Record your official title, start date, and separation date for future job applications and references' },
      { id: 'doc-reference',       text: 'Request reference or recommendation letters from your manager or teammates while contact is fresh' },
      { id: 'doc-email-accounts',  text: 'Identify personal accounts (banks, subscriptions, services) linked to your Block/Square email and update them' },
      { id: 'doc-budget',          text: 'Review your monthly budget and calculate your runway (savings ÷ monthly expenses = months of cushion)' },
      { id: 'doc-401k-rollover',   text: 'When you start your next role, consider rolling your Block 401K into your new employer\'s plan or a personal IRA' },
    ],
  },
];

// ── State helpers ──────────────────────────────────────────────────────────

function load()      { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } }
function save(state) { localStorage.setItem(KEY, JSON.stringify(state)); }

// ── Progress messages ──────────────────────────────────────────────────────

function getMessage(pct) {
  if (pct === 0)  return 'Check off items as you complete them — no need to do it all at once.';
  if (pct < 15)   return 'You\'ve started. That\'s the most important step.';
  if (pct < 35)   return 'Making progress. Take it one section at a time.';
  if (pct < 55)   return 'Good progress. The important things are getting handled.';
  if (pct < 75)   return 'More than halfway through.';
  if (pct < 100)  return 'Almost done. Just a few things left.';
  return 'Everything is taken care of. Take care of yourself too.';
}

// ── Rendering ──────────────────────────────────────────────────────────────

function render() {
  const state     = load();
  const container = document.getElementById('sections');
  container.innerHTML = '';

  SECTIONS.forEach(sec => {
    const done   = sec.items.filter(i => state[i.id]).length;
    const total  = sec.items.length;
    const pct    = total ? (done / total) * 100 : 0;
    const isOpen = !!state[`__open_${sec.id}`];
    const allDone = done === total && total > 0;

    const card = document.createElement('div');
    card.className   = `section-card${isOpen ? ' expanded' : ''}${allDone ? ' all-done' : ''}`;
    card.dataset.section = sec.id;

    card.innerHTML = `
      <div class="section-header" onclick="toggleSection('${sec.id}')">
        <div class="section-icon ${sec.color}">${sec.icon}</div>
        <div class="section-info">
          <div class="section-title">
            ${sec.title}
            <span class="done-badge">Done</span>
          </div>
          <div class="section-meta">
            <div class="sec-bar-wrap">
              <div class="sec-bar-fill" style="width:${pct.toFixed(1)}%"></div>
            </div>
            <span class="sec-count">${done} of ${total}</span>
          </div>
        </div>
        <svg class="chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      </div>
      <div class="section-body">
        <div class="section-items">
          ${sec.items.map(item => `
            <div class="item${state[item.id] ? ' done' : ''}"
                 data-item="${item.id}"
                 data-section="${sec.id}"
                 onclick="toggleItem('${item.id}','${sec.id}')"
                 role="checkbox"
                 aria-checked="${!!state[item.id]}"
                 tabindex="0">
              <div class="checkbox-ui">
                <svg class="tick" width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4.5L4 7.5L10 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="item-text">${item.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  updateOverall(state);
}

function updateOverall(state) {
  const all   = SECTIONS.flatMap(s => s.items);
  const done  = all.filter(i => state[i.id]).length;
  const total = all.length;
  const pct   = total ? (done / total) * 100 : 0;

  document.getElementById('overall-bar').style.width        = pct.toFixed(1) + '%';
  document.getElementById('overall-count').textContent      = `${done} of ${total} completed`;
  document.getElementById('progress-note').textContent      = getMessage(Math.round(pct));
}

function updateSection(secId, state) {
  const sec = SECTIONS.find(s => s.id === secId);
  if (!sec) return;

  const done  = sec.items.filter(i => state[i.id]).length;
  const total = sec.items.length;
  const pct   = total ? (done / total) * 100 : 0;

  const card = document.querySelector(`.section-card[data-section="${secId}"]`);
  if (!card) return;

  card.querySelector('.sec-bar-fill').style.width  = pct.toFixed(1) + '%';
  card.querySelector('.sec-count').textContent     = `${done} of ${total}`;
  card.classList.toggle('all-done', done === total && total > 0);
}

// ── Interactions ───────────────────────────────────────────────────────────

function toggleItem(itemId, secId) {
  const state    = load();
  state[itemId]  = !state[itemId];
  save(state);

  const el = document.querySelector(`.item[data-item="${itemId}"]`);
  if (el) {
    el.classList.toggle('done', state[itemId]);
    el.setAttribute('aria-checked', state[itemId] ? 'true' : 'false');
  }

  updateSection(secId, state);
  updateOverall(state);
}

function toggleSection(secId) {
  const card   = document.querySelector(`.section-card[data-section="${secId}"]`);
  if (!card) return;

  const nowOpen = !card.classList.contains('expanded');
  card.classList.toggle('expanded', nowOpen);

  const state = load();
  if (nowOpen) { state[`__open_${secId}`] = true; }
  else         { delete state[`__open_${secId}`]; }
  save(state);
}

function downloadMarkdown() {
  const state = load();
  const all   = SECTIONS.flatMap(s => s.items);
  const done  = all.filter(i => state[i.id]).length;
  const total = all.length;
  const pct   = total ? Math.round((done / total) * 100) : 0;
  const date  = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  let md  = `# Transition Checklist\n\n`;
  md     += `**Progress:** ${done} of ${total} completed (${pct}%)\n`;
  md     += `**Last updated:** ${date}\n\n---\n\n`;

  SECTIONS.forEach(sec => {
    md += `## ${sec.icon} ${sec.title}\n\n`;
    sec.items.forEach(item => {
      md += `- [${state[item.id] ? 'x' : ' '}] ${item.text}\n`;
    });
    md += '\n';
  });

  const blob = new Blob([md], { type: 'text/markdown' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'transition-checklist.md';
  a.click();
  URL.revokeObjectURL(url);
}

function handleReset(e) {
  e.preventDefault();
  if (confirm('Reset all progress? This cannot be undone.')) {
    localStorage.removeItem(KEY);
    render();
  }
}

// ── Keyboard accessibility ─────────────────────────────────────────────────

document.addEventListener('keydown', e => {
  if (e.key !== ' ' && e.key !== 'Enter') return;
  const t = e.target;
  if (t.classList.contains('item')) {
    e.preventDefault();
    toggleItem(t.dataset.item, t.dataset.section);
  }
});

// ── Init ───────────────────────────────────────────────────────────────────

render();
