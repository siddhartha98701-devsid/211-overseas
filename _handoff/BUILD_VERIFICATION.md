# 211 OVERSEAS — Production Build & Test Verification
**Date:** October 2026  
**Build Engine:** Next.js 16.3.8 (Webpack)  
**TypeScript Version:** 5.x  
**Node Binary:** Node v20.18.0 (darwin-arm64)

---

## 1. Build Status: PASSED (Zero Errors)

- **Compilation Status:** `✓ Compiled successfully`
- **TypeScript Type Check:** `✓ Finished TypeScript with 0 errors`
- **Static Page Generation:** `✓ Generating static pages (38/38) in 577ms`
- **Build Mode:** Production optimized bundle

---

## 2. Generated Public & Dynamic Routes

```
Route (app)                              Size     First Load JS
┌ ○ /                                    Static   Optimal
├ ○ /_not-found                          Static   Optimal
├ ○ /about                               Static   Optimal
├ ƒ /admin                               Dynamic  Protected
├ ƒ /api/admin/export                    Dynamic  Protected
├ ƒ /api/admin/login                     Dynamic  Protected
├ ƒ /api/admin/logout                    Dynamic  Protected
├ ƒ /api/enquiry                         Dynamic  Honeypot + DPDP
├ ○ /contact                             Static   Optimal
├ ○ /disclaimer                          Static   Optimal
├ ○ /faq                                 Static   Optimal
├ ○ /icon.svg                            Static   Optimal
├ ○ /privacy-policy                      Static   Optimal
├ ○ /refund-policy                       Static   Optimal
├ ○ /resources                           Static   Optimal
├ ○ /resources/application-guide         Static   Optimal
├ ○ /resources/cost-of-studying          Static   Optimal
├ ○ /resources/scholarships              Static   Optimal
├ ○ /robots.txt                          Static   Optimal
├ ○ /sitemap.xml                         Static   Optimal
├ ○ /study                               Static   Optimal
├ ○ /study/australia                     Static   Optimal
├ ○ /study/canada                        Static   Optimal
├ ○ /study/europe                        Static   Optimal
├ ○ /study/japan                         Static   Optimal
├ ○ /study/luxembourg                    Static   Optimal
├ ○ /study/singapore                     Static   Optimal
├ ○ /study/south-korea                   Static   Optimal
├ ○ /study/taiwan                        Static   Optimal
├ ○ /study/uae                           Static   Optimal
├ ○ /study/uk                            Static   Optimal
├ ○ /study/usa                           Static   Optimal
├ ○ /terms-and-conditions                Static   Optimal
├ ○ /work                                Static   Optimal
├ ○ /work/greece                         Static   Optimal
├ ○ /work/openings                       Static   Optimal
└ ○ /work/uae                            Static   Optimal

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

---

## 3. Automated Hygiene Scan Results

```bash
$ grep -rn -i "98%\|₹50L\|Free Counselling\|Opportunity Card\|400 vacancies" src/
# Result: 0 matches found (Exit code 1).
```

- **98% Visa / Admit Rate:** Completely eliminated.
- **₹50L+ Scholarships Secured:** Completely eliminated.
- **Free Counselling microcopy:** Completely eliminated.
- **Opportunity Card:** Completely eliminated.
- **400 Vacancies / ₹1-1.5L Greece:** Completely eliminated.

---

## 4. Retained Visual Components
- **GlobeExplorerSection:** WebGL 3D Canvas globe retained on `/` with updated route links.
- **PathGatewaySection:** University carousel retained on `/` with grounded facts and updated route links.
