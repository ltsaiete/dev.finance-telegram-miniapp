import { InputGroup, ActionsGroup, DangerButton, Button } from './styles';
export default function TransactionForm() {
	return (
		<form>
			<InputGroup>
				<label htmlFor="description" className="sr-only">
					Descrição
				</label>
				<input type="text" id="description" name="description" placeholder="Descrição" />
			</InputGroup>

			<InputGroup>
				<label htmlFor="amount" className="sr-only">
					Valor
				</label>
				<input type="number" id="amount" name="amount" step="0.01" placeholder="0,00" />
				<small className="help">Use o sinal - (negativo) para despesas e , (virgula) para casas decimais</small>
			</InputGroup>

			<InputGroup>
				<label htmlFor="date" className="sr-only">
					Descrição
				</label>
				<input type="date" id="date" name="date" placeholder="01/01/2021" />
			</InputGroup>

			<ActionsGroup>
				<DangerButton type="button" className="cancel" onClick="Modal.close()">
					Cancel
				</DangerButton>
				<Button type="submit">Save</Button>
			</ActionsGroup>
		</form>
	);
}
