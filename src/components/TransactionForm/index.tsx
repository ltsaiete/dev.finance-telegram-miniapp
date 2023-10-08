import { useState } from 'react';
import { InputGroup, ActionsGroup, DangerButton, Button } from './styles';

interface TransactionFormProps {
	onCloseModal(): void;
}
export default function TransactionForm({ onCloseModal }: TransactionFormProps) {
	// const [description, setDescription] = useState();
	// const [amount, setAmoun] = useState();
	// const [date, setDate] = useState();

	return (
		<form>
			<InputGroup>
				<label htmlFor="description" className="sr-only">
					Descrição
				</label>
				<input type="text" id="description" name="description" placeholder="Description" />
			</InputGroup>

			<InputGroup>
				<label htmlFor="amount" className="sr-only">
					Valor
				</label>
				<input type="number" id="amount" name="amount" step="0.01" placeholder="0,00" />
				<small className="help">Use the - (minus) signal for expenses and , (comma) For decimal places</small>
			</InputGroup>

			<InputGroup>
				<label htmlFor="date" className="sr-only">
					Descrição
				</label>
				<input type="date" id="date" name="date" placeholder="01/01/2021" />
			</InputGroup>

			<ActionsGroup>
				<DangerButton type="button" onClick={onCloseModal}>
					Cancel
				</DangerButton>
				<Button type="submit">Save</Button>
			</ActionsGroup>
		</form>
	);
}
