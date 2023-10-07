import styled from 'styled-components';

export const Header = styled.header`
	background: ${(props) => props.theme.colors.mainDark};
	padding: 2rem 0 8rem;
	text-align: center;
`;

const BaseContainer = styled.div`
	width: min(90vw, 800px);
	margin: auto;
`;

export const BalanceContainer = styled(BaseContainer).attrs({ as: 'main' })`
	margin-top: -6rem;
`;
