import { Container } from "./styles";
import carrinhoImg from "../../assets/Carrinho.svg";
import { useContext, useState } from "react";
import { ProdutoModal } from "../ProdutoModal";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import {IProduto} from "../../models/produto"

interface CardProdutoProps {
  produto: IProduto
}

export function CardProduto({ produto }: CardProdutoProps) {
  const { setCarrinho, carrinho } = useContext(CarrinhoContext);
  const [isProdutoModalOpen, setIsProdutoModalOpen] = useState(false);

  function handleComprar() {

    if (carrinho.length > 0) {
      for (let i = 0; i < carrinho.length; i++) {
        const produtoCarrinho = carrinho[i]
        let newCarrinho = [...carrinho];
        if (produtoCarrinho.titulo === produto.titulo) {
          console.log(produtoCarrinho.quantity, produto.estoque);
          if (produtoCarrinho.quantity + 1 <= produto.estoque) {
            newCarrinho[i].quantity = produtoCarrinho.quantity + 1

          }
          setCarrinho(newCarrinho)
          break;
        } else {
          setCarrinho([...carrinho, { ...produto, quantity: 1 }])
        }
      };
    } else {
      setCarrinho([{ ...produto, quantity: 1 }])
    }
  }
  function handleOpenProdutoModal() {
    setIsProdutoModalOpen(true);
  }
  function handleCloseProdutoModal() {
    setIsProdutoModalOpen(false);
  }

  return (
    <>
      <Container>
        <img src={produto.imagem} alt="" className="ImgProduto" onClick={handleOpenProdutoModal} />
        <h2>{produto.titulo}</h2>
        <div className="Comprar">
          <button onClick={handleComprar}>Comprar</button>
        </div>
        <div className="ProductPrice">
          <p>R$ {produto.preco}</p>
          <img src={carrinhoImg} alt="" />
        </div>
      </Container>
      <ProdutoModal isOpen={isProdutoModalOpen}
        onRequestClose={handleCloseProdutoModal}
        produto={produto}
        handleComprar={handleComprar}
      />
    </>
  )
}