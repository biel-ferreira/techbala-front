import Modal from "react-modal";
import { AuthContext } from "../../context/AuthContext";
import { ModalStyled, Container } from "../UpdateModal/styles";
import { useModals } from "../../hooks/useModals";
import voltarImg from "../../assets/Voltar.svg";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface UpdateModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function UpdateModal({ isOpen, onRequestClose }: UpdateModalProps) {
  const navigate = useNavigate();
  const { setNovoUsuario, novoUsuario, setUsuario, handleUpdate } =
    useContext(AuthContext);
  const fixo = useRef<HTMLInputElement>(null);
  const CEP = useRef<HTMLInputElement>(null);
  const Estado = useRef<HTMLInputElement>(null);
  const celular = useRef<HTMLInputElement>(null);

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
        <div className="containerAll">
        <button onClick={onRequestClose} className="voltar" type="button">
          <img src={voltarImg} alt="voltar" />
        </button>
        <div className="titulo">
          <h1>Alterar ou Adicionar Informaçoes </h1>
        </div>
        <div className="contentOne">
          <div className="contentTwo">
            <div className="nome">

            <input
              type="text"
              placeholder="Nome"
              onChange={(e) =>
                setNovoUsuario({ ...novoUsuario, nome: e.target.value })
              }
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
                </div>
            <h3>Endereço</h3>
            <div className="ruanum">
              <div className="rua">
                <input
                  type="text"
                  placeholder="Rua"
                  onChange={(e) =>
                    setNovoUsuario({
                      ...novoUsuario,
                      endereco: {
                        ...novoUsuario.endereco,
                        rua: e.target.value,
                      },
                    })
                  }
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
              </div>
              <div className="num">
                <input
                  type="text"
                  placeholder="Numero"
                  maxLength={5}
                  onChange={(e) =>
                    setNovoUsuario({
                      ...novoUsuario,
                      endereco: {
                        ...novoUsuario.endereco,
                        casanum: e.target.value,
                      },
                    })
                  }
                  onKeyDown={(e) => {
                    if (
                      /\D/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
            </div>
            <div className="comp-estado">
              <div className="comp">
                <input
                  type="text"
                  placeholder="Complemento"
                  onChange={(e) =>
                    setNovoUsuario({
                      ...novoUsuario,
                      endereco: {
                        ...novoUsuario.endereco,
                        complemento: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="estado">
                <select
                  defaultValue=""
                  name="estados-brasil"
                  onChange={(e) =>
                    setNovoUsuario({
                      ...novoUsuario,
                      endereco: {
                        ...novoUsuario.endereco,
                        estado: e.target.value,
                      },
                    })
                  }
                >
                  <option disabled={true} className="estado" value="">
                    Selecione o Estado
                  </option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>
            </div>
            <div className="cidade-cep">
              <div className="cidade">
                <input
                  type="text"
                  placeholder="Cidade"
                  onChange={(e) =>
                    setNovoUsuario({
                      ...novoUsuario,
                      endereco: {
                        ...novoUsuario.endereco,
                        cidade: e.target.value,
                      },
                    })
                  }
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
              </div>
              <div className="cep">
                <input
                  type="text"
                  placeholder="CEP"
                  ref={CEP}
                  onChange={(e) =>
                    setNovoUsuario({
                      ...novoUsuario,
                      endereco: {
                        ...novoUsuario.endereco,
                        cep: e.target.value,
                      },
                    })
                  }
                  onKeyDown={(e) => {
                    if (
                      /\D/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      e.preventDefault();
                    }
                    if (
                      CEP.current &&
                      CEP.current.value.length === 9 &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      e.preventDefault();
                    }
                    if (
                      CEP.current &&
                      CEP.current.value.length === 5 &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      CEP.current.value += "-";
                    }
                  }}
                />
              </div>
            </div>
            <div className="bairro">

            <input
              type="text"
              className="bairro"
              placeholder="Bairro"
              onChange={(e) =>
                setNovoUsuario({
                  ...novoUsuario,
                  endereco: { ...novoUsuario.endereco, bairro: e.target.value },
                })
              }
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
                </div>

            <h3>Telefone</h3>
            <div className="fixo-celular">
              <div className="fixo">
                <input
                  type="text"
                  placeholder="Fixo"
                  onChange={(e) =>
                    setNovoUsuario({
                      ...novoUsuario,
                      telefone: {
                        ...novoUsuario.telefone,
                        fixo: e.target.value,
                      },
                    })
                  }
                  ref={fixo}
                  onKeyDown={(e) => {
                    if (
                      /\D/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      e.preventDefault();
                    }
                    if (
                      fixo.current &&
                      fixo.current.value.length === 13 &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      e.preventDefault();
                    }
                    if (
                      fixo.current &&
                      fixo.current.value.length === 0 &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      fixo.current.value += "(";
                    }
                    if (
                      fixo.current &&
                      fixo.current.value.length === 3 &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      fixo.current.value += ")";
                    }
                    if (
                      fixo.current &&
                      fixo.current.value.length === 8 &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      fixo.current.value += "-";
                    }
                  }}
                />
              </div>
              <div className="celular">
                <input
                  type="text"
                  placeholder="Celular"
                  onChange={(e) =>
                    setNovoUsuario({
                      ...novoUsuario,
                      telefone: {
                        ...novoUsuario.telefone,
                        celular: e.target.value,
                      },
                    })
                  }
                  ref={celular}
                  onKeyDown={(e) => {
                    if (
                      /\D/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      e.preventDefault();
                    }
                    if (
                      celular.current &&
                      celular.current.value.length === 14 &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      e.preventDefault();
                    }
                    if (
                      celular.current &&
                      celular.current.value.length === 0 &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      celular.current.value += "(";
                    }
                    if (
                      celular.current &&
                      celular.current.value.length === 3 &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      celular.current.value += ")";
                    }
                    if (
                      celular.current &&
                      celular.current.value.length === 3 &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      celular.current.value += ")";
                    }
                    if (
                      celular.current &&
                      celular.current.value.length === 9 &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      celular.current.value += "-";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="contentThree">
          <button
            type="submit"
            onClick={() => {
              handleUpdate(onRequestClose);
              navigate("/perfil");
            }}
          >
            Concluir Alteraçoes
          </button>
        </div>
        </div>
      </Container>
      <ModalStyled />
    </Modal>
  );
}
