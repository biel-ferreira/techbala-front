import React, { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

interface IUser {
  nome?: string;
  email?: string;
  endereco?: {
    rua?: string;
    casanum?: string;
    complemento?: string;
    cep?: string;
    estado?: string;
    cidade?: string;
    bairro?: string;
  };
  telefone?: {
    fixo?: string;
    celular?: string;
  };
  imagem?: string;
  pedidos?: [];
  carrinho?: [],
  ativo?: boolean;
}

type AuthProps = {
  erroLogin: string;
  setErroLogin: React.Dispatch<React.SetStateAction<string>>;
  erroCadastro: string;
  setErroCadastro: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  pages: string;
  setPages: React.Dispatch<React.SetStateAction<string>>;
  usuario: IUser;
  novoUsuario: IUser;
  setNovoUsuario: React.Dispatch<React.SetStateAction<IUser>>;
  setUsuario: React.Dispatch<React.SetStateAction<IUser>>;
  email: string;
  senha: string;
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setSenha: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: (onRequestClose: () => void) => Promise<void>;
  handleCadastro: (onRequestClose: () => void) => Promise<void>;
  handleLogout: () => void;
  handleUpdate: (onRequestClose: () => void) => Promise<void>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

const DEFAULT_VALUE = {
  loading: true,
  authenticated: false,
  pages: "Dashboard",
  erroLogin: "",
  erroCadastro: "",
  email: "",
  senha: "",
  token: "",
  nome: "",
  novoUsuario: {} as IUser,
  usuario: {} as IUser,
  setErroLogin: () => { },
  setErroCadastro: () => { },
  setToken: () => { },
  setPages: () => { },
  setNome: () => { },
  setLoading: () => { },
  setAuthenticated: () => { },
  setSenha: () => { },
  setEmail: () => { },
  setUsuario: () => { },
  setNovoUsuario: () => { },
  handleLogin: () => new Promise<void>((resolve, reject) => { }),
  handleCadastro: () => new Promise<void>((resolve, reject) => { }),
  handleLogout: () => { },
  handleUpdate: () => new Promise<void>((resolve, reject) => { }),
};
export const AuthContext = createContext<AuthProps>(DEFAULT_VALUE);

const AuthProvider: React.FC = ({ children }) => {

  const [loading, setLoading] = useState(DEFAULT_VALUE.loading);
  const [email, setEmail] = useState(DEFAULT_VALUE.email);
  const [senha, setSenha] = useState(DEFAULT_VALUE.senha);
  const [authenticated, setAuthenticated] = useState(
    DEFAULT_VALUE.authenticated
  );
  const [pages, setPages] = useState(DEFAULT_VALUE.pages);
  const [nome, setNome] = useState(DEFAULT_VALUE.nome);
  const [usuario, setUsuario] = useState(DEFAULT_VALUE.usuario);
  const [novoUsuario, setNovoUsuario] = useState(DEFAULT_VALUE.novoUsuario);
  const [token, setToken] = useState(DEFAULT_VALUE.token);
  const [erroLogin, setErroLogin] = useState(DEFAULT_VALUE.erroLogin);
  const [erroCadastro, setErroCadastro] = useState(DEFAULT_VALUE.erroCadastro);

  const fetchUser = async (token: string) => {
    await api
      .get("/auth/me", {
        headers: { Authorization: `Bearer ${token.replace(/"/g, "")}` },
      })
      .then((response) => {
        console.log(response.data);
        setUsuario(response.data);
      });
  };

  useEffect(() => {
    console.log(usuario);
  }, [usuario]);

  useEffect(() => {
    if (token) {
      fetchUser(token);
      console.log("seila");
    }
  }, [token]);

  useEffect(() => {
    const reToken = localStorage.getItem("token");
    if (reToken) setToken(reToken.replace(/"/g, ""));
  }, [token]);

  useEffect(() => {
    const checkToken = async () => {
      const tokenBrowser = localStorage.getItem("token");
      if (tokenBrowser) {
        setAuthenticated(true);
        await fetchUser(tokenBrowser);
      }
      setLoading(false);
    };
    checkToken();
  }, [pages]);

  async function handleLogin(onRequestClose: () => void) {
    console.log(email);
    console.log(senha);

    try {
      const { data } = await api.post("/auth/login", {
        email: email,
        senha: senha,
      });
      if (data.token) {
        onRequestClose();
      }
      const usuario = await api.get("/auth/me", {
        headers: { Authorization: `Bearer ${data.token} ` },
      });

      localStorage.setItem("token", JSON.stringify(data.token));
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setToken(data.token);
      await setAuthenticated(true);
    } catch (error) {

      setErroLogin("E-mail ou senha incorretos! ");
      console.log(error);
    }
    console.log(token);
    // if (usuario.carrinho) {
    //   setCarrinho(usuario.carrinho)
    // }
  }
  async function handleCadastro(onRequestClose: () => void) {
    console.log(nome);
    console.log(email);
    console.log(senha);
    try {
      const register = await api.post("auth/newuser", {
        nome: nome.toUpperCase(),
        email: email,
        senha: senha,
      });
      console.log(register);
      const { data } = await api.post("/auth/login", {
        email: email,
        senha: senha,
      });
      if (data.token) {
        onRequestClose();
      }
      const usuario = await api.get("/auth/me", {
        headers: { Authorization: `Bearer ${data.token}` },
      });
      console.log(usuario);
      localStorage.setItem("token", JSON.stringify(data.token));
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

      await setAuthenticated(true);
    } catch (error) {
      setErroCadastro(
        "Uma conta com o e-mail digitado aparentemente já existe"
      );
      console.log(error);
    }
  }
  async function handleUpdate(onRequestClose: () => void) {
    console.log(novoUsuario)
    const token = localStorage.getItem("token");
    const update = await api.put(
      "auth/edituser",
      {
        nome: novoUsuario.nome?.toUpperCase(),

        rua: novoUsuario.endereco?.rua?.toUpperCase(),
        casanum: novoUsuario.endereco?.casanum,
        complemento: novoUsuario.endereco?.complemento?.toUpperCase(),
        cep: novoUsuario.endereco?.cep,
        estado: novoUsuario.endereco?.estado?.toUpperCase(),
        cidade: novoUsuario.endereco?.cidade?.toUpperCase(),
        bairro: novoUsuario.endereco?.bairro?.toUpperCase(),

        fixo: novoUsuario.telefone?.fixo,
        celular: novoUsuario.telefone?.celular,
      },
      { headers: { Authorization: `Bearer ${token?.replace(/"/g, "")}` } }
    );
    if (token) fetchUser(token);
    onRequestClose();
  }
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("produtos");
    localStorage.removeItem("loged");
    setEmail("")
    setSenha("")
    setUsuario({})
    setAuthenticated(false);
  }
  return (
    <AuthContext.Provider
      value={{
        erroCadastro,
        setErroCadastro,
        handleUpdate,
        novoUsuario,
        setNovoUsuario,
        erroLogin,
        setErroLogin,
        handleCadastro,
        nome,
        setNome,
        setUsuario,
        token,
        setToken,
        handleLogout,
        handleLogin,
        loading,
        setLoading,
        authenticated,
        setAuthenticated,
        pages,
        setPages,
        usuario,
        senha,
        email,
        setEmail,
        setSenha,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
