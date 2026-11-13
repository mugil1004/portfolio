# Mugilarasan K — Professional Developer Portfolio

A modern, responsive, high-performance developer portfolio website engineered for **Mugilarasan K**, Computer Science Engineering Undergraduate (Class of 2027) & Aspiring Java Developer.

Built with clean semantic **HTML5**, modern **CSS3** (custom properties, glassmorphism, responsive flex/grid, print styling), and lightweight, vanilla **JavaScript** (no heavy dependencies or build steps required).

---

## 🌟 Key Features

1. **Hero Section with Dynamic Typing Animation**:
   - Interactive typing effect showcasing key roles: *Aspiring Java Developer*, *CS Undergrad*, *OOP & Problem Solving Enthusiast*, *Full Stack & Mobile Builder*.
   - Live availability badge ("Available for Internships & Entry-Level Roles").
   - Syntax-highlighted interactive Java code card (`Developer.java`).

2. **Dark / Light Mode Toggle**:
   - One-click theme switcher with smooth transition.
   - Automatically saves user choice in `localStorage`.

3. **Curated Sections from Resume**:
   - **About Me**: Professional summary, key academic specs, and highlight stat cards.
   - **Technical Skills**: Structured into *Programming Languages*, *Databases*, *App & Web Dev*, *Core CS Concepts*, *Tools & OS*, and *Languages*.
   - **Internship Experience**: Detailed interactive career timeline featuring:
     - **Logirtha Technologies Private Limited** (Python Development Intern, Thanjavur)
     - **Pan tech** (Full Stack Development Intern, Chennai)
   - **Featured Projects**: Filterable project gallery (All / Mobile Apps / Web Apps) showcasing:
     - **SafePaws AI** (React Native, TypeScript, Firebase, AI/ML, GIS)
     - **File Upload Manager** (HTML, CSS, JavaScript, Git)
   - **Education**: B.E. Computer Science and Engineering at Anjalai Ammal Mahalingam Engineering College (AAMEC, 2027).
   - **Direct Contact & Collaboration**: One-click copy for email (`kmukilan885@gmail.com`) and phone (`+91 8270863478`), direct profile pills, and an interactive message form.

4. **Resume Viewer & Direct 1-Click Print/PDF**:
   - Built-in "View Resume" modal presenting a cleanly formatted resume.
   - "Print / Save PDF" button with custom `@media print` CSS for exporting to PDF.

5. **Toast Notifications**:
   - Visual feedback when copying contact info, switching themes, or sending messages.

---

## 🚀 How to View Locally

### Option 1: Instant Browser Preview (No installation required)
Simply double-click `index.html` or right-click `index.html` > **Open with** > **Google Chrome** (or Edge/Firefox).

### Option 2: Live Server / Local Web Server
If you use VS Code:
1. Open the folder in VS Code:
   ```powershell
   code "C:\Users\Mugilan\.gemini\antigravity\scratch\mugilarasan-portfolio"
   ```
2. Install the **Live Server** extension and click **Go Live** on `index.html`.

Alternatively, with Python:
```powershell
cd "C:\Users\Mugilan\.gemini\antigravity\scratch\mugilarasan-portfolio"
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

---

## 🌐 How to Deploy for Free on GitHub Pages

Since your GitHub username is **[mugil1004](https://github.com/mugil1004)**, you can host this portfolio live with your own free link (e.g. `https://mugil1004.github.io/portfolio`):

1. **Initialize Git in the project directory**:
   ```powershell
   cd "C:\Users\Mugilan\.gemini\antigravity\scratch\mugilarasan-portfolio"
   git init
   git add .
   git commit -m "feat: initial release of Mugilarasan developer portfolio"
   ```

2. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Name it `portfolio` (or `mugil1004.github.io`)
   - Leave it public and do not initialize with README (you already have one)

3. **Link and Push**:
   ```powershell
   git branch -M main
   git remote add origin https://github.com/mugil1004/portfolio.git
   git push -u origin main
   ```

4. **Activate GitHub Pages**:
   - In your GitHub repo, go to **Settings** > **Pages**.
   - Under **Branch**, select `main` / `root` and click **Save**.
   - Your live website will be ready in under 1 minute!

---

## 📁 File Structure

```text
mugilarasan-portfolio/
├── index.html        # Main semantic HTML structure & sections
├── style.css         # Styling, themes (dark/light), animations, print styles
├── script.js         # Interactive behaviors, filters, typing animation, modals
└── README.md         # Documentation & deployment guide
```
