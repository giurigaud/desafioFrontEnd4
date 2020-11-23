import React from "react";
import { useForm } from 'react-hook-form';
import './index.css';
import LogoCubos from "../../Imagens/logocubos.svg"
import VisorBarra from "../../Imagens/visorcombarra.svg"
import Visor from "../../Imagens/visor.svg"


function Login() {
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [senhaInvisivel, setSenhaInvisivel] = React.useState(true)


    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="tela">
            <div className="card">
                <img src={LogoCubos}></img>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="email">
                        <label className="email">
                            E-mail{" "}
                            <input type="email" name="email" ref={register} value={email} className="email" placeholder="exemplo@gmail.com" onInput={(event) => setEmail(event.target.value)} ></input>
                        </label>
                    </div>
                    <div className="senha">
                        <label className="senha">
                            Senha{" "}
                            <div className="visorbarra">
                                <input type={senhaInvisivel === true ? "password" : "text"} name="senha" ref={register} className="senha" value={senha} onInput={(event) => setSenha(event.target.value)}></input>
                                <button className="visor" onClick={() => {
                                    if (senhaInvisivel === true) {
                                        setSenhaInvisivel(false)
                                    }
                                    else {
                                        setSenhaInvisivel(true);
                                    }
                                }}> <img className="visorimg" src={senhaInvisivel === true ? VisorBarra : Visor}></img> </button>

                            </div>

                        </label>

                    </div>

                    <a className="esquecisenha" href="a">Esqueci minha senha</a>
                    <button className="button-entrar">Entrar</button>
                </form>
            </div>
            <div className="entrar">Não tem uma conta? <a className="link-entrar" href="a">Cadastre-se</a></div>

        </div >

    )

}

export default Login;