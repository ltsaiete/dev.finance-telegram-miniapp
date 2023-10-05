import { ArrowCircleUp, ArrowCircleDown, CurrencyCircleDollar } from '@phosphor-icons/react';
import BalanceCard from '../../components/BalanceCard';
import logo from '../../assets/logo.svg';
import { BalanceContainer, Header } from './styles';

export default function Home() {
	return (
		<>
			<Header>
				<img src={logo} alt="logo dev.finance$" />
			</Header>
			
			<BalanceContainer>
				<section id="balance">
					<h2 className="sr-only">Balance</h2>
					<BalanceCard title="Incomes" amount={0} CardIcon={ArrowCircleUp} />
					<BalanceCard title="Expenses" amount={0} CardIcon={ArrowCircleDown} />
					<BalanceCard title="Total" amount={0} CardIcon={CurrencyCircleDollar} />
				</section>
			</BalanceContainer>

			<main className="container">
				<section id="transaction">
					<h2 className="sr-only">Transactions</h2>

					<a href="#" className="button new">
						+ New Transaction
					</a>
					<table id="data-table">
						<thead>
							<tr>
								<th>Description</th>
								<th>Amount</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody></tbody>
					</table>
				</section>
			</main>
		</>
	);
}
