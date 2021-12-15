import { Container } from "./styles";
import { useModals } from "../../hooks/useModals";
import { ModalStyled } from "../PedidoModal/styles";
import Modal from "react-modal";
import { useContext } from "react";
import { BuscaContext } from "../../context/BuscaContext";

interface PedidoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function PedidoModal({ isOpen, onRequestClose }: PedidoModalProps) {
    const { setSearchOrder } = useContext(BuscaContext);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content-pedido"
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
          <img src="" alt="" />
     
      </Modal>
      <ModalStyled />
    </>
  );
}
