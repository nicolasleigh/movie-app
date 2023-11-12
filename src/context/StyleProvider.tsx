import { createContext } from 'react';
export const StyleContext = createContext(null);

export function StyleProvider({ children }) {
    const labelStyle = 'block text-gray-700 text-sm font-bold mb-2 ';
    const inputStyle =
        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    const formItemStyle = 'mb-4';
    const homeImageStyle = 'rounded opacity-90';

    return (
        <StyleContext.Provider
            value={{ labelStyle, inputStyle, formItemStyle, homeImageStyle }}
        >
            {children}
        </StyleContext.Provider>
    );
}
