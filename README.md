# 🍽️ Restaurant Page – Dynamisch gerendert mit JavaScript & Webpack

**Live-Demo:**
➡️ [https://behluelsamilselcuk.github.io/restaurant-page/](https://behluelsamilselcuk.github.io/restaurant-page/)

Dieses Projekt ist Teil eines JavaScript-Kurses und demonstriert den Aufbau einer vollständigen Restaurant-Website, die **komplett per JavaScript** – ohne statisches HTML für den Seiteninhalt – gerendert wird.
Alle Elemente im Content-Bereich werden über **DOM-Manipulation**, **ES6-Module** und **Webpack** dynamisch erzeugt.

Die Website besteht aus drei „Tabs“:

* **Home**
* **Menu**
* **Contact**

Die Navigation aktualisiert den Seiteninhalt vollständig dynamisch.
CSS ist modular organisiert, Bilder werden als Webpack-Assets eingebunden.

---

## 🚀 Live Preview

Die Website ist vollständig auf GitHub Pages bereitgestellt:

🔗 **[https://behluelsamilselcuk.github.io/restaurant-page/](https://behluelsamilselcuk.github.io/restaurant-page/)**

---

## 🧠 Features

### 🔹 Vollständig dynamische DOM-Erzeugung

Alle Inhalte im Bereich `#content` werden ausschließlich durch JavaScript erzeugt.

### 🔹 Modulare ES6-Struktur

Jede Seite ist ein eigenes Modul:

* `home.js`
* `menu.js`
* `contact.js`

### 🔹 Tab-Navigation

Das Umschalten der Tabs erfolgt über Event Listener im Header:

* Inhalt löschen
* Neues Modul laden
* DOM neu rendern

### 🔹 Saubere CSS-Struktur

CSS wurde passend getrennt:

* `global.css`
* `home.css`
* `menu.css`
* `contact.css`

### 🔹 Moderne Build-Umgebung

* **Webpack** (Build + Bundling + Asset Handling)
* **Webpack Dev Server** (Live-Neuladen)
* Automatische Verarbeitung von CSS und Bildern

### 🔹 Deployment

Automatisch generierter `dist/`-Inhalt wird über einen eigenen `gh-pages`-Branch bereitgestellt.

---

## 📁 Projektstruktur

```
restaurant-page/
│
├── dist/                         ← Build-Ausgabe für GitHub Pages
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
├── package.json
├── package-lock.json
├── webpack.config.js
└── README.md
```

---

## 🛠️ Installation & Entwicklung

### 1. Repository klonen

```
git clone https://github.com/behluelsamilselcuk/restaurant-page.git
```

### 2. Abhängigkeiten installieren

```
npm install
```

### 3. Entwicklung starten

```
npx webpack serve
```

Der Dev-Server läuft unter:

➡️ [http://localhost:8080](http://localhost:8080)

### 4. Build erstellen

```
npx webpack
```

---

## 🌐 Deployment (GitHub Pages)

Der Build wird in den Branch `gh-pages` gepusht.
Verwendete Commands (bereits ausgeführt):

```
git branch gh-pages
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

GitHub Pages wurde anschließend auf `gh-pages` gesetzt.

---

## 🤝 Autor

**Behlül Samil Selcuk**
GitHub: [https://github.com/behluelsamilselcuk](https://github.com/behluelsamilselcuk)

---

Die Quellen zu den Bildern findest du unter [IMAGES-SOURCES.md](IMAGE-SOURCES.md)