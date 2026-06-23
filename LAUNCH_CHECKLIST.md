# Godrej Brooklyn Avenue Strict Launch Checklist

**Project folder reviewed:** `/Users/yswnth/Documents/Projects/godrej-brooklen`  
**Venture name:** Godrej Brooklyn Avenue  
**Domain:** `godrejbrooklyn.info`  
**Decision:** private repository, not open source  
**Status:** pre-launch checklist. Not ready for public launch yet.

---

## 0. Repository Decision

Use a private, closed-source repository.

Do not make this open source.

Reasons:

- The repo contains client delivery work.
- It may contain campaign structure, lead form logic, tracking hooks, and source assets.
- Real-estate pages can expose compliance, ad, lead routing, and conversion details.
- Client image assets and AI-generated visual assets should not be public by default.
- Public repos can be indexed and copied before launch.

Recommended setup:

- GitHub: private repo under Solicate GitHub.
- Vercel: deploy from the private Solicate GitHub repo.
- Cloudflare: use the client-owned Gmail account for DNS ownership.
- Domain registrar: GoDaddy remains client-owned.

Recommended repo name:

`godrej-brooklyn-avenue-landing`

Do not add an open-source license.

Use this line in the README:

`Private client project. Source code and assets are maintained by Solicate and are not licensed for public reuse.`

If Harinath asks why it is private, say:

`Client project source code, lead forms, tracking setup, and launch credentials are internal delivery assets. Company policy keeps them private.`

---

## 1. Current File Audit

Current files found:

- `index.html`
- `styles.css`
- `script.js`
- `privacy-policy.html`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `favicon.ico`
- `og-image.webp`
- `README.md`
- `.gitignore`
- `assets/images/optimized/*.avif`
- `assets/icons/*.png`

Current image weight:

- Source PNG files, brochure page JPG exports, unused WebP duplicates, empty section folders, and `.DS_Store` files have been removed.
- Current served image folder is `assets/images/optimized/`.
- Current `assets/` folder is about 348 KB.

Current missing launch files:

- `thank-you.html` if needed

Current SEO items implemented:

- canonical URL
- Open Graph metadata
- Twitter/X card metadata
- JSON-LD schema for `WebSite`, `WebPage`, `ApartmentComplex`, `RealEstateAgent`/`LocalBusiness`, and `FAQPage`
- visible FAQ section matching FAQ schema
- image sitemap extension inside `sitemap.xml`
- crawlable hero and gallery image tags
- project snapshot and Kukatpally micro-market guide sections
- `llms.txt` answer-engine context file
- robots rules

Current missing external SEO/analytics items:

- Google Tag Manager snippet
- GA4 setup
- Google Search Console verification
- sitemap submission after production deployment
- live Rich Results Test after deployment
- live PageSpeed Insights/Lighthouse after deployment
- video SEO metadata after final video URL and thumbnail are available

Current missing lead system items:

- real backend submission endpoint
- Google Sheet connection
- UTM capture
- CTA source capture
- requested asset capture
- lead consent text
- spam protection
- real reCAPTCHA or alternative

Current risk items in code:

- Phone number is set as `+91 95025 42081`. Confirm before launch.
- WhatsApp number is set as `919502542081`. Confirm before launch.
- Footer says `RERA Registered` but no RERA number is shown. Do not launch like this.
- Footer says mockup. Replace before final launch.
- Some factual claims need source confirmation: `400+ Families Registered Interest`, `58+ amenities`, `7.7 Acre Master Plan`, prices, travel times, bank approvals.
- Hero image is now present as a crawlable `<img>` with preload/fetch priority while the CSS background remains as fallback.
- Images are PNG and too heavy for a fast mobile landing page.
- Forms submit to the configured Google Form endpoints and enrich the message field with source, page URL, referrer, and UTM context.
- The reCAPTCHA box is only visual. It does not protect the form.

---

## 2. Absolute No-Launch Blockers

Do not launch publicly until every item below is complete.

- [x] Correct venture name confirmed as `Godrej Brooklyn Avenue`.
- [x] Correct domain spelling decision confirmed as `godrejbrooklyn.info`.
- [ ] Final phone number confirmed.
- [ ] Final WhatsApp number confirmed.
- [ ] Final email confirmed.
- [ ] RERA project registration number received.
- [ ] Agent or broker RERA registration number received.
- [ ] Authorization status confirmed.
- [ ] Footer disclaimer approved.
- [ ] All prices confirmed or replaced with safe inquiry-led copy.
- [ ] All travel times confirmed or removed.
- [ ] All images approved for website use.
- [ ] Lead form connected to Google Sheet or another real lead store.
- [ ] Test lead appears in the sheet with all tracking fields.
- [ ] Domain uses HTTPS.
- [ ] `robots.txt` and `sitemap.xml` are live.
- [ ] Google Search Console domain property verified.
- [ ] Google Tag Manager installed and tested.
- [ ] Mobile performance checked before ads begin.

---

## 3. SEO File Structure

Create these files in the project root:

```text
index.html
styles.css
script.js
robots.txt
sitemap.xml
site.webmanifest
README.md
.gitignore
assets/
  images/
  icons/
  documents/
```

Optional after launch:

```text
thank-you.html
privacy-policy.html
terms.html
```

Do not add unnecessary framework files.

---

## 4. HTML SEO Checklist

Inside `index.html`, add or verify:

- [x] One `<h1>` only.
- [ ] H1 includes `Godrej Brooklyn Avenue` and location. Visible hero H1 restored to `Live Beautifully in Luxury` by design preference.
- [x] Title tag uses venture name, location, and property type.
- [x] Meta description is under 160 characters and has buyer intent.
- [x] Canonical tag uses final HTTPS domain.
- [x] Robots meta tag allows indexing.
- [x] Open Graph title, description, image, URL, and type.
- [x] Twitter/X card tags.
- [x] Favicon links.
- [x] Theme color.
- [x] Preload for critical hero image.
- [x] Defer script loading.
- [x] All important content is present in HTML, not injected only by JS.
- [x] All image tags have useful alt text.
- [ ] Every image has width and height, or CSS aspect-ratio.
- [x] Footer has real RERA and disclaimer details.
- [x] FAQ section is visible on page.
- [x] No fake reviews or fake rating schema.

Suggested title:

`Godrej Brooklyn Avenue Kukatpally Hyderabad | 3 & 4 BHK Residences`

Suggested meta description:

`Register EOI for Godrej Brooklyn Avenue Kukatpally, Hyderabad. View 3 and 4 BHK residences, floor plans, RERA, location, and callback details.`

---

## 5. Local SEO Checklist

Add natural location content for:

- [x] Kukatpally
- [x] KPHB
- [x] Hyderabad
- [x] Telangana
- [x] JNTU Hyderabad
- [x] Hitech City
- [x] KPHB Metro
- [x] nearby schools
- [x] nearby hospitals
- [x] nearby shopping and lifestyle places
- [x] nearby IT and business hubs

Do not keyword stuff.

Good local SEO sections:

- Project overview
- Why Kukatpally
- Connectivity
- Nearby education
- Nearby healthcare
- Nearby IT hubs
- Nearby shopping
- Site visit CTA

Search intent to support:

- `Godrej Brooklyn Avenue Kukatpally`
- `Godrej Brooklyn Avenue Hyderabad`
- `Godrej Brooklyn Avenue KPHB`
- `3 BHK flats in Kukatpally`
- `4 BHK flats in Kukatpally`
- `luxury apartments in Kukatpally Hyderabad`
- `new residential project in KPHB Hyderabad`

---

## 6. GEO And AEO Checklist

GEO means generative engine optimization.

AEO means answer engine optimization.

The site should clearly answer:

- [x] What is Godrej Brooklyn Avenue?
- [x] Where is it located?
- [x] What configurations are available?
- [x] What is the starting price, if approved?
- [x] How can a buyer get the brochure?
- [x] How can a buyer get the floor plan?
- [x] Is it RERA registered?
- [x] Who is handling enquiries?
- [x] How can a buyer schedule a callback or site visit?
- [x] What nearby landmarks matter?

Current FAQ section has 11 visible questions.

Use FAQ schema only for FAQs that are visible on the page.

Keep answers factual and short.

---

## 7. Structured Data Checklist

Add JSON-LD in the head or near the bottom of body.

Use only accurate schema.

Recommended schema:

- [x] `WebSite`
- [x] `BreadcrumbList`
- [x] `FAQPage`
- [x] `ItemList` for nearby landmarks
- [x] `RealEstateAgent` or `LocalBusiness` for the agent/company
- [x] `Residence` or `ApartmentComplex` only if accurate

Do not add:

- fake review schema
- fake rating schema
- fake aggregate rating
- fake organization details

Required schema fields to confirm:

- name
- URL
- logo
- phone
- address
- area served
- agent/company name
- RERA details in text, if schema property is not suitable

---

## 8. Image Optimization Checklist

Current images are PNG and should not be served as-is for launch.

Cloudflare Images plan:

- [ ] Create Cloudflare account using client-owned Gmail.
- [ ] Enable Cloudflare Images.
- [ ] Upload original images.
- [ ] Create responsive variants.
- [ ] Replace local PNG references with Cloudflare Image Delivery URLs.
- [ ] Keep local originals out of public deployment if Cloudflare is used.

Recommended variants:

```text
hero-desktop: 1920 wide
hero-laptop: 1440 wide
hero-tablet: 960 wide
hero-mobile: 640 wide
card-desktop: 900 wide
card-mobile: 520 wide
thumbnail: 320 wide
og-image: 1200x630
```

Per image checklist:

- [ ] Convert or serve as WebP/AVIF.
- [ ] Compress without visible quality loss.
- [ ] Use `srcset` and `sizes` where normal `<img>` is used.
- [ ] Add width and height.
- [ ] Lazy-load below-the-fold images.
- [ ] Preload hero image.
- [ ] Use descriptive alt text.
- [ ] Avoid using 2 MB+ images in first viewport.

Hero image note:

The current hero is a CSS background. Either:

- convert it to an `<img>` or `<picture>` element for better preload/LCP control, or
- keep CSS background but add a proper preload and compressed mobile/desktop variants.

---

## 9. Video Optimization Checklist

Do not host heavy videos in the repo.

Cloudflare Stream plan:

- [ ] Create Cloudflare Stream under the client Cloudflare account if video is needed.
- [ ] Upload approved project video.
- [ ] Generate thumbnail/poster image.
- [ ] Add lazy-loaded video embed.
- [ ] Do not autoplay on mobile.
- [ ] Do not load video iframe until user clicks play.
- [ ] Track video play event in GTM.

If no real video is available:

- [x] Keep the video section as image/poster only.
- [x] Do not show a play button that does nothing.

---

## 10. Lead Capture Checklist

Google Sheet setup:

- [ ] Create Google account for the project/client.
- [ ] Create Google Sheet named `Godrej Brooklyn Avenue Leads`.
- [ ] Add columns:
  - Timestamp
  - Name
  - Phone
  - Email
  - Message
  - CTA Source
  - Requested Asset
  - Page URL
  - UTM Source
  - UTM Medium
  - UTM Campaign
  - UTM Term
  - Referrer
  - Device
  - Status
  - Notes
- [x] Create Google Apps Script endpoint or approved form backend.
- [x] Connect both modal form and contact form.
- [x] Add success and failure states.
- [ ] Add spam protection.
- [ ] Add consent line near forms.

Form behavior:

- [x] Name required.
- [x] Indian mobile number required.
- [x] Email optional but validated if entered.
- [x] Message optional.
- [x] CTA source captured in lead payload.
- [x] Requested asset captured in lead payload.
- [x] UTM context captured in enriched lead message.
- [x] Lead submit pushes dataLayer `lead_form_submit`.
- [x] Brochure/floor/price buttons pass the requested asset.

Current issue:

`script.js` submits to the configured Google Form endpoints. Test one live lead after deployment to confirm both destination sheets receive the enriched tracking context.

---

## 11. Google Account Setup

Create a dedicated Gmail account for this project or client business.

Naming examples:

- `godrejbrooklynavenue.info@gmail.com`
- `godrejbrooklynhyd@gmail.com`
- `brooklynkukatpally@gmail.com`

Use Harinath's recovery phone number.

Use Harinath's details only.

If asked why, say:

`Company policy. Domain, DNS, Search Console, analytics, and recovery access should stay attached to the business owner, not our personal accounts.`

Store credentials securely. Do not put credentials in GitHub, Vercel, or code files.

---

## 12. Cloudflare Setup

Use the dedicated Gmail account.

Steps:

- [ ] Create Cloudflare account.
- [ ] Add domain `godrejbrooklyn.info`.
- [ ] Copy Cloudflare nameservers.
- [ ] Open GoDaddy DNS settings.
- [ ] Replace GoDaddy nameservers with Cloudflare nameservers.
- [ ] Wait for Cloudflare activation.
- [ ] Enable SSL/TLS Full mode.
- [ ] Enable Always Use HTTPS.
- [ ] Enable Brotli.
- [ ] Enable Auto Minify only after checking it does not break CSS/JS.
- [ ] Set caching rules for static assets.
- [ ] Add DNS records for Vercel.

Vercel DNS records:

- Apex/root: follow Vercel's generated instruction.
- `www`: usually CNAME to `cname.vercel-dns.com`.

Do not guess DNS records. Use Vercel's domain screen and Cloudflare DNS screen together.

---

## 13. Vercel Setup

Recommended:

- Use private Solicate GitHub repo.
- Use Solicate Vercel account or team for deployment control.
- Keep Cloudflare and domain ownership under client Gmail.

Reason:

If Vercel is under the client Gmail, connecting it to a private Solicate GitHub repo can become messy. It may require giving repo access to the client-owned account.

Best operating model:

```text
GitHub private repo: Solicate
Vercel deployment: Solicate
Cloudflare DNS: client-owned Gmail
Domain ownership: client-owned GoDaddy
```

If Harinath insists on his own Vercel account:

- Deploy manually or transfer later.
- Do not expose the full Solicate GitHub organization unnecessarily.

Vercel checklist:

- [ ] Create Vercel project.
- [ ] Connect private GitHub repo.
- [ ] Set production branch.
- [ ] Set framework as Other/Static if plain HTML.
- [ ] Confirm output directory is root.
- [ ] Add domain.
- [ ] Verify HTTPS.
- [ ] Set redirects if using `www`.
- [ ] Test deployment URL before domain switch.

---

## 14. Google Search Console Setup

Use the dedicated Gmail account.

Steps:

- [ ] Open Google Search Console.
- [ ] Add Domain property for `godrejbrooklyn.info`.
- [ ] Get DNS TXT verification record.
- [ ] Add TXT record in Cloudflare DNS.
- [ ] Verify property.
- [ ] Submit `https://godrejbrooklyn.info/sitemap.xml`.
- [ ] Inspect homepage URL.
- [ ] Request indexing after final launch.
- [ ] Check coverage after 48 to 72 hours.
- [ ] Monitor queries, impressions, and page indexing weekly.

Do not promise instant indexing or ranking.

---

## 15. Google Tag Manager And GA4 Setup

Use the dedicated Gmail account.

Setup:

- [ ] Create GA4 property.
- [ ] Create GTM account and web container.
- [ ] Install GTM head snippet.
- [ ] Install GTM body noscript snippet.
- [ ] Add GA4 configuration tag.
- [ ] Test with GTM Preview mode.
- [ ] Publish container only after testing.

Track events:

- [x] `phone_click`
- [x] `whatsapp_click`
- [x] `lead_form_open`
- [x] `lead_form_submit`
- [x] `brochure_click`
- [x] `floor_plan_click`
- [x] `price_breakup_click`
- [x] `emi_calculate`
- [ ] `video_play`
- [x] `video_request_click` until final video asset exists

Mark conversions:

- [ ] lead form submit
- [ ] WhatsApp click
- [ ] phone click

---

## 16. Performance Checklist

Target:

- [ ] Lighthouse Performance 90+ mobile before ads.
- [ ] SEO 95+.
- [ ] Accessibility 90+.
- [ ] Best Practices 90+.
- [ ] LCP under 2.5 seconds if possible.
- [ ] CLS under 0.1.
- [ ] INP under 200 ms.

Fixes likely needed:

- [ ] Replace Google Fonts with fewer weights or self-hosted fonts.
- [ ] Reduce four font families to two if possible.
- [ ] Optimize hero image.
- [ ] Convert PNGs to Cloudflare Images or WebP/AVIF.
- [ ] Add `width` and `height` to images.
- [ ] Lazy-load non-critical images.
- [ ] Defer JavaScript.
- [ ] Minify CSS after design is final.
- [ ] Remove unused CSS if possible.
- [ ] Add `prefers-reduced-motion` CSS for animations.
- [ ] Avoid loading video until click.

---

## 17. Accessibility Checklist

- [ ] Forms have real labels.
- [ ] Buttons have clear accessible names.
- [ ] Dialog focus trap works.
- [ ] Modal can close with Escape.
- [ ] Color contrast passes.
- [ ] Mobile bottom CTAs do not cover form fields.
- [ ] Keyboard navigation works.
- [ ] No fake CAPTCHA as final protection.
- [ ] Reduce motion support exists.

---

## 18. Content And Legal Checklist

Verify every claim:

- [ ] `400+ Families Registered Interest`
- [ ] `58+ Lifestyle Amenities`
- [ ] `7.7 Acre Master Plan`
- [ ] prices
- [ ] area ranges
- [ ] carpet area ranges
- [ ] possession details if added later
- [ ] travel times
- [ ] school/hospital/mall names
- [ ] RERA status
- [ ] site address
- [ ] developer/agent wording

Replace unsafe wording:

- `RERA Registered` without number
- `guaranteed`
- `spot approvals available`
- `supreme connectivity`
- `best`
- `official`

Use safer wording:

- `Indicative`
- `Subject to change`
- `Based on currently shared details`
- `Contact sales team for latest availability`
- `Images are artistic representations`

---

## 19. Pre-Launch Manual QA

Desktop:

- [ ] Chrome
- [ ] Safari
- [ ] Firefox

Mobile:

- [ ] iPhone Safari
- [ ] Android Chrome

Check:

- [ ] No horizontal scroll.
- [ ] Header does not cover hero text.
- [ ] Sticky buttons work.
- [ ] Popup opens and closes.
- [ ] Forms submit to sheet.
- [ ] Phone opens dialer.
- [ ] WhatsApp opens correct chat.
- [ ] EMI calculator works.
- [ ] Floor plan tabs work.
- [ ] Location accordion works.
- [ ] Footer is visible and readable.
- [ ] Page loads on mobile data.

---

## 20. Launch Sequence

Follow this order:

1. Lock final copy and compliance details.
2. Optimize images through Cloudflare Images.
3. Connect lead form to Google Sheet.
4. Add SEO metadata, schema, sitemap, robots.
5. Push to private GitHub repo.
6. Deploy to Vercel preview.
7. Test preview fully.
8. Create Cloudflare account under client Gmail.
9. Move GoDaddy nameservers to Cloudflare.
10. Add Vercel DNS records in Cloudflare.
11. Attach domain to Vercel.
12. Verify HTTPS.
13. Set up Search Console.
14. Set up GTM and GA4.
15. Submit sitemap.
16. Run mobile Lighthouse.
17. Submit one test lead.
18. Send live link to Harinath.

---

## 21. 45-Day Tracking Plan

Track weekly:

- [ ] visitors
- [ ] traffic sources
- [ ] impressions in Search Console
- [ ] indexed pages
- [ ] WhatsApp clicks
- [ ] phone clicks
- [ ] lead form opens
- [ ] lead form submits
- [ ] valid leads
- [ ] invalid/spam leads
- [ ] most clicked CTA
- [ ] top requested asset
- [ ] mobile performance

Weekly summary:

```text
Week:
Visits:
Search impressions:
Leads:
Valid leads:
Top source:
Top CTA:
Problems found:
Next improvement:
```

---

## Final Verdict

Current visual base: strong.

Current launch readiness: not ready.

Main reason:

The page looks designed, but the production layer is missing.

Production layer means:

- verified facts,
- RERA and disclaimer correctness,
- real lead capture,
- SEO files,
- schema,
- analytics,
- optimized images,
- Cloudflare/Vercel/domain setup,
- and post-launch tracking.

Do not rush public launch before these are done.
