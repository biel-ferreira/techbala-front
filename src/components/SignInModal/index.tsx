import Modal from "react-modal";
import { ContainerCadastro, ContainerLogin, ModalStyled } from "../SignInModal/styles";
import closeImg from "../../assets/Vector.svg";
import voltarImg from '../../assets/Voltar.svg'
import { useModals } from "../../hooks/useModals";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";



interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onBackLoginModal: () => void;
  ariaLabel?: string
}

export function SignInModal({ isOpen, onRequestClose, onBackLoginModal}: LoginModalProps) {
  const nomeRestrict = useRef<HTMLInputElement>(null)
  const { isSignUp, setIsSignUp } = useModals();
  const {handleLogin, setSenha, setEmail, setNome, handleCadastro, erroLogin, erroCadastro} = useContext(AuthContext);
  
  function handleSignUp() {
    setIsSignUp(!isSignUp);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      closeTimeoutMS={500}
      ariaHideApp={false}
    >
      {!isSignUp ? (
        <ContainerLogin onSubmit={(e) => (e.preventDefault())}>
          <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <img src={closeImg} alt="sair" />
          </button>
          <h2>Fazer Login</h2>
          
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" />
          <input onChange={(e) => setSenha(e.target.value)} placeholder="Senha" type="password" />
          <div className="rememberdiv">
            <div className="divlist">
              <input className="remember" type="checkbox"></input>
              <p>Lembrar-me</p>
            </div>
            <p>Esqueci Minha senha</p>
          </div>
          
          <button type="submit" onClick={() => handleLogin(onRequestClose)}>Entrar</button>
          <div className="error">
          <span>{erroLogin}</span>
          </div>
          <div className="callregister">
            Nao tem Conta ?<p className="free">E de graça</p>
            <br></br>
            <button className="link" onClick={handleSignUp}>
              Cadastre-se
            </button>
          </div>
        </ContainerLogin>
      ) : (
        <ContainerCadastro onSubmit={(e)=>(e.preventDefault())}>
          <button
            type="button"
            onClick={onBackLoginModal}
            className="react-modal-close"
          >
            <img src={voltarImg} alt="voltar" />
          </button>
          <h2>Cadastro</h2>
          <div className="descricaoCadastro">
            Preencha os dados abaixo para começar.
          </div>
          <input className="nome" onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome Completo" ref={nomeRestrict}
                        onKeyDown={(e) => {
                            if (/\d/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                                e.preventDefault();
                            }
                        }}  />
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-MAIL" />
          <input onChange={(e) => setSenha(e.target.value)} placeholder="SENHA" type="password" minLength={8}/>
          <span>{erroCadastro}</span>
          <button type="submit" onClick={()=> handleCadastro(onRequestClose)}>Concluir Cadastro</button>
        </ContainerCadastro>
      )}
      <ModalStyled />
    </Modal>
  );
}

