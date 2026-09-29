# Kiruthickraj — Full-Stack Developer Portfolio

An interactive, high-performance developer portfolio built with **React** and **Tailwind CSS v3**, tailored for showcasing backend microservice architectures, REST API designs, and modern frontend applications.

🌐 **Live URL**: [https://kiruthickraj004.github.io](https://kiruthickraj004.github.io)  
📫 **Contact**: [kiruthickraj28@gmail.com](mailto:kiruthickraj28@gmail.com)  
🐙 **GitHub**: [@kiruthickraj004](https://github.com/kiruthickraj004)

---

## ⚡ Core Technical Stack

- **Backend Frameworks**: Python (Django, Django REST Framework), PHP (Laravel)
- **Frontend Engineering**: ReactJS, JavaScript (ES6+), Tailwind CSS v3
- **Databases & Caching**: PostgreSQL, MySQL, Redis (In-memory caching, rate-limiting)
- **DevOps & Tooling**: Docker, Docker Compose, Postman (API testing & automated suites), Git

---

## ✨ Key Features & Experiences

1. **Dual-Theme Engine (Dark / Light)**:
   - Smooth seamless transition between high-contrast developer Dark Mode and clean editorial Light Mode.
   - Persistent preference syncing via `localStorage` with anti-flicker head script.

2. **Interactive Developer CLI (`~` / Backtick)**:
   - Built-in terminal emulator supporting commands: `help`, `about`, `skills`, `projects`, `docker ps`, `curl /api/status`, `sudo hire` (with confetti celebration!), `matrix`, `theme dark`, `theme light`, `clear`.
   - History navigation via Up/Down arrow keys and Tab autocompletion.

3. **Multi-Page Experience**:
   - **Home**: Dynamic typewriter hero, developer status, quick stats, core skills grid, and featured systems.
   - **About**: Architectural philosophy, deep-dive skills matrix with real-world use cases, and 4-step engineering lifecycle.
   - **Projects**: Category filterable catalog (Full Stack, Python/Django, PHP/Laravel, React & APIs), with interactive **Architecture Blueprint Inspector** modal showcasing data flows and code snippets.
   - **Contact**: Quick-copy email, GitHub profile connection, and live interactive dispatch form with wire JSON payload preview.

4. **Live API Playground (Postman & DRF Simulator)**:
   - Embedded interactive REST client allowing visitors to simulate real HTTP requests, review response latencies (~15ms), inspect HTTP response headers, and copy formatted JSON schemas.

5. **GitHub Actions Ready**:
   - Automated CI/CD workflow configured in `.github/workflows/deploy.yml` for zero-configuration GitHub Pages hosting.

---

## 🚀 Local Development Setup

```bash
# Clone the repository
git clone https://github.com/kiruthickraj004/kiruthickraj004.github.io.git
cd kiruthickraj004.github.io

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build
```

---

## 📦 Deployment to GitHub Pages

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: complete interactive developer portfolio with dark/light themes"
   git push origin main
   ```
2. In your repository settings on GitHub, navigate to **Settings** > **Pages** > **Build and deployment** > **Source**, and select **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) will build and deploy your site automatically!
