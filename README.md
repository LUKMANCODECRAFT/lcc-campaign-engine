# 🎯 LCC CopyStrike Engine v2.0

> **Next-Gen AI Campaign Generator & Automated Copywriting SaaS Suite**

LCC CopyStrike Engine v2.0 is a professional, high-converting copywriting and marketing campaign platform designed for agencies, growth marketers, SaaS founders, and e-commerce brands. It generates dual A/B copywriting variants, simulates live channel device previews, analyzes copy safety scores, and projects real-time conversion funnel analytics.

---

## 🌟 Key Features

### ⚡ 1. AI Copy Studio & Dual A/B Generator
- **Multi-Industry Targeting**: Tailored copy generation across 6 core industries:
  - E-Commerce & Retail Apparel
  - SaaS & B2B Tech Services
  - Real Estate & Property Development
  - Gym & Personal Training
  - Crypto & Wealth Management
  - Local Home Services & Agencies
- **Multi-Channel Distribution**: Optimized messaging for Email Sequences, SMS Text Blasters, Meta (FB & IG) Sponsored Ads, LinkedIn Direct Messages, and Google Search Ads.
- **5 Tone Profiles**: High Urgency/FOMO, Trust & Social Proof, Witty & Casual, High-Ticket Luxury, and Story-Driven.
- **Dual A/B Variant Outputs**: Generates Variant A (Direct / High Urgency) and Variant B (Social Proof / Soft) side-by-side with click-to-select and copy-to-clipboard functionality.

### 🧠 2. Real-Time Copy Inspector
- **Spam Rating Detector**: Evaluates copy against high-risk spam trigger words (*free, cash, guarantee, 100%, act now*).
- **Readability Index**: Calculates readability score (0–100 scale).
- **Sentiment Badge**: Highlights tone intent (High FOMO, Trust/Proof, Balanced).
- **Word & Character Counters**: Live length metrics.

### 📱 3. Live Device Simulator
- **Email Inbox View**: Renders Email Subject, Header metadata, Sender avatar, and formatted body text.
- **Smartphone SMS View**: iMessage-style phone frame with timestamp and responsive message bubble.
- **Meta Sponsored Ad Card**: Social media ad card with brand logo, promotional banner graphic, and ad caption.

### 📊 4. Funnel Analytics & Performance Predictor
- Interactive controls for **Audience Reach Size** (500 to 50,000 subscribers) and **Average Order Value ($)**.
- Real-time calculations for Open Rate %, Projected Conversions, Estimated Revenue ($), and Return on Ad Spend (ROAS).
- Animated SVG bar chart illustrating the complete marketing funnel (*Reach ➔ Opens ➔ Clicks ➔ Conversions*).

### 📁 5. Campaign Vault & Presets Gallery
- Persistent LocalStorage campaign manager with search filtering and channel tags.
- One-click **JSON Vault Export** and **Clipboard Copy** functionality.
- Pre-loaded preset gallery (SaaS Outbound, Black Friday E-Commerce, Luxury Real Estate Showcase, Gym Blitz).

---

## 🎨 Design System

LCC CopyStrike Engine v2.0 features a refined, corporate **Slate Dark Design Palette**:
- **Background Slate**: `#090d16` / `#0f1420`
- **Card Surfaces**: `#182030` with clean `#232d42` borders
- **Primary Accent**: Royal Blue `#2563eb` / `#1d4ed8`
- **Typography**: Google Fonts (`Outfit` for display headings, `Plus Jakarta Sans` for interface controls, `JetBrains Mono` for copy boxes).

---

## 📁 Repository Structure

```
lcc-campaign-engine/
├── index.html        # Main HTML layout, navigation, and multi-tab view panels
├── style.css         # Clean corporate slate CSS design system & device mockups
├── app.js            # Core application logic, template engine, & SVG chart renderer
└── README.md         # Technical documentation and project overview
```

---

## 🚀 Quick Start Guide

### Option 1: Direct Browser Launch
Simply double-click [`index.html`](file:///c:/Users/USER-PC/LCC/lcc-campaign-engine/index.html) or open it directly in any modern web browser.

### Option 2: Local HTTP Server
Run a lightweight HTTP server using Python or Node.js:

```bash
# Using Python
python -m http.server 8080

# Using Node / npx
npx serve .
```

Then navigate to `http://localhost:8080` in your browser.

---

## 📄 License
Internal LCC Proprietary - Developed for Copywriting & Marketing Automation.
