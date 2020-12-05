import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";
import LogoCubos from "../../Imagens/logocubos.svg";
import VisorBarra from "../../Imagens/visorcombarra.svg";
import Visor from "../../Imagens/visor.svg";

function Cadastro() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [senhaInvisivel, setSenhaInvisivel] = React.useState(true);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="tela">
      <div className="card">
        <img
          src={LogoCubos}
          alt="logo da cubos academy"
          className="logocubos"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="nome">
            <label className="nome">
              Nome{" "}
              <input
                type="text"
                name="nome"
                ref={register}
                value={nome}
                className="nome"
                onInput={(event) => setNome(event.target.value)}
              ></input>
            </label>
          </div>
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
                  ref={register}
                  className="senha"
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

          <button className="button-entrar">Criar conta</button>
        </form>
      </div>
      <div className="entrar">
        Já possui uma conta?{" "}
        <a className="link-entrar" href="a">
          Acesse agora!
        </a>
      </div>
    </div>
  );
}

export default Cadastro;
