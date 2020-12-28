import React from 'react';
import ReactDOM from 'react-dom';
import { library } from './components/icons/fontawesome';
import './styles/scss/custom.scss';

import App from './App';

ReactDOM.render(<App icons={library} />, document.getElementById('root'));
