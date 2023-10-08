import * as Dialog from '@radix-ui/react-dialog';
import { X } from '@phosphor-icons/react';
import { DialogOverlay, DialogContent, IconButton } from './styles';
import { PropsWithChildren } from 'react';

interface ModalProps {
	open: boolean;
	onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	description: string;
}

export default function Modal({ open, onOpenChange, title, description, children }: PropsWithChildren<ModalProps>) {
	return (
		<Dialog.Root open={open} onOpenChange={onOpenChange}>
			<Dialog.Portal>
				<DialogOverlay />
				<DialogContent>
					<Dialog.Title>{title}</Dialog.Title>
					<Dialog.Description>{description}</Dialog.Description>
					{children}
					<Dialog.Close asChild>
						<IconButton className="IconButton" aria-label="Close">
							<X />
						</IconButton>
					</Dialog.Close>
				</DialogContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
