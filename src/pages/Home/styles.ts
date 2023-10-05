import styled from 'styled-components';

export const Header = styled.header`
	background: #2d4a22;
	padding: 2rem 0 6rem;
	text-align: center;
`;

const BaseContainer = styled.div`
	width: min(90vw, 800px);
	margin: auto;
`;

export const BalanceContainer = styled(BaseContainer).attrs({ as: 'main' })`
	margin-top: -4rem;
`;
