import { ReactNode, createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

interface Toast {
    notify: (type: string, message: string) => void;
}
interface Props {
    children: ReactNode;
}

const options = {
    autoClose: 5000,
    hideProgressBar: false,
    position: toast.POSITION.TOP_CENTER,
    pauseOnHover: true,
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
            <ToastContainer />
            {children}
        </ToastContext.Provider>
    );
}
