import { Container } from './styles';

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
					<td></td>
				</tr>
			</tbody>
		</Container>
	);
}
