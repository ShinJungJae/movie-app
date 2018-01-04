import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //App 컴포넌트를 출력해야됨 ID가 root인 곳에
registerServiceWorker();
