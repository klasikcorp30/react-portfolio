import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/fontawesome-all.min.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
