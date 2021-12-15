import { createContext, ReactNode, useEffect, useState } from "react";

interface BuscaContextProps {
  searchProduto: string;
  setSearchProduto: React.Dispatch<React.SetStateAction<string>>;
  searchCategoria: string;
  setSearchCategoria: React.Dispatch<React.SetStateAction<string>>;
  searchOrder: string;
  setSearchOrder: React.Dispatch<React.SetStateAction<string>>;
}

export const BuscaContext = createContext<BuscaContextProps>({
  searchProduto: "",
  setSearchProduto: () => {},
  searchCategoria: "",
  setSearchCategoria: () => {},
  searchOrder: "",
  setSearchOrder: () => {},
});

export const BuscaProvider: React.FC = ({ children }) => {
  const [searchProduto, setSearchProduto] = useState("");
  const [searchCategoria, setSearchCategoria] = useState("");
  const [searchOrder, setSearchOrder] = useState("");

  useEffect(() => {
    console.log(searchProduto);
  }, [searchProduto]);

  return (
    <BuscaContext.Provider
      value={{
        searchOrder,
        setSearchOrder,
        searchCategoria,
        setSearchCategoria,
        searchProduto,
        setSearchProduto,
      }}
    >
      {children}
    </BuscaContext.Provider>
  );
};
