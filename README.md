# 🍽️ Restaurant-Website – Dynamisch gerendert mit JavaScript & Webpack

Dieses Projekt demonstriert eine moderne Architektur zur Erstellung einer vollständigen Restaurant-Website, bei der **alle Inhalte vollständig per JavaScript generiert** werden.
Die Seite nutzt **ES6-Module**, Webpack als Build-Tool, eine **getrennte Development-/Production-Konfiguration** und ein Tab-System zur Navigation zwischen Home-, Menü- und Kontaktbereich.

---

## 📦 Aktueller Projektstatus

**Vollständig abgeschlossen:**

* Modernes npm-/Webpack-Projekt eingerichtet
* **Webpack in Common-, Dev- und Prod-Konfiguration aufgeteilt**

  * `webpack.common.js`
  * `webpack.dev.js`
  * `webpack.prod.js`
* `.gitignore` korrekt konfiguriert (`node_modules`, `dist`)
* HTML-Template (`src/template.html`) mit Header, Navigation und leerem `#content`
* Webpack Dev-Server erfolgreich eingerichtet
* Modulstruktur umgesetzt:

  * `home.js`
  * `menu.js`
  * `contact.js`
* Alle Seiten werden dynamisch erzeugt – DOM-Struktur, Bilder, Texte
* Tab-Switching vollständig implementiert

  * Event Listener auf Nav-Buttons
  * automatisches Leeren & Neuladen von `#content`
* Styling **vollständig abgeschlossen** (`global.css`, `home.css`, `menu.css`, `contact.css`)
* Funktionalität & Layout vollständig abgeschlossen
* Deployment über GitHub Pages vorbereitet

---

## 📁 Projektstruktur

```
restaurant-page/
│
├── dist/
├── node_modules/
│
├── src/
│   ├── css/
│   │   ├── global.css
│   │   ├── home.css
│   │   ├── menu.css
│   │   └── contact.css
│   │
│   ├── img/
│   │   └── ...
│   │
│   ├── home.js
│   ├── menu.js
│   ├── contact.js
│   ├── index.js
│   └── template.html
│
├── .gitignore
├── IMAGE-SOURCES.md
├── package.json
├── package-lock.json
├── README.md
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

---

## 🎯 Ziele des Projekts

* Dynamische DOM-Erstellung ohne statisches HTML (außer Template)
* Klare, modulare Struktur durch ES6-Module
* Navigation über ein selbstgebautes Tab-System
* CSS modular nach Seiten getrennt
* Moderne Webpack-Architektur:

  * Common-, Development- und Production-Config
  * Asset Handling, HTML-Template, automatische Bereinigung
* Reproduzierbarer, wartbarer Entwicklungs-Workflow

---

## ⚙️ Development Workflow

### 🔧 Development starten

```
npm run start
```

→ Startet `webpack-dev-server` mit automatischem Reloading
→ nutzt `webpack.dev.js`

---

### 🏗️ Production Build erzeugen

```
npm run build
```

→ Erstellt ein optimiertes, minimiertes Bundle für Deployment
→ nutzt `webpack.prod.js`

---

## 🚀 Deployment – GitHub Pages

Das Projekt ist vollständig bereit für das Deployment über GitHub Pages.
Dazu wird der `dist`-Ordner über ein npm-Skript als Subtree auf den Branch **gh-pages** gepusht.

### 1️⃣ Production Build erzeugen

```
npm run build
```

### 2️⃣ Deployen

```
npm run deploy
```

Intern führt das Skript aus:

```
git subtree push --prefix dist origin gh-pages
```

### Hinweis (nur beim allerersten Deployment)

Falls der Branch noch nicht existiert:

```
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initialize gh-pages"
git push origin gh-pages
git checkout main
```

Ab dann reicht immer:

```
npm run build
npm run deploy
```

---

## 📌 Hinweis zur Entwicklungsumgebung

Die Entwicklung erfolgt aktuell über deinen **Firmen-GitLab-Account**.
Das Deployment findet später im **privaten GitHub-Repository** statt.

---

Die Quellen zu den Bildern findest du unter **[IMAGE-SOURCES.md](IMAGE-SOURCES.md)**.