# CLAUDE.md — Furniture Dong B2B Website

## Project Overview

Build a B2B foreign trade website for **Furniture Dong**, a Chinese sofa manufacturer targeting global wholesale buyers, hotel purchasers, and interior designers.

**Goal:** A professional, high-converting B2B landing page that builds trust and drives inquiry submissions.

**Language:** All website content must be in **English**.

---

## Company Info

| Field | Detail |
|-------|--------|
| Brand | Furniture Dong |
| Parent Company | Impression North America Furniture Co., Ltd. |
| Location | Shandong, China |
| Experience | 20 years in furniture manufacturing |
| Factory Size | 80,000+ sqm R&D and production center |
| Team | 500+ employees |
| Highlight | In-house cowhide factory, Top 3 in China by scale |
| OEM Clients | Hooker, Bernhardt (US premium furniture brands) |
| Tagline | Beauty Unites. Love Connects the World · American Style |
| Website | furnituredong.com |
| Certification | SGS certified |

---

## Product

**American-style leather sofas.** Multiple configurations (single-seat, two-seat, three-seat, four-seat). Rich SKU variety. Details to be filled in later.

---

## Tech Stack

- **HTML5** semantic tags (`main`, `footer`, `article`) — no meaningless div stacking
- **Tailwind CSS** via CDN — no build tools needed
- **Vanilla JavaScript** — Modal forms, Accordion FAQ, smooth scroll
- **Deploy:** Vercel or Cloudflare Pages (free, connect GitHub and deploy)

---

## Page Architecture (Golden Flow)

### 1. Header
- Logo left, nav right
- Nav: Home / Products / About Us / News / Contact
- CTA button far right: `Request a Quote`
- No complex dropdowns

### 2. Hero Section
- **No carousels** (slow load, B2B buyers don't wait)
- One strong background image + one headline + one CTA
- Headline: `Premium American-Style Leather Sofas from China`
- Sub-headline: `20 Years Manufacturing · OEM for Hooker & Bernhardt · 80,000㎡ Factory`
- CTA: `Request a Quote`

### 3. About Us & Core Strengths
- Left image, right text — no long company history
- 4-icon Grid with concrete numbers:
  - 80,000㎡ Production Base
  - 500+ Professional Team
  - Top 3 Cowhide Factory in China
  - OEM for Hooker & Bernhardt

### 4. Product Showcase (3-tier layout)
- Tier 1: Category cards with image + short description
- Tier 2: Featured product — left image, right key specs
- Tier 3: Product gallery grid

### 5. CTA & Inquiry Form
- **Modal popup** — zero page jump, reduces drop-off
- Fields: Name / Company / Email / Country / Message
- After submit: redirect to a Thank You page

### 6. FAQ (Accordion)
- Left FAQ, right image — avoid full-width monotony
- Topics: MOQ / Lead Time / Customization / Payment / Certification / Shipping

### 7. News
- Keep site active for Google crawlers
- Minimum: one post per month (shipment photos, exhibition updates)
- Hide section entirely if no updates planned

### 8. Footer
- Minimal: copyright + physical address (Shandong, China) + social icons

---

## Design Direction

Products are **premium American-style leather furniture**. The site should feel:

- **Color palette:** Deep brown / warm beige / off-white / gold accents. No tech-blue.
- **Typography:** Playfair Display (headings) + Lato or Source Sans Pro (body)
- **Feel:** Refined, trustworthy, craftsmanship-forward
- **Reference:** Hooker Furniture, Bernhardt official websites

---

## Responsive Rules

- Mobile default: single column `grid-cols-1`
- Medium screens: `md:grid-cols-2`
- Large screens: `lg:grid-cols-3`
- Standard container: `max-w-6xl mx-auto px-6`

---

## SEO (configure before launch)

```
Title: Furniture Dong | American Style Leather Sofa Manufacturer China
Description: 20-year OEM manufacturer of premium American-style leather sofas.
             80,000㎡ factory, SGS certified. Trusted by Hooker & Bernhardt.
```

---

## Build Order (ship small, ship fast)

1. Create `index.html`, add Tailwind CDN, preview in browser
2. Build Hero Section, deploy to Vercel, confirm live URL works
3. Add sections one by one: About → Products → CTA → FAQ → Footer
4. Check mobile layout after every section
5. Final: fill in SEO meta tags and image alt attributes

---

## How to Prompt Claude Code

```
Build a [section name] with:
- Layout: [left-image right-text / 3-col grid / full-width background]
- Content: [what goes inside, reference company data above]
- Style: warm brown tones, Playfair Display headings, premium leather feel
- Interaction: [hover effects / modal / accordion]
- Responsive: single column on mobile, X columns on desktop
- Language: English only
```

---

*Furniture Dong · Shandong, China · "Beauty Unites. Love Connects the World"*
