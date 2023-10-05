import { ArrowCircleUp, ArrowCircleDown, CurrencyCircleDollar } from '@phosphor-icons/react';
import logo from './assets/logo.svg';
import BalanceCard from './components/BalanceCard';
function App() {
	return (
		<>
			<header>
				<img src={logo} alt="logo dev.finance$" />
			</header>
			<main className="container">
				<section id="balance">
					<h2 className="sr-only">Balance</h2>
					<BalanceCard title="Incomes" amount={0} CardIcon={ArrowCircleUp} />
					<BalanceCard title="Expenses" amount={0} CardIcon={ArrowCircleDown} />
					<BalanceCard title="Total" amount={0} CardIcon={CurrencyCircleDollar} />
				</section>

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

export default App;
