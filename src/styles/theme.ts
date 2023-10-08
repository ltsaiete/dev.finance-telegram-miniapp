import { DefaultTheme } from 'styled-components/dist/types';
import WebApp from '@twa-dev/sdk';

interface ThemeProps {
	main: string;
	mainDark: string;
}
const lightTheme = {
	main: '#49AA26',
	mainDark: '#2D4A22'
};
const darkTheme = {
	main: '#8257E5',
	mainDark: '#28203E'
};
const themeColors: ThemeProps = WebApp.colorScheme === 'dark' ? darkTheme : lightTheme;

export const theme: DefaultTheme = {
	colors: {
		textBase: WebApp.themeParams.hint_color,
		textTitle: WebApp.themeParams.text_color,
		background: WebApp.themeParams.secondary_bg_color,
		boxFill: WebApp.themeParams.bg_color,
		green: '#49AA26',
		red: '#E92929',
		white: '#FFF',
		...themeColors
	}
};
