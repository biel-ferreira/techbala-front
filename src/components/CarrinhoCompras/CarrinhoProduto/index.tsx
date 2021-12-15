import { useContext, useEffect, useState } from "react"
import { Container } from "./styles"
import deleteIcon from "../../../assets/Delete.svg"
import incrementIcon from "../../../assets/Increment.svg"
import decrementIcon from "../../../assets/Decrement.svg"
import { CarrinhoContext } from "../../../context/CarrinhoContext"
import {IProdutoCarrinho} from "../../../models/produto"

interface CarrinhoProdutoProps {
  produto: IProdutoCarrinho;
  key: number;
}

export function CarrinhoProduto({produto} : CarrinhoProdutoProps, ) {
  const {carrinho, setCarrinho } = useContext(CarrinhoContext)
  const [quantity, setQuatity] = useState(carrinho.find(item => item.titulo === produto.titulo)?.quantity)

  const increment = () => {
    let temp_carrinho:IProdutoCarrinho[] = [...carrinho];
    
    let temp_produto = temp_carrinho.find(item => item.titulo === produto.titulo);
    
    if (temp_produto) {
      if (temp_produto.quantity < temp_produto.estoque) {
        temp_produto.quantity = temp_produto.quantity+1;
      }
    }
    setCarrinho(temp_carrinho);
  }

  const decrement = () => {
    let temp_carrinho:IProdutoCarrinho[] = [...carrinho];
    
    let temp_produto = temp_carrinho.find(item => item.titulo === produto.titulo);
    
    if (temp_produto) {
      temp_produto.quantity = temp_produto.quantity-1;
      if (temp_produto.quantity <= 0) {
        console.log('vish');
        temp_carrinho = carrinho.filter((item) => item.titulo !== produto.titulo)
      }
      console.log("produto quantity: " + temp_produto.quantity);
    }
    setCarrinho( temp_carrinho );
  }

  const handleRemoveProduct = () => {
    const newCarrinho:IProdutoCarrinho[] = carrinho.filter((item) => item.titulo !== produto.titulo)
    setCarrinho(newCarrinho)
  }

  return(
    <Container >
      <img src={produto.imagem} alt="imagem produto" />
      <h3>{produto.titulo}</h3>
      <div className="quantidade" >
        <div>
          <button onClick={decrement} ><img src={decrementIcon} /></button>
          <input value={produto.quantity} />
          <button onClick={increment} ><img src={incrementIcon} /></button>
        </div>
        <button onClick={handleRemoveProduct} > <img src={deleteIcon} /></button>
      </div>
      <div className='flex-column' >
        <span>R$ {(produto.preco * produto.quantity).toFixed(2)}</span>
        {produto.quantity > 1 
          && <span className='span-preco-unidade' >R$ {produto.preco.toFixed(2)}</span> }
        
      </div>
    </Container>
  )
}