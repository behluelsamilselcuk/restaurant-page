# 🍽️ Restaurant-Website – Dynamisch gerendert mit JavaScript & Webpack

Dieses Projekt demonstriert eine moderne Architektur zur Erstellung einer vollständigen Restaurant-Website, bei der **alle Inhalte vollständig per JavaScript generiert** werden.
Die Seite nutzt **ES6-Module**, Webpack als Build-Tool und ein Tab-System für die Navigation zwischen Home-, Menü- und Kontaktbereich.

---

## 📦 Aktueller Projektstatus

**Vollständig abgeschlossen:**

* npm-/Webpack-Projekt vollständig eingerichtet
* `.gitignore` korrekt konfiguriert (`node_modules`, `dist`)
* HTML-Template (`src/template.html`) mit Header, Navigation und leerem `#content`
* Webpack Dev-Server erfolgreich eingerichtet
* Modulstruktur umgesetzt:

  * `home.js`
  * `menu.js`
  * `contact.js`
* Alle Seiten werden dynamisch erzeugt, inklusive DOM-Struktur, Bilder & Texte
* Tab-Switching vollständig implementiert

  * Event Listener auf Nav-Buttons
  * automatisches Leeren & Neuladen von `#content`
* Styling **vollständig abgeschlossen**

  * `global.css`
  * `home.css`
  * `menu.css`
  * `contact.css`
* Projekt ist funktional und optisch vollständig

Der einzige verbleibende Schritt (Deployment) wird erst beim Umzug nach GitHub ausgeführt.

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
└── webpack.config.js
```

---

## 🎯 Ziele des Projekts

* Dynamische DOM-Erstellung ohne statisches HTML (außer Template)
* Klare Struktur durch ES6-Module
* Navigation über ein selbstgebautes Tab-System
* CSS modularisiert pro Seite
* Webpack als modernes Build-Tool
* Sauberes, wartbares Frontend-Setup

---

## ⚙️ Development Workflow

### Projekt starten

```
npx webpack serve
```

### Build erzeugen

```
npx webpack
```

---

## 🧱 Nächster Schritt

### 🔜 Deployment über GitHub Pages

Dieser Schritt wird erst notwendig, wenn das Repository in dein privates GitHub gespiegelt wurde.

Vorgehensweise:

```
git branch gh-pages
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

---

## 📌 Hinweis zur Entwicklungsumgebung

Die Entwicklung erfolgt aktuell über deinen **Firmen-GitLab-Account**.
Das Deployment findet später in deinem **privaten GitHub-Repository** statt.

---

Die Quellen zu den Bildern findest du unter [IMAGES-SOURCES.md](IMAGE-SOURCES.md)