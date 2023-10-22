import { ReactNode, createContext, useState, useEffect } from 'react';
import { useToast } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { getIsAuth, signInUser } from '../api/auth';
interface Auth {
    login: (email: string, password: string) => void;
    logout: () => void;
    authInfo: object;
    isAuth: () => void;
}

interface Props {
    children: ReactNode;
}

const initialInfo = {
    profile: null,
    isLoggedIn: false,
    isPending: false,
    error: '',
};

export const AuthContext = createContext<Auth>(null!);

export function AuthProvider({ children }: Props) {
    const [authInfo, setAuthInfo] = useState(initialInfo);
    const { notify } = useToast();
    const navigate = useNavigate();

    const login = async (email: string, password: string) => {
        setAuthInfo({ ...authInfo, isPending: true });
        const { user, error } = await signInUser({ email, password });

        if (error) {
            notify('error', error);
            setAuthInfo({ ...authInfo, isPending: false, error });
        }

        navigate('/', { replace: true });

        setAuthInfo({
            profile: user,
            isLoggedIn: true,
            isPending: false,
            error: '',
        });
        localStorage.setItem('auth-token', user.token);
    };

    const logout = () => {
        localStorage.removeItem('auth-token');
        setAuthInfo(initialInfo);
    };

    const isAuth = async () => {
        const token = localStorage.getItem('auth-token');
        if (!token) return;

        setAuthInfo({ ...authInfo, isPending: true });
        const { user, error } = await getIsAuth(token);
        if (error) {
            notify('error', error);
            setAuthInfo({ ...authInfo, isPending: false, error });
        }
        setAuthInfo({
            profile: user,
            isPending: false,
            isLoggedIn: true,
            error: '',
        });
    };

    useEffect(() => {
        isAuth();
    }, []);
    return (
        <AuthContext.Provider value={{ login, logout, authInfo, isAuth }}>
            {children}
        </AuthContext.Provider>
    );
}
