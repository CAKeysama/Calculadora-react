import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Calculator from './src/components/Calculator';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <h1>Calculator</h1>
    <Calculator />
    <div>
      <p>
        Gustavo D. Silva -{' '}
        <a href="https://github.com/CAKeysama" target="_blank" id="githublink">
          Meu github
        </a>
      </p>
    </div>
  </div>,
  document.getElementById('root')
);
