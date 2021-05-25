import React, { Fragment } from 'react';

import { Counter } from 'components/counter/Counter';
import Titlebar from 'components/titlebar/Titlebar';

import { customTheme } from 'theme/palette';
import { loadTheme } from 'office-ui-fabric-react';

import logo from 'logo.svg';
import styles from 'components/App.module.scss';

loadTheme({ palette: customTheme });

function App() {
  return (
    <Fragment>
    <Titlebar />

    <div className={ styles.app }>
      <header className={ styles['app-header'] }>
        <img src={logo} className={ styles['app-logo'] } alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={ styles['app-link'] }
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={ styles['app-link'] }
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={ styles['app-link'] }
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={ styles['app-link'] }
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
    </Fragment>
  );
}

export default App;
