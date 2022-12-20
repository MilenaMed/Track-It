import logo from "../img/Logo.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
import axios from "axios";

function Cadastro() {

    const [nomeUsuario, setNome] = useState("");
    const [emailUsuario, setEmail] = useState("");
    const [fotoPerfil, setFoto] = useState("");
    const [senhaUsuario, setSenha] = useState("");
    const navigate = useNavigate();
    const [carregar, setCarregar] = useState(false);

    function passarDados(event) {
        event.preventDefault()
        setCarregar(true);

        const dados = {
            email: "emailUsuario",
            name:" nomeUsuario",
            image:" fotoPerfil",
            password: "senhaUsuario"
        };

        if (emailUsuario.length > 0 && nomeUsuario.length > 0 && fotoPerfil.length > 0) {
            const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
                dados)
            requisicao.then(() => {
                setCarregar(false)
                navigate("/")
            })
            requisicao.catch((erro) => {
                alert(`Verifique se as informações foram digitadas corretamente!${erro}`)
                setCarregar(false)
            })
        }
    };
    return (
        <>
            <Conteiner>
                <img src={logo} alt="logo" />
                <ConteinerInputs>
                    <Input
                        value={emailUsuario}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={carregar}
                        data-test="email-input"
                        id="email"
                        name="email"
                        type="email"
                    />
                    <Input
                        value={senhaUsuario}
                        onChange={(e) => setSenha(e.target.value)}
                        disabled={carregar}
                        data-test="password-input"
                        id="senha"
                        name="senha"
                        type="password"
                    />
                    <Input
                        value={nomeUsuario}
                        onChange={(e) => setNome(e.target.value)}
                        disabled={carregar}
                        data-test="user-name-input"
                        id="name"
                        name="name"
                        type="name"
                    />
                    <Input
                        value={fotoPerfil}
                        onChange={(e) => setFoto(e.target.value)}
                        disabled={carregar}
                        data-test="user-image-input"
                        id="foto"
                        name="foto"
                        type="name"
                    />
                    <BotãoCadastrar data-test="signup-btn" disabled={carregar} onClick={passarDados}>
                        {carregar && <PulseLoader color="#FFFFFF" carregar={carregar} margin={8} size={15} />}
                        {!carregar && "Cadastrar"}
                    </BotãoCadastrar>
                </ConteinerInputs>

                <StyledLink data-test="login-link" to="/">
                    Já tem conta? Faça login!
                </StyledLink>

            </Conteiner>
        </>
    )
}

export default Cadastro;
const Conteiner = styled.div`
width:100%;
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;
img{
    margin-top:70px;
    margin-bottom:30px;
    width:180px;
}
`
const ConteinerInputs = styled.div`
width: 300px;
display:flex;
gap:5px;
justify-content:center;
align-items:center;
flex-direction:column;`


const Input = styled.input`
color:#DBDBDB;
width: 300px;
height: 51px;
border: 1px solid #DBDBDB;;
border-radius: 3px;
font-family:'Lexend Deca';
font-size: 18px;
`
const BotãoCadastrar = styled.button`
width: 300px;
height: 45px;
font-family:'Lexend Deca';
font-weight: 400;
font-size: 20px;
text-align: center;
color: #FFFFFF;
background: #52B6FF;
border-radius: 5px;
border:none;
margin-bottom:30px;

`
const StyledLink = styled(Link)`
text-decoration: none;
color: #52B6FF;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 15px;
text-decoration-line: underline;
`