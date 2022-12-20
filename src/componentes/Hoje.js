import styled from "styled-components";
import icon from "../img/icon.svg"

function Hoje() {
    return (
        <>
            <ConteinerHoje>
                <h1 data-test="today">Segunda, 18/12</h1>
                <p data-test="today-counter">Nenhum hábito concluído ainda</p>
                <ConteinerHabitoHoje>
                    <HabitoHoje data-test="today-habit-container">
                        <DadosHAbito>
                            <p data-test="today-habit-name">Ler um livro</p>
                            <h1 data-test="today-habit-sequence"> Sequencia atual: 3 dias</h1>
                            <h1 data-test="today-habit-record"> Seu Recorde: 5 dias</h1>
                        </DadosHAbito>
                        <Icon data-test="today-habit-check-btn"><img src={icon} alt="checkIcon"/></Icon>
                    </HabitoHoje>
                </ConteinerHabitoHoje>
            </ConteinerHoje>
        </>
    )
}
export default Hoje;

const ConteinerHoje = styled.div`
height:540px;
padding-top:100px;
padding-left:10px;
padding-right:10px;
background-color:#E5E5E5;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 18px;
color: #BABABA;
display:flex;
flex-direction:column;
gap:10px;
h1{
font-size: 22px;
color: #126BA5;
}
`
const HabitoHoje = styled.div`
color: #666666;
background: #FFFFFF;
border-radius: 5px;
width: 340px;
height: 94px;
display:flex;
justify-content:space-between;
align-items:center;

`
const DadosHAbito = styled.div`
margin-left:10px;
color: #666666;
display:flex;
flex-direction:column;
align-items:flex-start;
p{
    margin-bottom:10px;
}
h1{
    font-size: 12px;
    color: #666666;
}
`
const Icon = styled.div`
width: 69px;
height: 69px;
background: #EBEBEB;
margin-right:15px;
border: 1px solid #E7E7E7;
border-radius: 5px;
display:flex;
justify-content:center;
align-items:center;
img{
    height:28px;
}
`
const ConteinerHabitoHoje = styled.div`
margin-top:20px;
display:flex;

flex-direction:column;
gap:15px;`