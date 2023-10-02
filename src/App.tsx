function App() {
	return (
		<>
			<header>
				<img src="./assets/logo.svg" alt="logo dev.finance$" />
			</header>
			<main className="container">
				<section id="balance">
					<h2 className="sr-only">Balance</h2>

					<div className="card">
						<h3>
							<span>Incomes</span>
							<img src="./assets/income.svg" alt="Imagem de entradas" />
						</h3>
						<p id="income-display">0,00 Mzn</p>
					</div>

					<div className="card">
						<h3>
							<span>Expenses</span>
							<img src="./assets/expense.svg" alt="Imagem de saidas" />
						</h3>
						<p id="expense-display">0,00 Mzn</p>
					</div>

					<div className="card total">
						<h3>
							<span>Total</span>
							<img src="./assets/total.svg" alt="Imagem de total" />
						</h3>
						<p id="total-display">0,00 Mzn</p>
					</div>
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
