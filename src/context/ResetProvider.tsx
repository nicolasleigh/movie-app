import { createContext, useState, ReactNode } from 'react';

interface Reset {
    clickedReset: boolean;
    setClickedReset: (value: boolean) => void;
}

interface Props {
    children: ReactNode;
}

export const ResetContext = createContext<Reset>(null!);

export function ResetProvider({ children }: Props) {
    const [clickedReset, setClickedReset] = useState(false);
    return (
        <ResetContext.Provider value={{ clickedReset, setClickedReset }}>
            {children}
        </ResetContext.Provider>
    );
}
