# Electron, React, & Python Template
> Reusable template for Electron projects which uses a React front-end with Redux and is integrated with Python/Flask for microservices.

<br>

## 🛠️ Setup
Clone this repository, navigate to its directory, and install Node & Python dependencies:

**Install python dependencies:**
```bash
pip3 install -r requirements.txt
```

**Install node dependencies:**
```bash
npm install
```

<br>

## ⚙️ Config
See `./src/utils/requests.js` for pre-made React request functions. You can use these to invoke your Python scripts in the `app.py` file.

**Electron:** Electron's `main.js`, `preload.js`, and `renderer.js` files can be found in the project's root directory.

**React:** React files can be found in the `./src/` folder, the custom toolbar is in `./src/components/toolbar`.

**Python:** Python scripts can be created in the `./app.py` file and used on events via [REST](https://developer.mozilla.org/en-US/docs/Glossary/REST) calls.

<br>

## 📜 Scripts
To use your React/Python app in Electron, you must build React:

**Build React:**
```bash
npm run build
```

If you want to update the JSDoc code documentation build:

**Build Documentation:**
```bash
npm run build:docs
```

To start Electron, using your React build for its HTML page:

**Start Electron:**
```bash
npm run start
```

To build a distributable package for every OS (Linux, MacOS, and Windows):

**Build all:**
```bash
npm run build:all
```

To build a distributable package for Linux:
**Build Linux:**
```bash
npm run build:linux
```


To build a distributable package for macOS:

**Build MacOS:**
```bash
npm run build:mac
```

To build a distributable package for Windows:

**Build Windows:**
```bash
npm run build:windows
```
<br>

## 🐱‍👓 Docs
Code documentation for this template, created with [JSDoc](https://github.com/jsdoc/jsdoc), can be found here:<br>
[Electron, React, & Python Template](https://ipzard.github.io/electron-react-python-template/)

<br>

## 🏷️ License
MIT © [iPzard](https://github.com/iPzard/electron-react-python-template/blob/master/LICENSE)