import { Icon } from '@phosphor-icons/react';
interface BalanceCardProps {
	title: string;
	CardIcon: Icon;
	amount: number;
}

export default function BalanceCard({ title, amount, CardIcon }: BalanceCardProps) {
	return (
		<div className="card">
			<h3>
				<span>{title}</span>
				<CardIcon size={32} color="#333" />
			</h3>
			<p id="income-display">{amount} Mzn</p>
		</div>
	);
}
