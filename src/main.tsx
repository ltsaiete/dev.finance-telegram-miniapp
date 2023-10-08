import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import WebApp from '@twa-dev/sdk';

WebApp.ready();
console.log(WebApp);
WebApp.requestContact((res) => console.log('response', res));
WebApp.onEvent('contactRequested', (cont) => console.log(cont));
// console.log(WebApp.WebAppUser);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
