import React from "react";
import "./App.css";
import Login from "./Paginas/Login/index";
import Cadastro from "./Paginas/Cadastro/index";
import { createContainer } from "unstated-next";
import fazerRequisicaoComBody from "../src/utils/fazerrequisicaocombody";
export const ContextoDoToken = React.createContext();

function useLogin(estadoInicial = null) {
  const [token, setToken] = React.useState(localStorage.getItem("token"));

  React.useEffect(() => {
    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");
  }, [token]);

  function login(email, senha) {
    fazerRequisicaoComBody(`${process.env.REACT_APP_API_URL}/auth`, "POST", {
      email,
      senha,
    })
      .then((res) => res.json())
      .then((respostaJson) => {
        const novoToken = respostaJson.dados.token;
        setToken(novoToken);
      });
  }
  function logout() {
    setToken(null);
  }

  return { token, login, logout };
}

export const LoginContainer = createContainer(useLogin);

function App() {
  const { token, login, logout } = LoginContainer.useContainer();

  return (
    <LoginContainer.Provider>
      <div className="App">
        <Login></Login>
      </div>
    </LoginContainer.Provider>
  );
}

export default App;
