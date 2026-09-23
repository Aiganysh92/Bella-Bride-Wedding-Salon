# Bella Bride Wedding Salon

Bella Bride Wedding Salon is a modern, elegant frontend web application built with React and Vite. This application showcases a wedding salon website with dress collections, bridal services, an about section, and an appointment booking form.

This project is designed as a clean baseline for DevOps training demonstrations, illustrating containerization and static site deployment workflows.

---

## 🛠️ Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Language:** JavaScript (ESNext)
- **Styling:** CSS3 (Custom design system with bridal palette)
- **Runtime Compatibility:** Node.js 22+
- **Containerization:** Docker (Multi-stage build) & Nginx

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js 22](https://nodejs.org/) and `npm` installed on your machine.

### Local Development Setup

1. **Install Dependencies:**
   ```bash
   npm ci
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

3. **Run Code Linting:**
   ```bash
   npm run lint
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```
   The production-ready artifacts will be generated in the `dist/` directory.

---

## 🐳 Docker Deployment

To build and run the application using Docker:

1. **Build Container Image:**
   ```bash
   docker build -t wedding-salon:v1 .
   ```

2. **Run Container:**
   ```bash
   docker run -d --name wedding-salon -p 8080:80 wedding-salon:v1
   ```

3. **Access Application:**
   Open your browser and navigate to `http://localhost:8080`.

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── About.css
│   │   ├── About.jsx
│   │   ├── ContactForm.css
│   │   ├── ContactForm.jsx
│   │   ├── DressCollection.css
│   │   ├── DressCollection.jsx
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Hero.css
│   │   ├── Hero.jsx
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx
│   │   ├── Services.css
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── Dockerfile
├── eslint.config.js
├── index.html
├── nginx.conf
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```
