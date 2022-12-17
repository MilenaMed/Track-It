import logo from "../img/Logo.png"
import styled from "styled-components"
import { Link } from "react-router-dom"

function Entrar() {
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
                    <BotãoEntrar>
                        <LinkEntrar to="/habitos">
                            Entrar
                        </LinkEntrar>
                    </BotãoEntrar>
                </ConteinerInputs>
                <StyledLink to="/cadastro">
                    Não tem uma conta? Cadastre-se
                </StyledLink>
            </Conteiner>
        </>
    )
}

export default Entrar

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
const LinkEntrar = styled(Link)`
text-decoration: none;
color: #FFFFFF;
`
const StyledLink = styled(Link)`
text-decoration: none;
color: #52B6FF;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 15px;
`
const ConteinerInputs = styled.div`
width: 300px;
display:flex;
gap:5px;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Input = styled.input`
color:#DBDBDB;
width: 300px;
height: 51px;
border: 1px solid #DBDBDB;;
border-radius: 3px;
font-family:'Lexend Deca';
font-size: 18px;
`
const BotãoEntrar = styled.button`
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