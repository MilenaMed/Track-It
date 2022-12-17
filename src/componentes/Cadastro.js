import logo from "../img/Logo.png"
import styled from "styled-components"
import { Link } from "react-router-dom"


function Cadastro() {
    return (
        <>

            <Conteiner>
                <img src={logo} alt="logo" />
                <ConteinerInputs>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email"
                    />
                    <Input
                        id="senha"
                        name="senha"
                        type="password"
                        placeholder="senha"
                    />
                     <Input
                        id="name"
                        name="name"
                        type="name"
                        placeholder="nome"
                    />
                     <Input
                        id="foto"
                        name="foto"
                        type="url"
                        placeholder="foto"
                    />
                    <BotãoCadastrar>
                        Cadastrar
                    </BotãoCadastrar>
                </ConteinerInputs>
                
                    <StyledLink to="/">
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