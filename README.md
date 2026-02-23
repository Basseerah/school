# Upstream School System Website

A modern, responsive landing page for the Upstream School System — the first Oxford-affiliated institution in Abbottabad.

---

## 📂 Project Structure

```
├── index.html          → Main website (all sections)
├── assets/
│   ├── css/style.css   → All styles (TailwindCSS + custom)
│   ├── js/script.js    → Smooth scroll, animations, and interactive elements
│   └── images/         → All website photos
└── README.md           → This file
```

---

## 🚀 Setup Guide

This project is now **100% static HTML, CSS, and JS**. There are no backend dependencies, servers, or email configurations required.

### How to use:
1. Simply double-click on `index.html` to open it in any modern web browser (Chrome, Safari, Edge, Firefox).
2. To edit the text or images, open `index.html` using any code editor (like VS Code or Notepad).

---

## 🧩 Key Features

| Feature | Details |
|---------|---------|
| Desktop-First Design | Layout scales seamlessly to mobile using a fixed `1024px` viewport for a premium desktop-like experience on smaller screens. |
| Smooth Scroll | All navigation buttons smoothly scroll to their respective sections. |
| Reveal Animations | Sections and review cards fade and slide up automatically as the user scrolls down the page. |
| Navigation Highlighting | Active section links in the navigation bar highlight based on the current scroll position. |
| Gallery | 3×3 image grid showcasing campus life with hover overlay captions. |
| Reviews | Alumni testimonials with beautiful slide animations. |
| Quick Contact | Clean, interactive contact section with direct links for calling (`tel:`) and emailing (`mailto:`). |

---

## 🎨 Design Technicalities

- **Tailwind CSS**: The site leverages utility-class based styling via TailwindCSS.
- **Fixed Viewport Scaling**: The mobile layout actively preserves the exact desktop layout (`width=1024, maximum-scale=3.0`), ensuring side-by-side elements remain perfectly positioned even on smaller phones.
- **Micro-interactions**: Subtle hover states, animated badges, and gradients create a vibrant, engaging experience.
