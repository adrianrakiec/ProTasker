import { toast, ToastOptions, ToastPosition, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles: ToastOptions = {
	position: 'top-right' as ToastPosition,
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'colored',
	transition: Bounce,
};

export const toastService = {
	success: (message: string) => toast.success(message, styles),
	error: (message: string) => toast.error(message, styles),
};
