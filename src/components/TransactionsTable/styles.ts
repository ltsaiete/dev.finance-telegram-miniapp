import styled from 'styled-components';

export const Container = styled.table`
	width: 100%;
	border-spacing: 0 0.5rem;

	thead tr th:first-child {
		border-radius: 0.25rem 0 0 0;
	}

	thead tr th:last-child {
		border-radius: 0 0.25rem 0 0;
	}

	tbody tr:last-child td:first-child {
		border-radius: 0 0 0 0.25rem;
	}

	tbody tr:last-child td:last-child {
		border-radius: 0 0 0.25rem 0;
	}

	th {
		background: ${(props) => props.theme.colors.boxFill};
		font-weight: 400;
		padding: 1rem 2rem;
		text-align: left;
		color: ${(props) => props.theme.colors.textTitle};
	}

	tbody tr {
		opacity: 0.7;
	}

	tbody tr:hover {
		opacity: 1;
	}

	td {
		background: ${(props) => props.theme.colors.boxFill};
		padding: 1rem 2rem;
	}

	td.description {
		color: ${(props) => props.theme.colors.textTitle};
	}

	td.expense {
		color: ${(props) => props.theme.colors.red};
	}

	td.income {
		color: ${(props) => props.theme.colors.green};
	}

	td.remove img {
		cursor: pointer;
	}
`;
