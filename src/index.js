import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

require('./stylesheets/base.scss');
require('./stylesheets/home.scss');
require('./stylesheets/contact.scss');

ReactDOM.render(<Router history={browserHistory} routes={routes} />,
   document.getElementById('app'));
registerServiceWorker();
