import { createContext, useState, ReactNode } from 'react';

interface Rate {
  showRateModal: boolean;
  setShowRateModal: (value: boolean) => void;
}

interface Props {
  children: ReactNode;
}

export const RateContext = createContext<Rate>(null!);

export function RateProvider({ children }: Props) {
  const [showRateModal, setShowRateModal] = useState(false);

  return (
    <RateContext.Provider value={{ showRateModal, setShowRateModal }}>
      {children}
    </RateContext.Provider>
  );
}
