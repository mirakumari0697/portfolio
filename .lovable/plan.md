
## Mira Kumari — Professional Portfolio

A clean, modern, single-page portfolio site (light theme) ready to deploy to GitHub Pages. Built with React + Tailwind, fully responsive, with smooth scroll navigation and subtle animations.

### Design direction
- **Style:** Modern minimal light — white/off-white backgrounds, generous whitespace, refined typography (Inter), subtle blue (#2563EB) accent for trust/security feel.
- **Vibe:** Recruiter-friendly, corporate, polished. Subtle fade-in/slide-up on scroll, hover lifts on cards.
- **Layout:** Single-page with sticky top nav (Home · About · Skills · Experience · Projects · Education · Contact) and smooth-scroll anchors. Mobile: hamburger menu.

### Sections

1. **Hero**
   - Name "Mira Kumari", role "Network Security Engineer", 1-line tagline ("5.4+ years securing enterprise networks across Infosys, Accenture & LTIMindtree").
   - Two CTAs: "Download Resume" (links to PDF in /public) and "Get in Touch" (mailto).
   - Placeholder circular profile photo (you'll swap later).
   - Soft gradient/grid background accent.

2. **About / Professional Summary**
   - Resume summary paragraph + 3 quick-stat cards: 5.4+ Years · 3 MNCs · 5,000+ Users Migrated.

3. **Core Technical Skills**
   - 5 category cards (Security/Firewalls, Cloud & Web Security, Load Balancing, Network Services, Infrastructure) each listing technologies as badges.
   - Animated proficiency bars for top skills (Palo Alto, Zscaler, Checkpoint, Citrix Netscaler, Cisco) that fill in on scroll.

4. **Professional Experience**
   - Vertical timeline with 3 entries (Infosys, Accenture, LTIMindtree) — company, role, dates, location, bulleted achievements. Left rail with dot markers, hover-elevate cards.

5. **Key Projects & Accomplishments**
   - 3 highlight cards: Zscaler Transformation, SSL Automation (-40% incidents), ASA → Palo Alto Migration. Each with icon, title, impact metric, short description.

6. **Education & Certifications**
   - Education card (B.Tech, Bengal College of Engineering & Technologies, 2015–2019).
   - Certifications showcase with AZ-900 badge prominently displayed (room to add more later).

7. **Contact**
   - Centered section with large mailto button, plus placeholder slots for LinkedIn / GitHub / Phone icons (you'll provide details to fill in).

8. **Footer**
   - © Mira Kumari · built with care · back-to-top link.

### Resume download
- Your uploaded `Mira_Kumari_Resume.pdf` will be copied to `/public/Mira_Kumari_Resume.pdf` so the Download button serves the real file.

### Placeholders to replace later
- Profile photo, email, phone, LinkedIn URL, GitHub URL — clearly marked `TODO` in code so they're easy to find and edit.

### GitHub hosting note
- The site is static and works on GitHub Pages or any static host. After implementation, connect the project to GitHub via the Lovable GitHub integration, then enable Pages on the repo.

### Out of scope (for now)
- Backend, contact form storage, blog, dark mode toggle, multi-page routing.
