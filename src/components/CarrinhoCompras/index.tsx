import { Container, Divisoria, SectionContainer, Subject } from "./styles";
import carrinhoIcon from "../../assets/ShoppingCart.svg";
import locationIcon from "../../assets/Location.svg";
import resumeIcon from "../../assets/ShoppingTag.svg";
import { useContext, useEffect, useState } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { CarrinhoProduto } from "./CarrinhoProduto";
import InputMask from 'react-input-mask'
import { api } from "../../services/api";

import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

interface CarrinhoComprasProps {
  onOpenLoginModal: ()=> void;
}

export function CarrinhoCompras({onOpenLoginModal}: CarrinhoComprasProps) {
  const navigate = useNavigate();
  const [cep, setCep] = useState('')
  const {carrinho, setCarrinho} = useContext(CarrinhoContext)
  const {authenticated} = useContext(AuthContext)
  const [precoTotal, setPrecoTotal] = useState(0)
  const [precoFrete, setPrecoFrete] = useState<any[]>([])
  const [selectedFrete, setSelectedFrete] = useState('')
  
  let preco = 0;
  
  function onSetPrecoTotal() {
    carrinho.forEach(item => {
      preco += (item.preco * item.quantity)
    });
    setPrecoTotal(preco)
  }

  useEffect(() => {
    onSetPrecoTotal()
  }, [carrinho])

  function handleLimparCarrinho() {
    setCarrinho([])
  }

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(cep);
    await api.post('/correios/preco', {
      "cep":cep,
      "peso":"1",
      "formato":"1",
      "comprimento":"15",
      "altura":"5",
      "largura":"10",
      "diametro":"8"
    }).then((response) => setPrecoFrete(response.data))
  }

  const onChangeSelectedFrete = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSelectedFrete(event.target.value)
  }

  useEffect(() => {
    console.log(precoFrete);
  }, [precoFrete])

  return(
    <Container>
      <div className="flex-direction-column" >
        <SectionContainer >
          <section className="endereco" >
            <div className="flex">
              <img src={locationIcon} alt="icon informe CEP" />
              <h2>Informe o CEP</h2>
            </div>
            <form onSubmit={handleOnSubmit} >
              <InputMask mask='99999999' value={cep} onChange={(e:any) => setCep(e.target.value)} />
              {/* <input type="text" id="inputCep" placeholder="Inserir CEP" value={cep} onChange={(e) => setCep(e.target.value)} /> */}
              <button type="submit">OK</button>
              <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="buscar CEP por endereco">Não lembro meu CEP</a>
            </form>
            {precoFrete.length > 0 && 
              <div className='preco-frete' >
                {/* <select name="selected-frete" id="selected-frete" value={selectedFrete}>
                  <option value="SEDEX">SEDEX: <span>{precoFrete[0].Valor}</span></option>
                  <option value="PAC">PAC: <span>{precoFrete[1].Valor}</span></option>
                </select> */}
                <label>
                  <input type="radio" value="SEDEX" name="frete" id='sedex' onChange={onChangeSelectedFrete} />
                  <span>Sedex: R${precoFrete[0].Valor}</span>
                </label>
                <label>
                  <input type="radio" value="PAC" name="frete" id='sedpacex' onChange={onChangeSelectedFrete} />
                  <span>PAC: R${precoFrete[1].Valor}</span>
                </label>
              </div>
            }
          </section>
        </SectionContainer >
        {/* carrinho de compras */}
        <SectionContainer >
          <section>
            <div className="flex flex-space-between" >
              <div className="flex" >
                <img src={carrinhoIcon} alt="icon carrinho" />
                <h2>Meu Carrinho</h2>
              </div>
              <button onClick={handleLimparCarrinho} >Limpar Carrinho</button>
            </div>

            {carrinho.map((item, index) => {
              return <CarrinhoProduto key={index} produto={item} />
            })}
          </section>
        </SectionContainer>
      </div>
      
      <SectionContainer className="resumo" >
        <div className="flex">
          <img src={resumeIcon} alt="icon resumo" />
          <h2>Resumo</h2>
        </div>
        <Subject>
          Total:
          <b>{precoTotal ? `R$ ${precoTotal.toFixed(2)}` : 'R$ 0,00'}</b>
        </Subject>
        <Divisoria/>
        <Subject>
          Frete: 
          <b>R$ { selectedFrete === "SEDEX" ? precoFrete[0].Valor 
            : selectedFrete === "PAC" ? precoFrete[1].Valor 
            : '0.00' } </b>
        </Subject>
        {authenticated && <><button className="finalizar-compra" onClick={()=> navigate('/pagamento')}>Finalizar Compra</button></>}
            
        {!authenticated && <><span>Login necessario para efetuar a compra</span><button className="Login" onClick={onOpenLoginModal}>Fazer Login</button></>}
        
        
      </SectionContainer>
    </Container>
  )
}