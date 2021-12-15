import { Container, Content } from "./styles";
import { AuthContext } from "../../context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
// import { Burger } from "../Nav/Burger";
import logoImg from "../../assets/logotechbala.svg";
import bonecoImg from "../../assets/boneco1.svg";
import lupaImg from "../../assets/Search.svg";
import carrinhoImg from "../../assets/Carrinho.svg";
import perfilImg from "../../assets/Perfil.svg";
import hamburgerImg from "../../assets/hamburger.svg";
import { useNavigate } from "react-router-dom";
import { BuscaContext } from "../../context/BuscaContext";
import { CarrinhoContext } from "../../context/CarrinhoContext";

interface HeaderProps {
  onOpenLoginModal: () => void;
  onOpenMenuModal: () => void;
}

export function Header({ onOpenLoginModal, onOpenMenuModal }: HeaderProps) {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { setPages, pages, authenticated, handleLogout, usuario } =
    useContext(AuthContext);
  const {
    searchProduto,
    setSearchProduto,
    setSearchCategoria,
    setSearchOrder,
  } = useContext(BuscaContext);
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  function changePage(page: string) {
    setPages(page);
    console.log(pages);
  }
  useEffect(() => {
    if (!localStorage.getItem("produtos")) setCarrinho([]);
  }, [localStorage.getItem("produtos")]);

  const countCart = () => {
    let contador = 0;

    for (let index = 0; index < carrinho.length; index++) {
      const element = carrinho[index];
      contador += element.quantity;
    }
    setCount(contador);
  };

  useEffect(() => {
    countCart();
  }, [carrinho]);

  return (
    <Container>
      <Content>
        <div className="hamblogo">
          {/* <Burger/> */}
          <img
            className="hamburgerlogo"
            src={hamburgerImg}
            alt="hamburger"
            onClick={onOpenMenuModal}
          />
          <img
            onClick={() => {
              navigate("/");
              setPages("Dashboard");
              setSearchProduto("");
              setSearchCategoria("");
              setSearchOrder("");
            }}
            className="logo"
            src={logoImg}
            alt="Logo"
          />
        </div>
        <div className="lupa">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <input
              type="text"
              placeholder="Procurar Produto"
              value={searchProduto}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchProduto(e.target.value);
                setSearchCategoria("");
              }}
            ></input>
              <img src={lupaImg} alt="lupa" />
          </form>
        
        </div>
        <div className="iconperfil">
          <div
            onClick={() => {
              navigate("/carrinho");
              setPages("Carrinho");
            }}
            className="carrinho"
            style={{ backgroundImage: `url(${carrinhoImg})` }}
          >
            {carrinho.length >= 1 && <p>{count}</p>}
          </div>
          {authenticated ? (
            <>
              <div className="botaoLogout">
                <div className="nome">{usuario.nome}</div>
                <form>
                  <button
                    className="Logout"
                    type="submit"
                    onClick={() => {
                      handleLogout();
                      navigate("/");
                    }}
                  >
                    SAIR
                  </button>
                </form>
              </div>
              <div
                onClick={() => {
                  navigate("/perfil");
                  setPages("Perfil");
                }}
                id="foto-usuario"
                style={{ backgroundImage: `url(${usuario.imagem})` }}
              />
            </>
          ) : (
            <>
            <div className="login" onClick={onOpenLoginModal}>Login</div>
            <img
              className="perfil"
              src={bonecoImg}
              alt="Perfil"
              onClick={onOpenLoginModal}
            />
            </>
          )}
        </div>
      </Content>
    </Container>
  );
}
