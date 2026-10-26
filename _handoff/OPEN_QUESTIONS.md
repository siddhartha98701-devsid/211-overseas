# 211 OVERSEAS — Open Questions & Publication Holds for Client Sign-Off
**Date:** October 2026  
**Auditor:** Antigravity Engineering  
**Reference Document:** `/content-source/content_source_211_overseas.md`

---

## 1. Physical Office Address & Corporate Emails (`SHOW_VERIFIED_COMPANY_DETAILS`)

### Background
Per **Page 23 / Contact Details** of the authoritative document:
> *"Office address and email should be added only after verification by the company."*

### Current Configuration
- Toggle in `src/content/site.ts`:
  ```typescript
  export const SHOW_VERIFIED_COMPANY_DETAILS = false;
  ```
- **Currently Rendered:** Direct Telephone / WhatsApp line: `+91 99985 85211`.
- **Currently Suppressed:**
  - Address: `B-1405, The Capital, Science City Road, Sola, Ahmedabad 380060, Gujarat, India`
  - Emails: `info@211overseas.com`, `admissions@211overseas.com`, `support@211overseas.com`, `admin@211overseas.com`
  - Office Hours: `Mon–Sat, 10:00 AM–7:00 PM IST`
  - Embedded Google Map

### Action Required for Client
Confirm whether the physical office registration and email mailboxes are operational and authorized for public display. To display them across the footer, contact page, and structured data, set `SHOW_VERIFIED_COMPANY_DETAILS = true` in `src/content/site.ts`.

---

## 2. Greece Hospitality Campaign Figures (Active Publication Hold)

### Background
Per the **Developer Annex / Publication Hold — Greece Campaign** of the authoritative document:
> *"The supplied creatives mention 400 vacancies, a one-year internship and ₹1–1.5 lakh/month. This document intentionally does not turn those figures into verified live web claims. Obtain documentary confirmation of actual openings, compensation basis (EUR gross or net), programme legal category and work authorisation before publication. A standard Greek seasonal-employment route is capped at nine months within twelve months."*

### Current Status in Production
- The claims `400 vacancies`, `₹1-1.5L/month`, and `1-year internship` have been **completely excised** from public copy.
- The Greece page (`/work/greece`) features an explicit legal notice regarding third-country seasonal employment limits (9 months maximum within 12 months) and the requirement for verified training agreements for internships.

### Action Required for Client
Provide written employer documentation confirming:
1. Exact count of active requisitions.
2. Legal visa category (Law 4251/2014 seasonal worker vs. vocational internship).
3. Contracted salary/stipend denominated in EUR with gross/net and deduction terms (accommodation/meals).

---

## 3. Live Vacancies Repository (`/work/openings`)

### Background
Per the **Internal Lead-Capture & CMS Playbook**:
> *"Vacancy details are subject to employer confirmation. Only written offers and applicable legal approvals establish actual employment terms. Do not display expired or unverified recruitment records."*

### Current Status in Production
- `src/content/vacancies.ts` ships with `VACANCIES = []` (0 live vacancies).
- `/work/openings` automatically renders the authoritative empty state:
  > *"Current positions in this category are temporarily closed. You may register your professional profile, and our team can contact you when a relevant recruitment requirement is available."*
- Auto-hide filter logic (`getActiveVacancies()`) ensures that any role past its closing date or marked `Closed` is immediately excluded from public view.

### Action Required for Client
When real, verified job orders arrive from overseas employers:
Add the listing to `src/content/vacancies.ts` with all 8 mandatory fields: title, country, city, sector, experience, compensation (currency + amount + Gross/Net + period), accommodation/meals basis, and `lastVerified` date string.

---

## 4. Luxembourg School of Business (LSB) Intake Schedules

### Background
Per the **Developer Annex / Publication Hold — University Programme Data**:
> *"Luxembourg School of Business fees and awards are based on the supplied 2026–27 overview. Re-check live intake conditions; avoid displaying expired deadlines."*

### Current Status in Production
- Specific seasonal application deadline dates were excluded from public static copy on `/study/luxembourg` to avoid displaying expired cutoff windows.
- General application planning steps and fee bands (€13,100–€39,000) are accurately presented.

### Action Required for Client
Prior to any active promotional campaign for LSB, verify the current semester intake cutoff dates and scholarship submission deadlines directly with the institution.

---

## 5. Home Page Interactive Visualizations (Client Preference Confirmed)

### Status
- As explicitly instructed by the user, the **Home Page 3D Globe (`GlobeExplorerSection`)** and **Northeastern University / IU Berlin carousel (`PathGatewaySection`)** have been preserved in full visual fidelity on `src/app/page.tsx`.
- Destination links on the 3D globe pins were seamlessly connected to the new `/study/*` and `/work/*` routes without altering the 3D canvas interaction.
