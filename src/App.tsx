import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';
import { postItem, setAuthHeader } from './services/api';
import useFetch from './hooks/useFetch';

interface SessionProps {
	token: string;
	error: string;
}

function App() {
	const [userLoaded, setUserLoaded] = useState(false);
	const initData = WebApp.initData;
	const { data: status } = useFetch('/status');

	useEffect(() => {
		handleLoadToken();
	}, []);

	async function handleLoadToken() {
		const response = await postItem<SessionProps>('/sessions', { initData });
		if (response.error) {
			setTimeout(handleLoadToken, 3000);
		} else {
			setAuthHeader(response.token);
			setUserLoaded(true);
			WebApp.ready();
		}
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				{userLoaded ? (
					<Home />
				) : (
					<>
						<p
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: '8rem'
							}}
						>
							Loading user data...
						</p>
						<div
							style={{
								height: '0.8rem',
								width: '0.8rem',
								background: status ? 'green' : 'red',
								borderRadius: '50%',
								position: 'absolute',
								top: '1px',
								right: '1px'
							}}
						></div>
					</>
				)}
				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}

export default App;
