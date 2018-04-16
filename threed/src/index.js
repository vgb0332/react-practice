import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import Main from './components/Main';
import ReactDOM from 'react-dom';



ReactDOM.render(<Main/>, document.getElementById('main'));
// ReactDom.render(<App />, document.getElementById('doms'));
registerServiceWorker();
