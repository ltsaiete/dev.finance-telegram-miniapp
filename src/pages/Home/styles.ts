import styled from 'styled-components';

export const Header = styled.header<{ status: unknown | null }>`
	background: ${(props) => props.theme.colors.mainDark};
	padding: 2rem 0 8rem;
	text-align: center;
	div {
		height: 2.4rem;
		width: 2.4rem;
		background: ${(props) => (props.status ? props.theme.colors.green : props.theme.colors.red)};
		border-radius: 50%;
		position: absolute;
		top: 2rem;
		right: 2rem;
	}
`;

const BaseContainer = styled.div`
	width: min(90vw, 800px);
	margin: auto;
`;

export const BalanceContainer = styled(BaseContainer).attrs({ as: 'main' })`
	margin-top: -6rem;
`;

export const TransactionsContainer = styled(BaseContainer).attrs({ as: 'aside' })``;
export const Footer = styled(BaseContainer).attrs({ as: 'footer' })`
	text-align: center;
	padding: 4rem 2rem;
	color: ${(props) => props.theme.colors.textTitle};
	opacity: 0.6;
`;
