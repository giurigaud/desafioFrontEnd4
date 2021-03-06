import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import LogoCubos from "../../Imagens/logocubos.svg";
import VisorBarra from "../../Imagens/visorcombarra.svg";
import Visor from "../../Imagens/visor.svg";
import { LoginContainer } from "../../App";

function Login(props) {
  const { register, handleSubmit } = useForm();

  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [senhaInvisivel, setSenhaInvisivel] = React.useState(true);

  const { login } = LoginContainer.useContainer();

  return (
    <div className="tela">
      <div className="card">
        <img
          src={LogoCubos}
          alt="logo da cubos academy"
          className="logocubos"
        />
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            login(data.email, data.senha);
          })}
        >
          <div className="email">
            <label className="email">
              E-mail{" "}
              <input
                type="email"
                name="email"
                ref={register}
                value={email}
                className="email"
                placeholder="exemplo@gmail.com"
                onInput={(event) => setEmail(event.target.value)}
              ></input>
            </label>
          </div>
          <div className="senha">
            <label className="senha">
              Senha{" "}
              <div className="visorbarra">
                <input
                  type={senhaInvisivel ? "password" : "text"}
                  name="senha"
                  className="senha"
                  ref={register}
                  value={senha}
                  onInput={(event) => setSenha(event.target.value)}
                />
                <button
                  className="visor"
                  onClick={() => {
                    setSenhaInvisivel(!senhaInvisivel);
                  }}
                >
                  <img
                    className="visorimg"
                    alt="simbolo que ao clicar torna a senha visível ou não"
                    src={senhaInvisivel ? VisorBarra : Visor}
                  />
                </button>
              </div>
            </label>
          </div>

          <a className="esquecisenha" href="a">
            Esqueci minha senha
          </a>
          <button className="button-entrar">Entrar</button>
        </form>
      </div>
      <div className="entrar">
        Não tem uma conta?{" "}
        <a className="link-entrar" href="a">
          Cadastre-se
        </a>
      </div>
    </div>
  );
}

export default Login;
