import { MinusCircle } from '@phosphor-icons/react';
import { Container, CurrencyColumn } from './styles';
import { theme } from '../../styles/theme';
import useFetch from '../../hooks/useFetch';
import { formatCurrency, formatDate } from '../../utils/formatters';

export interface TransactionProps {
	description: string;
	amount: number;
	date: Date;
}

export default function TransactionsTable() {
	const { data: transactions } = useFetch<TransactionProps[]>('/transactions');

	return (
		<Container>
			<thead>
				<tr>
					<th>Description</th>
					<th>Amount</th>
					<th>Date</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{transactions?.map((transaction) => {
					return (
						<tr>
							<td className="description">{transaction.description}</td>
							<CurrencyColumn expense={transaction.amount < 0}>{formatCurrency(transaction.amount)}</CurrencyColumn>
							<td>{formatDate(new Date(transaction.date))}</td>
							<td className="remove" onClick={() => console.log('aaaaa')}>
								<MinusCircle size={32} color={theme.colors.red} />
							</td>
						</tr>
					);
				})}
			</tbody>
		</Container>
	);
}
