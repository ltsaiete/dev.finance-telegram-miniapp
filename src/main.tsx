// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import WebApp from '@twa-dev/sdk';

WebApp.ready();
WebApp.requestContact((res) => console.log('response', res));
WebApp.onEvent('contactRequested', (cont) => console.log('contactRequested', cont));
console.log('window');
console.log(window.Telegram.WebApp);

// console.log(WebApp.WebAppUser);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
