import { Cartao, Container } from "./styles";
import CarrinhoImg from "../../assets/Carrinho.svg";
import SetaImg from "../../assets/Voltar.svg";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { PedidoModal } from "../PedidoModal";

export function Pagamento() {
  const navigate = useNavigate();
  const cartao = useRef<HTMLInputElement>(null);
  const nome = useRef<HTMLInputElement>(null);
  const validade = useRef<HTMLInputElement>(null);
  const cvv = useRef<HTMLInputElement>(null);
  const cpf = useRef<HTMLInputElement>(null);
  const nasc = useRef<HTMLInputElement>(null);
  const [isPedidoModalOpen, setIsPedidoModalOpen] = useState(false);

  function handleOpenPedidoModal() {
    setIsPedidoModalOpen(true);
  }
  function handleClosePedidoModal() {
    setIsPedidoModalOpen(false);
  }

  return (
    <Container>
      <PedidoModal
        isOpen={isPedidoModalOpen}
        onRequestClose={handleClosePedidoModal}
      />
      <label className="title" htmlFor="label">
        <div>
          <img src={CarrinhoImg} className="cardImg" alt="cart" /> Pagamento
        </div>
        <img
          src={SetaImg}
          className="voltar"
          alt="voltar"
          onClick={() => navigate("/carrinho")}
        />
      </label>
      <label className="label" htmlFor="Cartao">
        Cartão de Crédito
      </label>
      <Cartao>
        <form className="payForm" onSubmit={(e) => (e.preventDefault())}>
          <input
            type="text"
            name="nome"
            placeholder="Nome Impresso no Cartão"
            id="nome"
            ref={nome}
            onKeyDown={(e) => {
              if (
                /\d/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
            }}
          />
          <input
            type="text"
            name="numeroCartao"
            placeholder="Número do Cartão"
            id="numeroCartao"
            ref={cartao}
            onKeyDown={(e) => {
              if (
                /\D/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
              if (
                cartao.current &&
                cartao.current.value.length === 19 &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
              if (
                cartao.current &&
                (cartao.current.value.length === 4 ||
                  cartao.current.value.length === 9 ||
                  cartao.current.value.length === 14) &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                cartao.current.value += " ";
              }
            }}
          />
          <input
            type="text"
            name="validade"
            placeholder="Validade"
            id="validade"
            ref={validade}
            onKeyDown={(e) => {
              if (
                /\D/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
              if (
                validade.current &&
                validade.current.value.length === 5 &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
              if (
                validade.current &&
                validade.current.value.length === 2 &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                validade.current.value += "/";
              }
            }}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            id="cvv"
            ref={cvv}
            onKeyDown={(e) => {
              if (
                /\D/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
              if (
                cvv.current &&
                cvv.current.value.length === 3 &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
            }}
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF do Titular do Cartão"
            id="cpf"
            ref={cpf}
            onKeyDown={(e) => {
              if (
                /\D/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
              if (
                cpf.current &&
                cpf.current.value.length === 14 &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
              if (
                cpf.current &&
                (cpf.current.value.length === 3 ||
                  cpf.current.value.length === 7) &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                cpf.current.value += ".";
              }
              if (
                cpf.current &&
                cpf.current.value.length === 11 &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                cpf.current.value += "-";
              }
            }}
          />
          <input
            type="text"
            name="nasc"
            placeholder="Data de Nascimetento"
            id="nasc"
            ref={nasc}
            onKeyDown={(e) => {
              if (
                /\D/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
              if (
                nasc.current &&
                nasc.current.value.length === 10 &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                e.preventDefault();
              }
              if (
                nasc.current &&
                (nasc.current.value.length === 2 ||
                  nasc.current.value.length === 5) &&
                e.key !== "Backspace" &&
                e.key !== "Tab"
              ) {
                nasc.current.value += "/";
              }
            }}
          />
          <select name="parcelas" placeholder="Parcelas" id="parcelas">
            <option value="1">À vista</option>
            <option value="2">2x</option>
            <option value="3">3x</option>
            <option value="4">4x</option>
            <option value="5">5x</option>
            <option value="6">6x</option>
            <option value="7">7x</option>
            <option value="8">8x</option>
            <option value="9">9x</option>
            <option value="10">10x</option>
            <option value="11">11x</option>
            <option value="12">12x</option>
          </select>
          <input type="submit" className="submitBtt" value="Concluir" onClick={handleOpenPedidoModal}/>
        </form>
      </Cartao>
    </Container>
  );
}
