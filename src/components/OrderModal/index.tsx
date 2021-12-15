import { Container } from "./style";
import { useModals } from "../../hooks/useModals";
import { ModalStyled } from "../OrderModal/style";
import Modal from "react-modal";
import { useContext } from "react";
import { BuscaContext } from "../../context/BuscaContext";

interface OrderModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  style: {};
}

export function OrderModal({ isOpen, onRequestClose, style }: OrderModalProps) {
    const { setSearchOrder } = useContext(BuscaContext);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        closeTimeoutMS={500}
        ariaHideApp={false}
        style={style}
      >
          <li onClick={()=> {onRequestClose(); setSearchOrder('higherprice')}}><a>maior preço</a></li>
          <li onClick={()=> {onRequestClose(); setSearchOrder('lowerprice')}}><a>menor preço</a></li>
          <li onClick={()=> {onRequestClose(); setSearchOrder('relevancia')}}><a>relevancia</a></li>
     
      </Modal>
      <ModalStyled />
    </>
  );
}
