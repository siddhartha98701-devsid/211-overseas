# 211 OVERSEAS — Master Change & Migration Report
**Date:** October 2026  
**Auditor:** Antigravity Engineering  
**Authoritative Reference:** `/content-source/content_source_211_overseas.md` (1,605 lines)  
**Production Canonical Base:** `https://www.211overseas.com`

---

## 1. Executive Summary

This report documents the total content, navigation, and compliance transformation of the **211 Overseas** website. The overhaul replaced unverified marketing exaggerations, legacy route structures, and off-brand programs with an authoritative, grounded content layer derived verbatim from the client's October 2026 specification document.

All changes were executed strictly within the existing visual branding (serif headings, cream `#FBF8F1` background, dark teal `#00222B` sections, and rust `#A33E11` accents) without altering core interactive assets explicitly requested to remain intact by the client.

---

## 2. Purged Claims, Retractions & Brand Hygiene

The following unsupported statements, fabricated figures, and off-brand sections were completely eradicated across all components, metadata, structured data, and content stores:

1. **Fabricated Performance Statistics:**
   - Purged: `98% Visa Success Rate` / `98% Admit Rate`.
   - Purged: `₹50L+ Total Scholarships Won` / `₹50L+ Scholarships Secured`.
   - Purged: `500+ Students Placed Abroad`.
   - Purged: `Free Counselling` marketing microcopy across all headers, cards, and buttons.
2. **Unsupported Partner & Ranking Claims:**
   - Purged: All claims or visual badges implying proprietary institutional partnership or guaranteed admission arrangements.
   - Purged: Fabricated national and global rank badges attached to university names.
   - Replaced with the mandatory statutory disclaimer on all university listings:
     > *"Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement."*
3. **Off-Brand / Retired Programmes:**
   - **Inbound Education / Indian Colleges:** Completely retired. The `/inbound` route and associated college selector components have been replaced by a 301 permanent redirect to `/`.
   - **Work in Germany Campaign:** Completely retired. All sub-routes (`/work-in-germany/nurses`, `/work-in-germany/physiotherapists`, `/work-in-germany/opportunity-card`) have been retired and redirected to `/work`.
4. **Third-Party Copyrighted University & Employer Logos:**
   - Removed external logos and badges to eliminate trademark infringement risk. Institutions are now presented via clean, typography-focused editorial badges.

---

## 3. Retained Brand Visualizations (Client Explicit Override)

Per explicit user direction (*"The home page 3D globe and Northeastern University carousel dont change it keep it as it is"*):
- **Interactive 3D Canvas WebGL Globe (`GlobeExplorerSection`):** Retained in full interactive fidelity on `src/app/page.tsx`. Its coordinates and raycasting pins were updated to link seamlessly to the new destination routes (`/study/south-korea`, `/study/singapore`, `/study/japan`, `/study/taiwan`, `/study/luxembourg`, `/study/uk`, `/study/usa`, `/study/canada`, `/study/australia`, `/work/uae`).
- **Northeastern University & IU Berlin Program Showcase (`PathGatewaySection`):** Preserved on `src/app/page.tsx` with responsive layout, touch drag, and keyboard navigation intact.

---

## 4. Navigation Architecture & Global Shell

### Desktop & Mobile Header (`Navbar.tsx`)
- Structured with 6 core navigation items matching Page 24:
  1. **Home** (`/`)
  2. **Study** (`/study`) with dropdown:
     - Featured: South Korea (`/study/south-korea`)
     - Singapore (`/study/singapore`), Luxembourg (`/study/luxembourg`), Japan (`/study/japan`), Taiwan (`/study/taiwan`), UAE (`/study/uae`)
     - Sub-group *Other Destinations*: Europe (`/study/europe`), USA (`/study/usa`), Canada (`/study/canada`), UK (`/study/uk`), Australia (`/study/australia`)
  3. **Work** (`/work`) with dropdown:
     - UAE (`/work/uae`)
     - Greece (`/work/greece`)
     - Current Openings (`/work/openings`)
  4. **About Us** (`/about`) with anchor links (`#approach`, `#what-we-help-with`, `#enquiry`)
  5. **Resources** (`/resources`) with dropdown:
     - Scholarships (`/resources/scholarships`)
     - Study Budget Planner (`/resources/cost-of-studying`)
     - Application Guide (`/resources/application-guide`)
     - FAQs (`/faq`)
  6. **Contact Us** (`/contact`) with direct access to Study and Work enquiry tabs.
- Sticky Action CTA: Updated to **"Get Guidance"** on desktop and direct **WhatsApp** on mobile.

### Three-Column Compliance Footer (`Footer.tsx`)
- Structured into exactly 3 columns matching Page 24:
  - **Column 1: STUDY** (11 verified study destinations).
  - **Column 2: WORK** (UAE, Greece, Current Openings, Work Enquiry).
  - **Column 3: COMPANY / RESOURCES** (About Us, Scholarships, Cost Guide, FAQs, Contact, plus Privacy Policy, Terms, Disclaimer, Refund Policy).
- Permanent General Disclaimer rendered verbatim across every page.
- Direct line prominently displayed: `+91 99985 85211`.

---

## 5. 24 Verified Public Pages Deployed

1. `src/app/page.tsx` — Home Page (Page 01)
2. `src/app/study/page.tsx` — Study Abroad Overview (Page 02)
3. `src/app/study/south-korea/page.tsx` — South Korea Featured (Page 03)
4. `src/app/study/singapore/page.tsx` — Singapore (Page 04)
5. `src/app/study/luxembourg/page.tsx` — Luxembourg with LSB Spotlight (Page 05)
6. `src/app/study/japan/page.tsx` — Japan (Page 06)
7. `src/app/study/taiwan/page.tsx` — Taiwan (Page 07)
8. `src/app/study/uae/page.tsx` — UAE Branch Campuses (Page 08)
9. `src/app/study/europe/page.tsx` — European Country & Cost Comparison
10. `src/app/study/usa/page.tsx` — United States (Page 09)
11. `src/app/study/canada/page.tsx` — Canada (Page 10)
12. `src/app/study/uk/page.tsx` — United Kingdom (Page 11)
13. `src/app/study/australia/page.tsx` — Australia (Page 12)
14. `src/app/work/page.tsx` — Work Abroad Overview (Page 13)
15. `src/app/work/uae/page.tsx` — Work in UAE (Page 14)
16. `src/app/work/greece/page.tsx` — Work in Greece (Page 15)
17. `src/app/work/openings/page.tsx` — Current Vacancies Hub (Page 16)
18. `src/app/about/page.tsx` — About Us & Advisory Methodology (Page 17)
19. `src/app/resources/page.tsx` — Resources & Knowledge Hub (Page 18)
20. `src/app/resources/scholarships/page.tsx` — Scholarships Guide (Page 19)
21. `src/app/resources/cost-of-studying/page.tsx` — 7-Part Budget Planner (Page 20)
22. `src/app/resources/application-guide/page.tsx` — 8-Step Application Checklist (Page 21)
23. `src/app/faq/page.tsx` — 12 Authoritative FAQs + FAQPage JSON-LD (Page 22)
24. `src/app/contact/page.tsx` — Discrete Study & Work Enquiries (Page 23)

---

## 6. Lead Capture & Data Governance

1. **Form Architectures**:
   - **Home Hero Form (`HomeLeadForm.tsx`):** Strictly maximum 4 fields (Full Name, Phone/WhatsApp, Route Type Study/Work, hidden source).
   - **Destination Pages (`DestinationLeadForm.tsx`):** Automatically preselects destination country + captures intended field and highest qualification.
   - **Contact Page (`ContactForms.tsx`):** Two discrete tabs for Study Consultation and Work Profile Submissions with CV link/file capability.
2. **Consent & Legal Compliance**:
   - Explicit DPDP Act / IT Act 2000 consent notice on all forms.
   - Server-side honeypot protection (`faxNumber`) silently rejects spam bots.
3. **Confirmation Microcopy**:
   - Displayed only upon confirmed server submission:
     > *"Thank you. Your enquiry has been received. Our team will review the information and contact you regarding the next relevant step."*

---

## 7. Configuration Toggles & Publication Holds

1. `SHOW_VERIFIED_COMPANY_DETAILS = false` in `src/content/site.ts`:
   - Safely conceals physical office address, unverified emails, and office hours until documentary verification is signed off.
2. **Greece Campaign Publication Hold**:
   - `400 vacancies`, `₹1-1.5L/month`, and `1-year internship` claims suppressed from live copy.
3. **Zero Initial Vacancies Policy**:
   - `src/content/vacancies.ts` ships with `VACANCIES = []` and automatic expiry filter `getActiveVacancies()`.
