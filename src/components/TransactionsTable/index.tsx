import { MinusCircle } from '@phosphor-icons/react';
import { Container } from './styles';
import { theme } from '../../styles/theme';

export default function TransactionsTable() {
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
				<tr>
					<td>Desenvolvimento</td>
					<td>500$</td>
					<td>10/10/2023</td>
					<td>
						<MinusCircle size={32} color={theme.colors.red} />
					</td>
				</tr>
			</tbody>
		</Container>
	);
}
