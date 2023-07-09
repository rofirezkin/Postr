import React, {createContext, useState} from 'react';
export type ChildrenProps = {
  children: React.ReactNode;
};

interface GlobalInterface {
  language: string;
  languageHandling: (value: string) => void;
  moreLoadingHandling: (value: boolean) => void;
  moreLoading: boolean;
  endList: boolean;
  endListHandling: (value: boolean) => void;
}

const defaultState = {
  language: 'en',
  languageHandling: () => {},
  moreLoading: false,
  moreLoadingHandling: () => {},
  endList: false,
  endListHandling: () => {},
} as GlobalInterface;
export const GlobalContext = createContext(defaultState);
export const GlobalContextProvider = ({children}: ChildrenProps) => {
  const [language, setLanguage] = useState<string>('en');
  const [moreLoading, setMoreLoading] = useState<boolean>(false);
  const [endList, setEndList] = useState<boolean>(false);

  const languageHandling = (value: string) => {
    setLanguage(value);
  };
  const moreLoadingHandling = (value: boolean) => {
    setMoreLoading(value);
  };
  const endListHandling = (value: boolean) => {
    setEndList(value);
  };
  return (
    <GlobalContext.Provider
      value={{
        language,
        languageHandling,
        moreLoading,
        moreLoadingHandling,
        endList,
        endListHandling,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
