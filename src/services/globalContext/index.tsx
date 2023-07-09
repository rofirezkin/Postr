import React, {createContext, useState} from 'react';
export type ChildrenProps = {
  children: React.ReactNode;
};

interface GlobalInterface {
  language: string;
  languageHandling: (value: string) => void;
  moreLoadingHandling: (value: boolean) => void;
  moreLoading: boolean;
}

const defaultState = {
  language: 'en',
  languageHandling: () => {},
  moreLoading: false,
  moreLoadingHandling: () => {},
} as GlobalInterface;
export const GlobalContext = createContext(defaultState);
export const GlobalContextProvider = ({children}: ChildrenProps) => {
  const [language, setLanguage] = useState<string>('en');
  const [moreLoading, setMoreLoading] = useState<boolean>(false);

  const languageHandling = (value: string) => {
    setLanguage(value);
  };
  const moreLoadingHandling = (value: boolean) => {
    setMoreLoading(value);
  };

  return (
    <GlobalContext.Provider
      value={{language, languageHandling, moreLoading, moreLoadingHandling}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
