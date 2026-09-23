# Bella Bride Wedding Salon

A modern, elegant frontend web application for Bella Bride Wedding Salon built with React, Vite, JavaScript, and CSS. This application serves as a clean, simple demonstration project suitable for DevOps training (build, test, containerization, and deployment pipelines).

## Features & Sections

- **Header / Navigation:** Logo branding, smooth-scrolling links to key sections, and responsive mobile menu navigation.
- **Hero Section:** "Find the Dress of Your Dreams" callout with action buttons.
- **Wedding Dress Collection:** Showcase cards for 6 wedding dresses (*Isabella*, *Sophia*, *Aurora*, *Olivia*, *Grace*, *Victoria*) with descriptions and pricing.
- **Services:** Highlighting *Bridal Consultation*, *Dress Fitting*, *Alterations*, and *Accessories*.
- **About Section:** Salon background, philosophy, and stats.
- **Contact / Appointment Form:** Frontend appointment booking form with Name, Email, Phone, Wedding Date, and Message fields.
- **Footer:** Address details (*Chicago, IL*) and section quick-links.

---

## Local Development & Build Scripts

Make sure you have Node.js 22 installed locally.

### 1. Install Dependencies
```bash
npm ci
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Run Linter
```bash
npm run lint
```

### 4. Build for Production
Creates an optimized single-page application build in the `dist/` directory.
```bash
npm run build
```

---

## Docker Containerization

The project includes a multi-stage `Dockerfile` using `node:22-alpine` as the build environment and `nginx:alpine` for production static file serving.

### 1. Build Docker Image
```bash
docker build -t wedding-salon:v1 .
```

### 2. Run Container
```bash
docker run -d --name wedding-salon -p 8080:80 wedding-salon:v1
```

Once running, access the website in your browser at `http://localhost:8080`.
