import { Container } from "./styles";
import UploadImg from "../../assets/imagem.svg";
import voltarImg from "../../assets/Voltar.svg";
export function CadastrarProduto() {
  return (
    <Container>
      <button className="voltar" type="button">
        <img src={voltarImg} alt="voltar" />
      </button>
      <div className="contentOne">
          
        <div className="contentImg">
            
          <h1>Cadastrar Produto</h1>
          <p>Preencha os dados do Produto</p>
          <input className="upload" type="file" alt="foto-perfil"></input>
          <img
            className="perfil-image"
            src={UploadImg}
            alt="perfil-img"
            onClick={() => {
              const a = document.querySelector(".upload") as HTMLInputElement;
              if (a) {
                a.click();
              }
            }}
          />
        </div>

        <div className="contentTwo">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />
          <input type="text" placeholder="Estoque" />
          <input type="text" placeholder="Descriçao" />
        </div>
      </div>

      <div className="contentThree">
        <input type="text" placeholder="Informaçoes Tecnicas" />
        <button type="submit">Concluir Cadastro</button>
      </div>
    </Container>
  );
}
