import React, { createContext, useState } from "react";

type ModalsProps = {
  isSignUp: boolean;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openUpdate: boolean;
  setOpenUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  openProduto: boolean;
  setOpenProduto: React.Dispatch<React.SetStateAction<boolean>>;
  openOrder: boolean;
  setOpenOrder: React.Dispatch<React.SetStateAction<boolean>>;
};

const DEFAULT_VALUE = {
  isSignUp: false,
  setIsSignUp: () => {},
  openMenu: false,
  setOpenMenu: () =>{},
  openUpdate : false,
  setOpenUpdate : () => {},
  openProduto : false,
  setOpenProduto : () => {},
  openOrder : false,
  setOpenOrder : () => {}
};

export const ModalsContext = createContext<ModalsProps>(DEFAULT_VALUE);

const ModalsProvider: React.FC = ({ children }) => {
  const [isSignUp, setIsSignUp] = useState(DEFAULT_VALUE.isSignUp);
  const [openMenu, setOpenMenu] = useState(DEFAULT_VALUE.isSignUp);
  const [openUpdate, setOpenUpdate] = useState(DEFAULT_VALUE.openUpdate)
  const [openProduto, setOpenProduto] = useState(DEFAULT_VALUE.openUpdate)
  const [openOrder, setOpenOrder] = useState(DEFAULT_VALUE.openOrder)
  return (
    <ModalsContext.Provider value={{openOrder, setOpenOrder, openProduto, setOpenProduto, openUpdate, setOpenUpdate, isSignUp, setIsSignUp, openMenu, setOpenMenu }}>
      {children}
    </ModalsContext.Provider>
  );
};
export default ModalsProvider;

// export default function ModalsProvider({ children }) {
//   const [isSignUp, setIsSignUp] = useState(false);

//   return (
//     <ModalsContext.Provider value={isSignUp, setIsSignUp}>
//       {children}
//     </ModalsContext.Provider>
//   );
// }
