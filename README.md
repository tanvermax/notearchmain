# <p align="center"><img src="./src/assets/logo.png" width="80" alt="NoteArch Logo" /><br>NoteArch Ecosystem</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Framer_Motion-11.0-0055FF?style=for-the-badge&logo=framer" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-007ACC?style=for-the-badge&logo=typescript" />
</p>

---

## 🌐 Project Overview
**NoteArch** is an enterprise-grade, intelligent academic lifecycle management system. Built for the future of education, it synchronizes students, parents, and institutions into a single, cloud-native ecosystem. From real-time attendance tracking to AI-powered academic analysis, NoteArch is the definitive blueprint for institutional modernization.

---

## ✨ Key Features

- **🚀 Global Accessibility:** 24/7 cloud synchronization allowing educators to manage institutions from anywhere in the world.
- **🤖 AI-Powered Analysis:** Intelligent tracking of student progress and institutional growth metrics.
- **📱 Mobile-First Ecosystem:** A dedicated mobile experience for real-time messaging, attendance, and gradebook access.
- **🛡️ Disaster Resilient:** Robust architecture designed for uninterrupted learning with seamless offline modes.
- **📊 Modular Management:** Comprehensive modules for Teachers, Students, Exams, Sessions, and Holidays.

---

## 🛠️ Tech Stack

- **Frontend:** React.js / Vite
- **Styling:** Tailwind CSS + Shadcn/UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM (with HashLink for section navigation)
- **Forms:** React Hook Form + Zod

---

## 📂 Project Structure

```bash
src/
├── assets/             # Branding images and static media
├── components/         # Reusable UI components
│   ├── ui/             # Shadcn primitive components
│   └── shared/         # Navbar, Footer, and ModeTogglers
├── Mainlayout/         
│   ├── CommonLayout/   # Reusable Section Components (Hero, BlogSection, etc.)
│   └── Page/           # Full Route Pages (Home, Blog, BlogDetails)
├── lib/                # Utility functions (cn helper)
└── App.tsx             # Root component with Outlet