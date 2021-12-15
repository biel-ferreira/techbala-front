import { GlobalStyle } from "./styles/global";
import { SignInModal } from "./components/SignInModal";
import { Perfil } from "./components/Perfil";
import { CarrinhoCompras } from "./components/CarrinhoCompras";
import { Header } from "./components/Header";
import { MenuModal } from "./components/MenuModal";
import { UpdateModal } from './components/UpdateModal'
import { Dashboard } from "./components/Dashboard";
import { useState, useContext } from "react";
import { useModals } from "./hooks/useModals";
import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CadastrarProduto } from "./components/CadastrarProduto";
import { Pagamento } from "./components/Pagamento";



export function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const { setIsSignUp } = useModals();
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const { setOpenMenu, setOpenUpdate } = useModals();
  const { authenticated, pages } = useContext(AuthContext);

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleOpenUpdateModal() {
    setIsUpdateModalOpen(true);
  }
  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
    setIsSignUp(false);
  }
  function handleBackLoginModal() {
    setIsSignUp(false);
  }
  function handleOpenMenuModal() {
    setIsMenuModalOpen(true);
    console.log(pages)
  }
  function handleCloseMenuModal() {
    setIsMenuModalOpen(false);
    setOpenMenu(false);
  }
  function handleCloseUpdateModal() {
    setIsUpdateModalOpen(false);
    setOpenUpdate(false);
  }
  function SemAutenticacao() {
    return (
      <Navigate to='/' />
    )
  }
  return (
    <>
      <BrowserRouter>
        <Header
          onOpenLoginModal={handleOpenLoginModal}
          onOpenMenuModal={handleOpenMenuModal}
        />
        <Routes>

          {authenticated && <Route path="/pagamento" element={<Pagamento />} />}
          {authenticated && <Route path="/perfil" element={<Perfil onOpenUpdateModal={handleOpenUpdateModal} />} />}

          <Route path="/" element={<Dashboard />} />
          <Route path="/carrinho" element={<CarrinhoCompras onOpenLoginModal={handleOpenLoginModal}/>} />
          <Route path="/cadastrar-produto" element={<CadastrarProduto />} />

        </Routes>


        <SignInModal
          isOpen={isLoginModalOpen}
          onRequestClose={handleCloseLoginModal}
          onBackLoginModal={handleBackLoginModal}
        />

        <UpdateModal
          isOpen={isUpdateModalOpen}
          onRequestClose={handleCloseUpdateModal}
        />
        <MenuModal
          isOpen={isMenuModalOpen}
          onRequestClose={handleCloseMenuModal}
        />
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}
