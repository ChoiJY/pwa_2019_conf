import React from 'react';
import ReactDOM from 'react-dom';
import {PrimaryButton} from 'office-ui-fabric-react/lib/Button';

const App = () => {
  <div className="app"></div>
};

ReactDOM.render(<App/>, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}