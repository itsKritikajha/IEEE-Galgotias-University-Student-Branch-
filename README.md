# IEEE Galgotias University Student Branch (IEEE GU SB) Website

A production-ready, IEEE-branded multi-page web platform for **IEEE GU SB** (IEEE Galgotias University Student Branch) and host of **ICCSAI 2026** (4th IEEE International Conference on Communication, Security, and Artificial Intelligence).

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Quick Start

### 1. Installation

```bash
npm install
```

### 2. Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification

```bash
npm run build
npm start
```

---

## Data Management & Customization Guide

All site content, team listings, conference details, and external links are centralized in `src/data/` to make updates seamless without touching component code:

### 1. Centralized Site Config & Social Links
- File: `src/data/site.ts`
- Edit branch email, campus address, social media handles (LinkedIn, Instagram, Twitter/X, YouTube), and official IEEE/Microsoft CMT links.

### 2. Core Team Members & Faculty Advisory
- File: `src/data/team.ts` and `src/data/teamData.ts`
- To add a team member:
  ```ts
  {
    id: "new-member",
    name: "Firstname",
    surname: "Lastname",
    role: "Chairperson",
    photo: "/images/team/member-photo.jpg",
    linkedin: "https://linkedin.com/in/...",
    email: "member@ieee.org"
  }
  ```

### 3. ICCSAI 2026 Conference Dates, Committee & Tracks
- Files: `src/data/conference.ts`, `src/data/iccsaiData.ts`, and `src/data/committee.ts`
- Edit important deadlines (Abstract, Full Paper, Acceptance, Camera-ready), conference tracks, and organizing committee patrons.

### 4. Events & Proceedings
- File: `src/data/events.ts` and `src/data/eventsData.ts`
- Add past or upcoming workshops, hackathons, and IEEE Xplore proceedings links.

---

## Image & Asset Structure

Store image assets in the `public/images/` directory:

- `/public/images/logos/` — University, IEEE parent, and Student Branch logos.
- `/public/images/team/` — Core Team & Faculty headshots (`atharav-singh.jpg`, `mohammad-rahil.jpg`, `ansh-vashisth.jpg`, `kritika-jha.jpg`, `tarun-kushwaha.jpg`).
- `/public/images/events/` — Event banners and workshop photos.
- `/public/images/attractions/` — Tourism highlights.

If an image is missing, the application automatically renders a graceful SVG fallback.

---

## Deployment to Vercel

1. Push your repository to GitHub / GitLab.
2. Import the project into [Vercel](https://vercel.com).
3. Select **Next.js** framework preset.
4. Click **Deploy**.

---

## License

© 2026 IEEE Galgotias University Student Branch (IEEE GU SB). All rights reserved.
IEEE is a registered trademark of the Institute of Electrical and Electronics Engineers, Inc.
