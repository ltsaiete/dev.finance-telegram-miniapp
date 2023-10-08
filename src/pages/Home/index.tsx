import BalanceCard from '../../components/BalanceCard';
import logo from '../../assets/logo.svg';
import { BalanceContainer, Header, TransactionsContainer, Footer } from './styles';
import TransactionsTable from '../../components/TransactionsTable';
import Modal from '../../components/Modal';
import { useState } from 'react';
import TransactionForm from '../../components/TransactionForm';

export default function Home() {
	const [modalOpen, setModalOpen] = useState(false);

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

				<a href="#" onClick={() => setModalOpen(true)}>
					+ New Transaction
				</a>
				<TransactionsTable />
			</TransactionsContainer>

			<Footer>
				<p>dev.finance$</p>
			</Footer>
			<Modal open={modalOpen} onOpenChange={setModalOpen} title="New Transaction">
				<TransactionForm />
			</Modal>
		</>
	);
}
