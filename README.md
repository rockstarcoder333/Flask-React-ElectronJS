# Electron, React, & Python Template
> Reusable template for Electron projects which uses a React front-end with Redux and is integrated with Python/Flask for microservices.
<br>

# 🛠️ Setup
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

# ⚙️ Config
See `./src/utils/requests.js` for pre-made React request functions. You can use these to invoke your Python scripts in the `app.py` file.

**Electron:** Electron's `main.js`, `preload.js`, and `renderer.js` files can be found in the project's root directory.

**Python:** Python scripts can be created in the `./app.py` file and used on events via [REST](https://developer.mozilla.org/en-US/docs/Glossary/REST) calls.

**React:** React files can be found in the `./src/` folder, the custom toolbar is in `./src/components/toolbar`.

<br>

# 📜 Scripts
To use your React/Python app in Electron, you must build it with:

**Build React:**
```bash
npm run build
```

To start Electron, using your React build for its HTML page, use:

**Start Electron:**
```bash
npm run start
```

You can run the Flask server manually to run your own tests from the root directory with:

**Testing Flask:**
```bash
py app.py
```
<br>

## 🏷️ License

MIT © [iPzard](https://github.com/iPzard/electron-react-python-template/blob/master/LICENSE)