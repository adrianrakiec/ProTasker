import { useEffect } from 'react';
import { ActionButton } from './ActionButton';

interface PopupConfirmProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
}

export const PopupConfirm: React.FC<PopupConfirmProps> = ({
	isOpen,
	onClose,
	onConfirm,
}) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};

		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
		} else {
			document.removeEventListener('keydown', handleKeyDown);
		}

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
			onClick={onClose}
		>
			<div
				className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full'
				onClick={e => e.stopPropagation()}
			>
				<h2 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
					Are you sure?
				</h2>
				<p className='text-gray-600 dark:text-gray-300 mb-6'>
					This action cannot be undone.
				</p>
				<div className='flex justify-end gap-3'>
					<ActionButton label='Cancel' handleClick={onClose} />
					<ActionButton
						label='Confirm'
						handleClick={onConfirm}
						actionType='delete'
					/>
				</div>
			</div>
		</div>
	);
};
