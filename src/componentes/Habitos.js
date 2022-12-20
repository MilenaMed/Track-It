import styled from "styled-components";
import adicionar from "../img/adicionar.svg"

function Habitos() {
    const dias = ["S", "T", "Q", "Q", "S", "S", "D"]
    return (
        <>
            <ConteinerHabitos>
                <Conteiner>
                    <h1>Meus hábitos</h1>
                    <BotaoAddHAbito data-test="habit-create-btn">
                        <img src={adicionar} alt="IconAdd" />
                    </BotaoAddHAbito>
                </Conteiner>
                <AddHabito data-test="habit-create-container">
                    <Input
                        data-test="habit-name-input"
                        id="habito"
                        name="habito"
                        type="name"
                        placeholder="nome do hábito"
                    />
                    <ConteinerDias>
                        {dias.map((dia) => (
                            <BotãoDia data-test="habit-day">
                                {dia}
                            </BotãoDia>
                        ))}
                    </ConteinerDias>
                    <ConterinerBotões>
                        <CancelarBotão data-test="habit-create-cancel-btn">Cancelar</CancelarBotão>
                        <SalvarBotão data-test="habit-create-save-btn" >Salvar</SalvarBotão>
                    </ConterinerBotões>
                </AddHabito>
                Você não possui nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </ConteinerHabitos>
        </>
    )
}

export default Habitos

const AddHabito = styled.div`
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
align-self:center;
flex-direction:column;
align-items:center;
`
const ConteinerDias = styled.div`
margin-top:10px;
align-self:flex-start;
margin-left:19px;
display:flex;
gap:5px;
;`
const ConterinerBotões = styled.div`
padding:20px;
display:flex;
align-self:flex-end;
gap:20px;
`
const BotãoDia = styled.button`
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
color: #DBDBDB;
`
const CancelarBotão = styled.button`
color: #52B6FF;
background: #FFFFFF;
font-weight: 400;
font-size: 16px;
border:none;
`
const SalvarBotão = styled.button`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
border:none;
font-weight: 400;
font-size: 16px;
color: #FFFFFF;
`
const Input = styled.input`
margin-top:15px;
color:#DBDBDB;
width: 300px;
height: 51px;
border: 1px solid #DBDBDB;;
border-radius: 3px;
font-family:'Lexend Deca';
font-size: 18px;
`

const BotaoAddHAbito = styled.button`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4px;
border:none;
display:flex;
align-items:center;
justify-content:center;
img{
    width: 16px;
}
`
const Conteiner = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
h1{
    font-size: 22px;
    color: #126BA5;
    }
`
const ConteinerHabitos = styled.div`
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
`