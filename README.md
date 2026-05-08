# 💼 Neel’s Developer Portfolio

> **Single‑page portfolio site** showcasing my software engineering projects, skills, and experience, built with a modern React‑style Vite + Tailwind stack and deployed on Vercel. 

[![Live Site](https://img.shields.io/badge/PORTFOLIO-View%20Live-success?style=for-the-badge&logo=vercel)](https://neel-portfolio-five.vercel.app/) [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) [![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🚀 Overview

This repository contains the source code for my personal developer portfolio at **neel-portfolio-five.vercel.app**. It is a responsive single‑page web app that highlights my top projects, tech stack, work experience, and contact links for recruiters and collaborators. 

The project uses **Vite** for fast local development, **TailwindCSS** for styling, and is wired for seamless deployment to **Vercel** using `vercel.json` and a standard Vite build pipeline. 

---

## 🏗️ Architecture

```text
┌────────────────────────────┐
│        Browser UI          │
│   (Desktop / Mobile)       │
└─────────────┬──────────────┘
              │
              ▼
      ┌────────────────┐
      │   Vite + JS    │
      │  SPA Frontend  │
      └────────┬───────┘
               │
               ▼
┌────────────────────────────┐
│   Portfolio Components     │
│  - Hero / About            │
│  - Projects Showcase       │
│  - Skills & Tech Stack     │
│  - Experience / Timeline   │
│  - Contact / Links         │
└────────────────────────────┘
```

All content is static and front‑end only, making it fast, simple to host, and easy to iterate as I add new projects or experience. 

---

## 🛠️ Tech Stack

| Layer            | Details                               |
|-----------------|----------------------------------------|
| Framework / Tool | Vite front‑end build tooling          |
| Language        | JavaScript (ES6+)                     |
| Styling         | TailwindCSS utility‑first styling     |
| Markup          | HTML (via Vite template)              |
| Deployment      | Vercel static hosting & CI            |

---

## 📁 Project Structure

```text
neel-portfolio/
├── public/              # Static assets (favicons, images, etc.) 
├── src/                 # Main portfolio source code (components, sections) 
├── index.html           # Root HTML entry point 
├── package.json         # Scripts and dependencies 
├── package-lock.json    # Locked dependency versions 
├── tailwind.config.js   # TailwindCSS configuration 
├── postcss.config.js    # PostCSS pipeline for Tailwind 
├── vite.config.js       # Vite configuration 
├── vercel.json          # Vercel deployment config 
└── .gitignore           # Git ignore rules 
```

This structure mirrors a modern front‑end app and makes it easy to extend with more sections or animations later. 

---

## ⚙️ Getting Started (Local Development)

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Neel654/neel-portfolio.git
   cd neel-portfolio
   ```

2. **Install dependencies**  
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the dev server**  
   ```bash
   npm run dev
   ```

4. **Open in your browser**  
   Vite will print a local URL like `http://localhost:5173`. Open it to view and edit the portfolio. 

---

## 🌐 Deployment

The portfolio is deployed on **Vercel**, using Vite’s static build output. 

Typical flow:

1. Push commits to the `main` branch on GitHub.  
2. Vercel automatically pulls the repo, runs `npm install` and `npm run build`.   
3. The static build from Vite is hosted at **neel-portfolio-five.vercel.app** and updated on every push. 

You can customize deployment behavior through `vercel.json` as needed (for example, build command and output directory). 

---

## 💡 What this portfolio highlights

The live site is designed to make it easy for a recruiter to understand me in under a minute:

- A concise **intro / hero** section with who I am and what I do.  
- A **projects section** linking to repositories like SafeSense, WarpKV‑Java, and your analytics / backend work.  
- A **skills grid** for languages, frameworks, tools, and cloud/devops experience.  
- A short **experience / education** section.  
- Clear **contact links** (email, LinkedIn, GitHub).  

Each section is laid out to be scannable on both desktop and mobile. 

---
## 🔍 For Recruiters

If you’re viewing this repo from my resume or LinkedIn:

- The **live site** at `https://neelprajapati.netlify.app/` is the best place to see my work aggregated.   
- Each featured project links back to a **well‑documented GitHub repository** with architecture, tech stack, and setup instructions.  
- This repo demonstrates how I structure and ship a **production‑ready front‑end** with modern tooling and deployment.
