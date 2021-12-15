import Modal from "react-modal";
import { AuthContext } from "../../context/AuthContext";
import { useModals } from "../../hooks/useModals";
import { useContext } from "react";
import { ModalStyled } from "../ProdutoModal/styles";
import { Container } from "./styles";
import closeImg from "../../assets/Vector.svg";
import {IProduto} from "../../models/produto"

interface ProdutoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  produto: IProduto;
  handleComprar: () => void;
}

export function ProdutoModal({
  isOpen,
  onRequestClose,
  produto,
  handleComprar,
}: ProdutoModalProps) {
  const { openProduto, setOpenProduto } = useModals();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      closeTimeoutMS={500}
      ariaHideApp={false}
    >
      <Container>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="sair" />
        </button>
        <div className="ContentOne">
          <div className="Titulo-Img">
            <h2>{produto.titulo}</h2>
            <img src={produto.imagem} alt="imagem do produto" />
            <div className="Tecnicas">
              <h2>Informacoes Tecnicas</h2>
              <div>
                <span>Modelo : </span>

                <span> {produto.informacoestecnicas.modelo}</span>
              </div>
              <div>
                <span>Marca : </span>

                <span> {produto.informacoestecnicas.marca}</span>
              </div>

              <div>
                <span>Garantia : </span>

                <span> {produto.informacoestecnicas.garantia}</span>
              </div>
              <div>
                <span>Peso : </span>

                <span> {produto.informacoestecnicas.peso} g </span>
              </div>
            </div>
          </div>

          <div className="informacoes">
            <h2>Dados do Produto</h2>

            <div>
              <span>Categoria : </span>

              <span>{produto.categoria}</span>
            </div>

            <div>
              <h2>Descricao</h2>
              <span>{produto.descricao}</span>
            </div>
            <div className="dimensoes">
              <h2>Dimensoes </h2>
              <span>
                Comprimento:{" "}
                {produto.informacoestecnicas.dimensoes.comprimento.toFixed(2)}{" "}
                cm
              </span>
              <br />
              <span>
                Largura: {produto.informacoestecnicas.dimensoes.largura} cm
              </span>
              <br />
              <span>
                Altura: {produto.informacoestecnicas.dimensoes.altura} cm
              </span>
            </div>
            <div className="price">
              <div className="preco">
                <span>Preço: </span>
                <div className="colorprice">
                  <span>R${produto.preco.toFixed(2)}</span>
                </div>
              </div>
              <div className="estoque">
                <span>Estoque: </span>

                <span>{produto.estoque}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          className="comprar"
          onClick={() => {
            handleComprar();
            onRequestClose();
          }}
        >
          COMPRAR
        </button>
      </Container>
      <ModalStyled />
    </Modal>
  );
}
