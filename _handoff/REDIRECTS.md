# 211 OVERSEAS — 301 Permanent Redirect Matrix
**Generated:** October 2026  
**Canonical Base:** `https://www.211overseas.com`  
**Configuration File:** `next.config.ts`

---

## 1. Summary

All retired legacy routes, previous marketing campaigns, and restructured sub-paths are permanently redirected using HTTP 301 status codes to protect incoming backlinks, organic search rankings, and user bookmarks.

---

## 2. Redirect Rules Matrix

| Source Path Pattern | Destination | Status | Reason |
|:---|:---|:---:|:---|
| `/inbound` | `/` | 301 | Inbound / Indian colleges section retired (off-brand scope). |
| `/inbound/:path*` | `/` | 301 | Inbound sub-paths retired. |
| `/work-in-germany` | `/work` | 301 | Germany nursing/physio/Opportunity Card retired. |
| `/work-in-germany/:path*` | `/work` | 301 | All Germany sub-pages retired. |
| `/work-and-study` | `/work` | 301 | Legacy combined overview redirected to Work hub. |
| `/work-and-study/:path*` | `/work` | 301 | Legacy sub-paths redirected. |
| `/work-in-dubai` | `/work/uae` | 301 | Legacy spelling redirected to consolidated UAE work route. |
| `/work-in-dubai/:path*` | `/work/uae` | 301 | Wildcard redirected to UAE work route. |
| `/work-in-dubai-uae` | `/work/uae` | 301 | Legacy spelling redirected to UAE work route. |
| `/work-in-dubai-and-uae` | `/work/uae` | 301 | Legacy spelling redirected to UAE work route. |
| `/work-in-uae` | `/work/uae` | 301 | Legacy route structure `/work-in-uae` ➔ `/work/uae`. |
| `/work-in-uae/:path*` | `/work/uae` | 301 | All sub-paths redirected to `/work/uae`. |
| `/study-in-south-korea` | `/study/south-korea` | 301 | Legacy route structure `/study-in-south-korea` ➔ `/study/south-korea`. |
| `/study-in-south-korea/:path*` | `/study/south-korea` | 301 | Sub-paths redirected to `/study/south-korea`. |
| `/other-destinations/south-korea` | `/study/south-korea` | 301 | Restructured destination route. |
| `/other-destinations/singapore` | `/study/singapore` | 301 | Restructured destination route. |
| `/other-destinations/luxembourg` | `/study/luxembourg` | 301 | Restructured destination route. |
| `/other-destinations/japan` | `/study/japan` | 301 | Restructured destination route. |
| `/other-destinations/taiwan` | `/study/taiwan` | 301 | Restructured destination route. |
| `/other-destinations/uae` | `/study/uae` | 301 | Restructured destination route. |
| `/other-destinations/europe` | `/study/europe` | 301 | Restructured destination route. |
| `/other-destinations/united-states` | `/study/usa` | 301 | Restructured destination route. |
| `/other-destinations/usa` | `/study/usa` | 301 | Restructured destination route. |
| `/other-destinations/canada` | `/study/canada` | 301 | Restructured destination route. |
| `/other-destinations/united-kingdom` | `/study/uk` | 301 | Restructured destination route. |
| `/other-destinations/uk` | `/study/uk` | 301 | Restructured destination route. |
| `/other-destinations/australia` | `/study/australia` | 301 | Restructured destination route. |
| `/other-destinations` | `/study` | 301 | General destinations directory redirected to Study hub. |
| `/other-destinations/:path*` | `/study` | 301 | Fallback for any unknown destination sub-paths. |

---

## 3. SEO & Indexing Compliance
- Active routes updated in `src/app/sitemap.ts`.
- `src/app/robots.ts` points directly to `https://www.211overseas.com/sitemap.xml`.
- No redirect chains or loops exist in the configuration.
