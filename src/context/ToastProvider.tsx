import { ReactNode, createContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Toast {
    notify: (type: string, message: string) => void;
}
interface Props {
    children: ReactNode;
}

const options = {
    autoClose: 6000,
    type: toast.TYPE.INFO,
    hideProgressBar: false,
    position: toast.POSITION.TOP_CENTER,
    pauseOnHover: true,
    progress: 0.2,
};

export const ToastContext = createContext<Toast>(null!);

export function ToastProvider({ children }: Props) {
    const notify = (type: string, message: string) => {
        switch (type) {
            case 'success':
                toast.success(message, options);
                break;
            case 'warn':
                toast.warn(message, options);
                break;
            case 'error':
                toast.error(message, options);
                break;
            case 'info':
                toast.info(message, options);
                break;
        }
    };
    return (
        <ToastContext.Provider value={{ notify }}>
            {children}
        </ToastContext.Provider>
    );
}
