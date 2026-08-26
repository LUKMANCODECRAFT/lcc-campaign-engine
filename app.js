/**
 * LCC CopyStrike Engine v2.0 - Core Application Logic
 * Comprehensive AI Campaign & Copywriting SaaS Engine
 */

// Global Application State
const state = {
  activeTab: 'studio',
  activeDevice: 'email',
  activeVariant: 'A', // 'A' or 'B'
  currentCampaign: {
    niche: 'tech',
    channel: 'email',
    tone: 'urgency',
    offer: '25% OFF Annual Plans + VIP Onboarding',
    persona: 'Growth Marketers & Agency Owners',
    ctaLink: 'lcc-app.co/deal',
    variantA: '',
    variantB: '',
    activeCopy: '',
    statsA: null,
    statsB: null
  },
  reachSize: 5000,
  averageOrderValue: 50,
  varianceMultiplier: 1,
  savedVault: []
};

// Comprehensive Copywriting Template Bank
const copyTemplates = {
  ecommerce: {
    email: {
      A: "Subject: ⏰ Final Hours: Claim [OFFER] before it's gone!\n\nHey [PERSONA],\n\nThis is your final notice. The inventory for our high-demand items is flying off shelves, and your exclusive code is set to expire tonight.\n\nUse discount code CRAFT at checkout to lock in [OFFER].\n\n👉 Secure your savings now: [CTA]",
      B: "Subject: Loved by 10,000+ shoppers like you ✨\n\nHi [PERSONA],\n\nFinding premium quality products that actually deliver shouldn't be a gamble. That's why over 10,000 customers rated us 4.9/5 stars this month.\n\nTo welcome you to the family, we're giving you [OFFER].\n\nClaim your reward here: [CTA]"
    },
    sms: {
      A: "LCC Retail: 🚨 Urgent! Your cart code expires at midnight. Use code SALE for [OFFER] before stock runs out: [CTA]",
      B: "LCC Retail: Treat yourself today! Enjoy [OFFER] on your order. Free shipping included: [CTA]"
    },
    meta: {
      A: "🔥 FLASH SALE ALERT: Don't miss out! Get [OFFER] on all top-rated collections today. Limited stock remaining! Tap Shop Now: [CTA]",
      B: "See why 10,000+ customers switched to us this season. Elevate your everyday style with [OFFER]. Click below to explore: [CTA]"
    },
    linkedin: {
      A: "Hi [PERSONA], we are offering a direct B2B retail partner discount: [OFFER] for bulk orders this quarter. Let's connect: [CTA]",
      B: "Hello [PERSONA], scaling your retail merchandise? Check out how our top partners grew margins with [OFFER]: [CTA]"
    },
    google: {
      A: "Official Store | Get [OFFER] Today | Fast 2-Day Shipping. Shop Top Collections Now: [CTA]",
      B: "Rated #1 Best Choice | Save With [OFFER] | 100% Satisfaction Guarantee. Order Here: [CTA]"
    }
  },
  tech: {
    email: {
      A: "Subject: Quick question regarding your software workflow ⚡\n\nHi [PERSONA],\n\nMost modern teams lose 12+ hours every week to manual data entry and inefficient campaigns. We built CopyStrike to solve that exact pain point.\n\nFor the next 48 hours, we are granting a [OFFER] to early adopter teams.\n\nClaim your access key: [CTA]",
      B: "Subject: How top agencies scaled campaign ROI by 3.4x 📈\n\nHello [PERSONA],\n\nInstead of spending days drafting copy variants and guessing analytics, high-growth teams automate their workflow in seconds.\n\nWe'd love to help your team achieve the same results with a [OFFER].\n\nSee how it works: [CTA]"
    },
    sms: {
      A: "LCC Tech: Ready to automate your marketing? Claim [OFFER] before onboarding slots fill up: [CTA]",
      B: "LCC Tech: Scale campaign outputs 5x faster. Grab your [OFFER] today: [CTA]"
    },
    meta: {
      A: "🚀 Stop wasting hours on manual campaigns! Automate your entire copywriting pipeline today with [OFFER]. Tap Learn More: [CTA]",
      B: "Trusted by 500+ SaaS founders & marketers. Generate high-converting copy in 1 click with [OFFER]. Start today: [CTA]"
    },
    linkedin: {
      A: "Hi [PERSONA], noticed your team is scaling fast. We're offering a direct setup with [OFFER] to optimize campaign pipelines. Interested in a 5-min demo? [CTA]",
      B: "Hello [PERSONA], wanted to share how agency founders are saving 15 hours weekly while boosting conversions. Here's a [OFFER] for your team: [CTA]"
    },
    google: {
      A: "AI Campaign Software | Automate Copy & Ads | Claim [OFFER] Today. Get Started: [CTA]",
      B: "Scale Campaign ROI 3x | #1 Automated Studio | Get [OFFER] Now. Free Demo: [CTA]"
    }
  },
  realestate: {
    email: {
      A: "Subject: 🏡 Off-market property alert matching your criteria\n\nHello [PERSONA],\n\nFinding high-yielding properties in today's market requires speed. We just pulled 3 private off-market listings before they hit public MLS.\n\nBook a private walkthrough today and unlock a [OFFER].\n\nView private listings: [CTA]",
      B: "Subject: Your guide to smart property investments this year 🔑\n\nHi [PERSONA],\n\nReal estate wealth is built on timing and expert guidance. Our client portfolio grew by 18% year-over-year.\n\nWe're hosting private consultations and including [OFFER] for new buyers this week.\n\nSchedule your session: [CTA]"
    },
    sms: {
      A: "LCC Homes: 🚨 New off-market listings live! Book a walkthrough today to get [OFFER]: [CTA]",
      B: "LCC Homes: Ready for your dream home? Unlock an exclusive [OFFER] on private viewings: [CTA]"
    },
    meta: {
      A: "🏡 Exclusive Off-Market Properties! Don't get outbid. Secure [OFFER] when you book a walkthrough today: [CTA]",
      B: "Find your ideal home with zero stress. Join 1,200+ happy buyers and claim [OFFER] today: [CTA]"
    },
    linkedin: {
      A: "Hi [PERSONA], looking for high-yield commercial or residential real estate assets? Access our private list + [OFFER]: [CTA]",
      B: "Hello [PERSONA], we assist accredited investors in building resilient property portfolios. Claim your consultation + [OFFER]: [CTA]"
    },
    google: {
      A: "Off-Market Properties | Private Home Viewings | Claim [OFFER] Now: [CTA]",
      B: "Top Real Estate Agency | Trusted Property Advisors | Get [OFFER] Today: [CTA]"
    }
  },
  fitness: {
    email: {
      A: "Subject: 💥 Stop putting off your transformation. Time is now!\n\nHey [PERSONA],\n\nConsistency beats motivation every single day. If you've been waiting for a sign to get back in peak shape, this is it.\n\nSign up this week and secure a [OFFER]. No long-term lockups, just real results.\n\nClaim your spot: [CTA]",
      B: "Subject: Meet Sarah: How she lost 20lbs in 90 days 💪\n\nHi [PERSONA],\n\nTransformations don't happen by accident — they happen with the right system and supportive environment.\n\nJoin our community today and claim a [OFFER] on your customized training package.\n\nStart your journey: [CTA]"
    },
    sms: {
      A: "LCC Gym: 🚨 24 Hours Left! Claim [OFFER] on all membership passes today: [CTA]",
      B: "LCC Gym: Ready to feel stronger than ever? Get [OFFER] when you join this week: [CTA]"
    },
    meta: {
      A: "💪 Smash your fitness goals this season! Get [OFFER] on personal training & workout passes. Tap to Join: [CTA]",
      B: "Transform your mind and body with elite trainers. Claim your [OFFER] today before spots fill up: [CTA]"
    },
    linkedin: {
      A: "Hi [PERSONA], workplace wellness drives productivity. We offer executive fitness packages with [OFFER]: [CTA]",
      B: "Hello [PERSONA], boost corporate health and energy. Claim a customized team pass with [OFFER]: [CTA]"
    },
    google: {
      A: "#1 Rated Fitness Center | Personal Training | Get [OFFER] Today: [CTA]",
      B: "Transform Your Health | Elite Fitness Community | Claim [OFFER] Now: [CTA]"
    }
  },
  finance: {
    email: {
      A: "Subject: 📉 Protect your capital & capitalize on market trends\n\nDear [PERSONA],\n\nVolatility creates unmatched opportunity for prepared investors. Don't let inflation erode your hard-earned wealth.\n\nSchedule a portfolio review with our analysts today and receive a [OFFER].\n\nBook your review: [CTA]",
      B: "Subject: Wealth building strategies for smart investors 📈\n\nHello [PERSONA],\n\nManaging assets requires proven risk mitigation strategies and proactive market insight.\n\nWe're offering new institutional & private clients a [OFFER] for Q3 planning.\n\nExplore portfolio strategies: [CTA]"
    },
    sms: {
      A: "LCC Capital: Market update alert! Book your strategy session and claim [OFFER] today: [CTA]",
      B: "LCC Capital: Optimize your asset returns. Receive a [OFFER] on portfolio management: [CTA]"
    },
    meta: {
      A: "📊 Smart Wealth Strategies for Modern Investors. Get a [OFFER] on private consultation sessions: [CTA]",
      B: "Build long-term financial security with institutional-grade insights. Claim your [OFFER] today: [CTA]"
    },
    linkedin: {
      A: "Hi [PERSONA], optimizing treasury management or asset growth? Receive a private consultation + [OFFER]: [CTA]",
      B: "Hello [PERSONA], we help founders and executives structure tax-efficient wealth growth. Claim your [OFFER]: [CTA]"
    },
    google: {
      A: "Wealth Management Services | Private Advisory | Claim [OFFER] Today: [CTA]",
      B: "Institutional Asset Strategy | Top Financial Advisors | Get [OFFER] Now: [CTA]"
    }
  },
  localservice: {
    email: {
      A: "Subject: 🛠 Instant appointment slot available for your home service!\n\nHi [PERSONA],\n\nDon't let home maintenance issues turn into costly repairs down the line. Our certified tech team is in your area this week.\n\nBook today and receive a [OFFER] on all diagnostic inspections.\n\nClaim your slot: [CTA]",
      B: "Subject: 5-Star rated local service you can count on ⭐\n\nHello [PERSONA],\n\nWe treat your home like our own. With 500+ 5-star local reviews, we guarantee prompt, reliable service every time.\n\nEnjoy a special [OFFER] on your next booking.\n\nBook online here: [CTA]"
    },
    sms: {
      A: "LCC Services: Need home repair? Claim [OFFER] when you book your service today: [CTA]",
      B: "LCC Services: Fast, reliable 5-star service in your neighborhood. Get [OFFER]: [CTA]"
    },
    meta: {
      A: "🛠 Trusted Local Home Experts! Get [OFFER] on your service call today. Tap Book Now: [CTA]",
      B: "Top-Rated Service Technicians. Fast response time + [OFFER] for new clients. Click here: [CTA]"
    },
    linkedin: {
      A: "Hi [PERSONA], commercial facility management services made effortless. Claim a [OFFER] on corporate maintenance: [CTA]",
      B: "Hello [PERSONA], streamline your property upkeep with certified technicians. Get [OFFER] today: [CTA]"
    },
    google: {
      A: "Local Home Repair & Service | Certified Experts | Save With [OFFER]: [CTA]",
      B: "5-Star Rated Technicians | Fast 24/7 Response | Get [OFFER] Now: [CTA]"
    }
  }
};

// Preset Templates Gallery
const presetGallery = [
  {
    title: "🚀 SaaS Founder Outbound Engine",
    niche: "tech",
    channel: "email",
    tone: "urgency",
    offer: "Free 30-Day Growth Audit + 50% Off",
    persona: "Agency Owners & Tech Founders",
    ctaLink: "lcc-app.co/audit"
  },
  {
    title: "🛍 Black Friday E-Commerce Blaster",
    niche: "ecommerce",
    channel: "sms",
    tone: "urgency",
    offer: "40% OFF Entire Cart + Free Shipping",
    persona: "VIP Shoppers & Subscribers",
    ctaLink: "lcc-shop.co/bfcm"
  },
  {
    title: "🏡 Luxury Property Off-Market Showcase",
    niche: "realestate",
    channel: "email",
    tone: "luxury",
    offer: "$10,000 Closing Cost Credit",
    persona: "High Net Worth Investors",
    ctaLink: "lcc-homes.co/vip"
  },
  {
    title: "💪 Gym New Year Transformation Blitz",
    niche: "fitness",
    channel: "meta",
    tone: "value",
    offer: "Zero Enrollment Fee + 1st Month Free",
    persona: "Local Fitness Seekers",
    ctaLink: "lcc-fit.co/join"
  }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupFormListeners();
  setupAnalyticsControls();
  setupVaultControls();
  loadSavedVaultFromStorage();
  
  // Initial Dual Variant Generation
  generateCopyVariants();
  
  // Render Initial Chart & Funnel
  updateAnalyticsFunnel();
});

/* ==========================================================================
   Navigation & View Switcher
   ========================================================================== */
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const viewPanels = document.querySelectorAll('.view-panel');
  const topbarTitle = document.getElementById('topbar-title');
  const topbarDesc = document.getElementById('topbar-desc');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-tab');
      state.activeTab = targetTab;

      // Update Nav active class
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      // Update View Panel active class
      viewPanels.forEach(p => p.classList.remove('active'));
      const activePanel = document.getElementById(`view-${targetTab}`);
      if (activePanel) activePanel.classList.add('active');

      // Update Header Text
      switch(targetTab) {
        case 'studio':
          topbarTitle.textContent = 'AI Copy Studio';
          topbarDesc.textContent = 'Generate high-converting multi-channel copywriting & campaign strategies.';
          break;
        case 'mockups':
          topbarTitle.textContent = 'Live Device Simulator';
          topbarDesc.textContent = 'Preview your generated campaign copy as customers see it across channels.';
          updateDeviceMockup();
          break;
        case 'analytics':
          topbarTitle.textContent = 'Analytics & Funnel Simulator';
          topbarDesc.textContent = 'Real-time campaign performance projections, open rates, and revenue funnel.';
          updateAnalyticsFunnel();
          break;
        case 'vault':
          topbarTitle.textContent = 'Saved Campaign Vault';
          topbarDesc.textContent = 'Manage, search, and export your high-performing campaign history.';
          renderVaultTable();
          break;
      }
    });
  });

  // Device Mockup Switcher Tabs
  const deviceTabs = document.querySelectorAll('.tab-btn[data-device]');
  deviceTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      deviceTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeDevice = btn.getAttribute('data-device');
      updateDeviceMockup();
    });
  });

  // Quick Preset Button
  document.getElementById('btn-load-preset').addEventListener('click', loadRandomPreset);

  // Quick Save Button
  document.getElementById('btn-quick-save').addEventListener('click', saveCurrentCampaignToVault);
}

/* ==========================================================================
   Form Handling & Copy Generator
   ========================================================================== */
function setupFormListeners() {
  const form = document.getElementById('generator-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    state.currentCampaign.niche = document.getElementById('niche').value;
    state.currentCampaign.channel = document.getElementById('channel').value;
    state.currentCampaign.tone = document.getElementById('tone').value;
    state.currentCampaign.offer = document.getElementById('offer').value;
    state.currentCampaign.persona = document.getElementById('persona').value || 'valued customer';
    state.currentCampaign.ctaLink = document.getElementById('cta-link').value || 'lcc-app.co/deal';

    generateCopyVariants();
    showToast('Dual A/B Copy Generated!', 'fa-wand-magic-sparkles');
  });

  // Copy Active Variant Button
  document.getElementById('btn-copy-selected').addEventListener('click', () => {
    const textToCopy = state.currentCampaign.activeCopy;
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast(`Variant ${state.activeVariant} copied to clipboard!`, 'fa-copy');
    });
  });

  // Send to Funnel Analytics Button
  document.getElementById('btn-test-analytics').addEventListener('click', () => {
    document.querySelector('.nav-item[data-tab="analytics"]').click();
  });
}

function generateCopyVariants() {
  const c = state.currentCampaign;
  
  let tA = copyTemplates[c.niche]?.[c.channel]?.A || "Special offer: [OFFER]. Claim at [CTA]";
  let tB = copyTemplates[c.niche]?.[c.channel]?.B || "Exclusive access: Enjoy [OFFER]. Details: [CTA]";

  // Replace Interpolations
  let rawA = tA.replace(/\[OFFER\]/g, c.offer)
               .replace(/\[PERSONA\]/g, c.persona)
               .replace(/\[CTA\]/g, c.ctaLink);

  let rawB = tB.replace(/\[OFFER\]/g, c.offer)
               .replace(/\[PERSONA\]/g, c.persona)
               .replace(/\[CTA\]/g, c.ctaLink);

  // Apply Tone Modifications
  if (c.tone === 'urgency') {
    rawA = "🔥 [TIME SENSITIVE ALERT]\n" + rawA;
    rawB = "⚡ ACT FAST: " + rawB;
  } else if (c.tone === 'luxury') {
    rawA = "👑 EXCLUSIVE PRIVATE INVITATION\n\n" + rawA;
    rawB = "✨ BY APPOINTMENT ONLY\n\n" + rawB;
  }

  c.variantA = rawA;
  c.variantB = rawB;
  c.activeCopy = state.activeVariant === 'A' ? rawA : rawB;

  // Render to DOM
  document.getElementById('copy-output-a').textContent = rawA;
  document.getElementById('copy-output-b').textContent = rawB;

  // Project Simulated CTR
  const ctrA = (c.channel === 'email' ? 4.8 : c.channel === 'sms' ? 14.2 : 3.5).toFixed(1);
  const ctrB = (c.channel === 'email' ? 5.2 : c.channel === 'sms' ? 12.8 : 4.1).toFixed(1);
  
  document.getElementById('stats-a').textContent = `Proj. CTR: ${ctrA}%`;
  document.getElementById('stats-b').textContent = `Proj. CTR: ${ctrB}%`;

  // Analyze active copy score
  analyzeCopyScore(c.activeCopy);

  // Update Live Device Mockups if on mockups view
  updateDeviceMockup();
}

function selectVariant(variantLetter) {
  state.activeVariant = variantLetter;
  state.currentCampaign.activeCopy = variantLetter === 'A' ? state.currentCampaign.variantA : state.currentCampaign.variantB;

  const cardA = document.getElementById('variant-a-card');
  const cardB = document.getElementById('variant-b-card');

  if (variantLetter === 'A') {
    cardA.classList.add('selected');
    cardB.classList.remove('selected');
  } else {
    cardB.classList.add('selected');
    cardA.classList.remove('selected');
  }

  analyzeCopyScore(state.currentCampaign.activeCopy);
  updateDeviceMockup();
  showToast(`Variant ${variantLetter} selected as primary!`, 'fa-check');
}

/* ==========================================================================
   Copy Inspector & Analysis Engine
   ========================================================================== */
function analyzeCopyScore(text) {
  if (!text) return;

  const words = text.trim().split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;

  // Spam Word Checker
  const spamTriggers = ['free', 'cash', 'guarantee', '100%', 'click here', 'act now', 'urgent', 'limited time', 'winner', 'no obligation'];
  let spamHits = 0;
  const lower = text.toLowerCase();
  spamTriggers.forEach(word => {
    if (lower.includes(word)) spamHits++;
  });

  let spamRatingText = 'Low (0%)';
  let spamClass = 'good';
  if (spamHits === 1) { spamRatingText = 'Med (12%)'; spamClass = 'warning'; }
  else if (spamHits >= 2) { spamRatingText = 'High (28%)'; spamClass = 'danger'; }

  // Readability Score Mock Calculation
  const avgWordLen = text.length / (wordCount || 1);
  let readability = Math.min(98, Math.max(60, Math.round(100 - avgWordLen * 5)));

  // Sentiment Analysis
  let sentiment = 'Balanced';
  let sentimentClass = 'good';
  if (lower.includes('urgent') || lower.includes('alert') || lower.includes('expire')) {
    sentiment = 'High FOMO';
    sentimentClass = 'warning';
  } else if (lower.includes('exclusive') || lower.includes('loved') || lower.includes('rated')) {
    sentiment = 'Trust / Proof';
    sentimentClass = 'good';
  }

  // Update UI Elements
  const elSpam = document.getElementById('score-spam');
  elSpam.textContent = spamRatingText;
  elSpam.className = `score-value ${spamClass}`;

  document.getElementById('score-readability').textContent = `${readability}/100`;

  const elSent = document.getElementById('score-sentiment');
  elSent.textContent = sentiment;
  elSent.className = `score-value ${sentimentClass}`;

  document.getElementById('score-words').textContent = `${wordCount} Words`;
}

/* ==========================================================================
   Device Mockup Renderer
   ========================================================================== */
function updateDeviceMockup() {
  const activeCopy = state.currentCampaign.activeCopy || "Generate copy in the studio to preview mockup.";
  const lines = activeCopy.split('\n');

  let subject = "Special Announcement";
  let bodyText = activeCopy;

  lines.forEach(line => {
    if (line.toLowerCase().startsWith('subject:')) {
      subject = line.replace(/subject:/i, '').trim();
      bodyText = activeCopy.replace(line, '').trim();
    }
  });

  // Hide all mockups
  document.getElementById('mockup-email').style.display = 'none';
  document.getElementById('mockup-sms').style.display = 'none';
  document.getElementById('mockup-meta').style.display = 'none';

  if (state.activeDevice === 'email') {
    const el = document.getElementById('mockup-email');
    el.style.display = 'block';
    document.getElementById('email-subject-preview').textContent = subject;
    document.getElementById('email-body-preview').textContent = bodyText;
  } else if (state.activeDevice === 'sms') {
    const el = document.getElementById('mockup-sms');
    el.style.display = 'block';
    document.getElementById('sms-body-preview').textContent = activeCopy;
  } else if (state.activeDevice === 'meta') {
    const el = document.getElementById('mockup-meta');
    el.style.display = 'block';
    document.getElementById('ad-banner-text').textContent = state.currentCampaign.offer.toUpperCase();
    document.getElementById('ad-body-preview').textContent = activeCopy;
  }
}

/* ==========================================================================
   Analytics & Funnel Engine
   ========================================================================== */
function setupAnalyticsControls() {
  const sliderReach = document.getElementById('slider-reach');
  const sliderAov = document.getElementById('slider-aov');
  const selectVariance = document.getElementById('select-variance');

  sliderReach.addEventListener('input', (e) => {
    state.reachSize = parseInt(e.target.value);
    document.getElementById('val-reach').textContent = state.reachSize.toLocaleString();
    updateAnalyticsFunnel();
  });

  sliderAov.addEventListener('input', (e) => {
    state.averageOrderValue = parseInt(e.target.value);
    document.getElementById('val-aov').textContent = `$${state.averageOrderValue}`;
    updateAnalyticsFunnel();
  });

  selectVariance.addEventListener('change', (e) => {
    state.varianceMultiplier = parseFloat(e.target.value);
    updateAnalyticsFunnel();
  });

  document.getElementById('btn-run-simulation').addEventListener('click', () => {
    updateAnalyticsFunnel();
    showToast('Funnel metrics recalculated!', 'fa-chart-column');
  });
}

function updateAnalyticsFunnel() {
  const reach = state.reachSize;
  const aov = state.averageOrderValue;
  const mult = state.varianceMultiplier;

  // Channel Benchmark Rates
  let baseOpenRate = state.currentCampaign.channel === 'email' ? 0.32 : state.currentCampaign.channel === 'sms' ? 0.88 : 0.45;
  let baseClickRate = state.currentCampaign.channel === 'email' ? 0.12 : state.currentCampaign.channel === 'sms' ? 0.22 : 0.15;
  let baseConvRate = 0.08;

  // Apply Variance
  const openRate = Math.min(0.95, baseOpenRate * mult);
  const opens = Math.round(reach * openRate);
  const clicks = Math.round(opens * baseClickRate);
  const conversions = Math.round(clicks * baseConvRate);
  const revenue = conversions * aov;
  const estimatedCost = Math.round(reach * 0.04);
  const roas = (revenue / (estimatedCost || 1)).toFixed(1);

  // Update Metric Cards
  document.getElementById('metric-open-rate').textContent = `${(openRate * 100).toFixed(1)}%`;
  document.getElementById('metric-conversions').textContent = conversions.toLocaleString();
  document.getElementById('metric-revenue').textContent = `$${revenue.toLocaleString()}`;
  document.getElementById('metric-roas').textContent = `${roas}x`;

  // Draw Dynamic SVG Bar/Funnel Chart
  renderSVGChart(reach, opens, clicks, conversions);
}

function renderSVGChart(reach, opens, clicks, conversions) {
  const container = document.getElementById('chart-container');
  const w = container.clientWidth || 500;
  const h = 240;

  const data = [
    { label: 'Broadcast Reach', val: reach, color: '#6366f1' },
    { label: 'Opens / Views', val: opens, color: '#38bdf8' },
    { label: 'Clicks / CTAs', val: clicks, color: '#f59e0b' },
    { label: 'Conversions', val: conversions, color: '#10b981' }
  ];

  const maxVal = reach;
  const barWidth = Math.floor((w - 100) / data.length);

  let svgHtml = `<svg width="100%" height="100%" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">`;

  // Render Horizontal Gridlines
  svgHtml += `
    <line x1="40" y1="20" x2="${w-20}" y2="20" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4"/>
    <line x1="40" y1="90" x2="${w-20}" y2="90" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4"/>
    <line x1="40" y1="160" x2="${w-20}" y2="160" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4"/>
  `;

  data.forEach((item, index) => {
    const barHeight = Math.max(15, Math.round((item.val / maxVal) * 140));
    const x = 60 + index * (barWidth + 20);
    const y = 180 - barHeight;

    svgHtml += `
      <g class="chart-group">
        <!-- Bar Rect -->
        <rect x="${x}" y="${y}" width="${barWidth - 10}" height="${barHeight}" fill="${item.color}" rx="6" opacity="0.85">
          <animate attributeName="height" from="0" to="${barHeight}" dur="0.6s" fill="freeze" />
          <animate attributeName="y" from="180" to="${y}" dur="0.6s" fill="freeze" />
        </rect>

        <!-- Value Label -->
        <text x="${x + (barWidth - 10)/2}" y="${y - 8}" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">
          ${item.val.toLocaleString()}
        </text>

        <!-- Category Label -->
        <text x="${x + (barWidth - 10)/2}" y="205" fill="#94a3b8" font-size="11" text-anchor="middle">
          ${item.label}
        </text>
      </g>
    `;
  });

  svgHtml += `</svg>`;
  container.innerHTML = svgHtml;
}

/* ==========================================================================
   Campaign Vault & Storage Engine
   ========================================================================== */
function setupVaultControls() {
  const searchInput = document.getElementById('vault-search');
  const channelFilter = document.getElementById('vault-filter-channel');

  searchInput.addEventListener('input', renderVaultTable);
  channelFilter.addEventListener('change', renderVaultTable);

  document.getElementById('btn-export-vault').addEventListener('click', exportVaultAsJSON);
}

function saveCurrentCampaignToVault() {
  const c = state.currentCampaign;
  if (!c.activeCopy) {
    showToast('Generate copy first before saving!', 'fa-triangle-exclamation');
    return;
  }

  const newEntry = {
    id: 'camp_' + Date.now(),
    niche: c.niche,
    channel: c.channel,
    offer: c.offer,
    variantUsed: state.activeVariant,
    copyText: c.activeCopy,
    dateSaved: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  };

  state.savedVault.unshift(newEntry);
  saveVaultToLocalStorage();
  showToast('Campaign saved to Vault!', 'fa-vault');
}

function loadSavedVaultFromStorage() {
  const stored = localStorage.getItem('lcc_copy_vault');
  if (stored) {
    try {
      state.savedVault = JSON.parse(stored);
    } catch(e) {
      state.savedVault = getInitialMockVault();
    }
  } else {
    state.savedVault = getInitialMockVault();
  }
}

function saveVaultToLocalStorage() {
  localStorage.setItem('lcc_copy_vault', JSON.stringify(state.savedVault));
}

function getInitialMockVault() {
  return [
    {
      id: 'camp_101',
      niche: 'ecommerce',
      channel: 'email',
      offer: '30% OFF Winter Jacket Flash Sale',
      variantUsed: 'A',
      copyText: 'Subject: Final Hours: Claim 30% OFF before stock runs out!',
      dateSaved: 'Aug 24, 2026'
    },
    {
      id: 'camp_102',
      niche: 'tech',
      channel: 'sms',
      offer: 'Free 14-Day Audit + VIP Onboarding',
      variantUsed: 'B',
      copyText: 'LCC Tech: Scale campaign outputs 5x faster. Claim your audit today.',
      dateSaved: 'Aug 22, 2026'
    }
  ];
}

function renderVaultTable() {
  const tbody = document.getElementById('vault-table-body');
  const query = document.getElementById('vault-search').value.toLowerCase();
  const channelVal = document.getElementById('vault-filter-channel').value;

  const filtered = state.savedVault.filter(item => {
    const matchesSearch = item.offer.toLowerCase().includes(query) || item.copyText.toLowerCase().includes(query);
    const matchesChannel = channelVal === 'all' || item.channel === channelVal;
    return matchesSearch && matchesChannel;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-dim); padding: 30px;">No saved campaigns match your filter.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(item => `
    <tr>
      <td><strong>${escapeHtml(item.offer)}</strong></td>
      <td style="text-transform: capitalize;">${escapeHtml(item.niche)}</td>
      <td><span class="tag-pill tag-${item.channel}">${item.channel.toUpperCase()}</span></td>
      <td>Variant ${item.variantUsed}</td>
      <td style="color: var(--text-muted); font-size: 0.82rem;">${item.dateSaved}</td>
      <td>
        <button class="btn-secondary" style="padding: 4px 10px; font-size: 0.78rem;" onclick="copyVaultItemText('${item.id}')">
          <i class="fa-solid fa-copy"></i> Copy
        </button>
        <button class="btn-secondary" style="padding: 4px 10px; font-size: 0.78rem; color: var(--accent-rose);" onclick="deleteVaultItem('${item.id}')">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function copyVaultItemText(id) {
  const item = state.savedVault.find(v => v.id === id);
  if (item) {
    navigator.clipboard.writeText(item.copyText).then(() => {
      showToast('Vault copy snippet copied!', 'fa-copy');
    });
  }
}

function deleteVaultItem(id) {
  state.savedVault = state.savedVault.filter(v => v.id !== id);
  saveVaultToLocalStorage();
  renderVaultTable();
  showToast('Campaign removed from Vault.', 'fa-trash');
}

function exportVaultAsJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.savedVault, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `lcc_campaign_vault_${Date.now()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Vault exported as JSON file!', 'fa-file-export');
}

/* ==========================================================================
   Presets Gallery & Helpers
   ========================================================================== */
function loadRandomPreset() {
  const preset = presetGallery[Math.floor(Math.random() * presetGallery.length)];
  
  document.getElementById('niche').value = preset.niche;
  document.getElementById('channel').value = preset.channel;
  document.getElementById('tone').value = preset.tone;
  document.getElementById('offer').value = preset.offer;
  document.getElementById('persona').value = preset.persona;
  document.getElementById('cta-link').value = preset.ctaLink;

  state.currentCampaign.niche = preset.niche;
  state.currentCampaign.channel = preset.channel;
  state.currentCampaign.tone = preset.tone;
  state.currentCampaign.offer = preset.offer;
  state.currentCampaign.persona = preset.persona;
  state.currentCampaign.ctaLink = preset.ctaLink;

  generateCopyVariants();
  showToast(`Loaded Preset: ${preset.title}`, 'fa-lightbulb');
}

// Toast Alert Manager
function showToast(msg, icon = 'fa-circle-check') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid ${icon}" style="color: var(--accent-cyan);"></i> <span>${msg}</span>`;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Attach global object for inline handlers
window.app = {
  selectVariant,
  copyVaultItemText,
  deleteVaultItem
};