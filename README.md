# Flask, React.js, ElectronJS Template

[![Build](https://img.shields.io/badge/build-passing-%23704cb6?style=for-the-badge)](https://github.com/rockstarcoder333/Flask-React-ElectronJS#readme)
[![License](https://img.shields.io/github/license/iPzard/electron-react-python-template?color=704cb6&style=for-the-badge)](https://github.com/rockstarcoder333/Flask-React-ElectronJS/blob/master/LICENSE)

> Multi-platform Electron template, using React & Redux Toolkit with Python/Flask microservices.


## 🛠️ Setup
Ensure you have [Node](https://nodejs.org/en/download/) and [Python](https://www.python.org/downloads/) installed, then clone this repository. After it's cloned, navigate to the project's root directory on your computer and
run the following scrips in a terminal application *(e.g., Git Bash)*:

**Install Python dependencies:**
```bash
pip3 install -r requirements.txt
```

**Install Node dependencies:**
```bash
yarn install
```

<br>

## ⚙️ Config

**Electron:** Electron's `main.js`, `preload.js`, and `renderer.js` files can be found in the project's root directory.

**React:** React files can be found in the `./src/` folder, the custom toolbar is in `./src/components/toolbar`.

**Python:** Python scripts can be created in the `./app.py` file and used on events via [REST](https://developer.mozilla.org/en-US/docs/Glossary/REST) calls.

<br>

## 📜 Scripts

Below are the scripts you'll need to run and package your application, as well as build out JSDoc documentation, if you choose to do so. An exhaustive list of scripts that are available can be found in the `package.json` file of the project's root directory, in the `scripts` section.

| ⚠️ &nbsp;When packaging, you must install [PyInstaller](https://pypi.org/project/pyinstaller) and add its path in your environment variables.<br />The name of your package in [package.js](https://github.com/rockstarcoder333/Flask-React-ElectronJS/blob/master/scripts/package.js) must also match the name field in [package.json](https://github.com/rockstarcoder333/Flask-React-ElectronJS/blob/master/package.json). |
| --- |

**Start Developer Mode:**
```bash
yarn run start
```

**Package Windows: <sup>*1*</sup>**
```bash
yarn run build:package:windows
```

**Package macOS:**
```bash
yarn run build:package:mac
```

**Package Linux:**
```bash
yarn run build:package:linux
```

**Build Documentation:**
```bash
yarn run build:docs
```

*<sup>1</sup>Windows uses [electron-wix-msi](https://github.com/felixrieseberg/electron-wix-msi), you must install and add its path to your environment variables.*
<br><br>

## 🦟 Bugs
Bugs reported on the project's [issues page](https://github.com/rockstarcoder333/Flask-React-ElectronJS/issues) will be exterminated as quickly as possible, be sure to include steps to reproduce so they can be spotted easily.
<br><br>
