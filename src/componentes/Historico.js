import styled from "styled-components";

function Historico() {
    return (
        <>
            <ConteinerHistorico>
                <h1>Histórico</h1>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </ConteinerHistorico>
        </>
    )
}
export default Historico;

const ConteinerHistorico = styled.div`
height:540px;
padding-top:100px;
padding-left:10px;
padding-right:10px;
background-color:#E5E5E5;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 18px;
color: #666666;
display:flex;
flex-direction:column;
gap:10px;
h1{
font-size: 22px;
color: #126BA5;
}
`