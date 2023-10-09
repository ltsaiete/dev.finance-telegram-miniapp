import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';
import { postItem, setAuthHeader } from './services/api';

interface SessionProps {
	token: string;
}

function App() {
	const [userLoaded, setUserLoaded] = useState(false);
	// const initData = WebApp.initData;
	const initData =
		'query_id=AAG2pTEvAAAAALalMS8u4OpW&user=%7B%22id%22%3A791782838%2C%22first_name%22%3A%22Lewis%22%2C%22last_name%22%3A%22Senpai%22%2C%22username%22%3A%22The_bugger%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1696875917&hash=9611eef722612f26edb3c222b2e675294eb0136fbfef06024ce38c554291df2a';

	useEffect(() => {
		handleLoadToken();
	}, []);

	async function handleLoadToken() {
		const response = await postItem<SessionProps>('/sessions', { initData });
		if (response) {
			setAuthHeader(response.token);
			setUserLoaded(true);
		}
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				{userLoaded ? <Home /> : <p>Loading user data...</p>}
				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}

export default App;
