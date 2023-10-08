import BalanceCard from '../../components/BalanceCard';
import logo from '../../assets/logo.svg';
import { BalanceContainer, Header, TransactionsContainer } from './styles';
import TransactionsTable from '../../components/TransactionsTable';

export default function Home() {
	return (
		<>
			<Header>
				<img src={logo} alt="logo dev.finance$" />
			</Header>

			<BalanceContainer>
				<h2 className="sr-only">Balance</h2>
				<BalanceCard title="Incomes" amount={0} type="income" />
				<BalanceCard title="Expenses" amount={0} type="expense" />
				<BalanceCard title="Total" amount={0} type="total" />
			</BalanceContainer>

			<TransactionsContainer>
				<h2 className="sr-only">Transactions</h2>

				<a href="#" className="button new">
					+ New Transaction
				</a>
				<TransactionsTable />
			</TransactionsContainer>
		</>
	);
}
