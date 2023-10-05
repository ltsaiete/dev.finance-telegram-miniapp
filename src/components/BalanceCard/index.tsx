import { Icon } from '@phosphor-icons/react';
import { Container } from './styles';
interface BalanceCardProps {
	title: string;
	CardIcon: Icon;
	amount: number;
}

export default function BalanceCard({ title, amount, CardIcon }: BalanceCardProps) {
	return (
		<Container>
			<h3>
				<span>{title}</span>
				<CardIcon size={32} color="#333" />
			</h3>
			<p id="income-display">{amount} Mzn</p>
		</Container>
	);
}
