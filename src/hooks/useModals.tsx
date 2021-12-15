import { useContext } from "react";

import { ModalsContext } from "../context/Modals";

export const useModals = () => {
  return useContext(ModalsContext);
};
