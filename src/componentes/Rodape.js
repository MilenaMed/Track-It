import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Rodape() {
    return (
        <>
            <ConteinerRodape>
                <Content>
                    <StyledLink to="/habitos">Hábitos</StyledLink>
                    <Link to="/hoje">
                        <div>
                            <CircularProgressbar
                                text="Hoje"
                                background
                                backgroundPadding={6}
                                styles={buildStyles({
                                    backgroundColor: "#52B6FF",
                                    textColor: "#ffffff",
                                    pathColor: "#ffffff",
                                    trailColor: "transparent",
                                })}
                            />
                        </div>
                    </Link>
                    <StyledLink to="/historico">Histórico</StyledLink>
                </Content>
            </ConteinerRodape>
        </>
    )
}

export default Rodape

const ConteinerRodape = styled.div`
font-family: 'Lexend Deca';
bottom:0;
position:fixed;
width: 100%;
height: 70px;
background: #FFFFFF;
justify-content:space-around;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  div {
    width: 80px;
    height: 100%;
    display: block;
    margin-top: -45px;
  }
`
const StyledLink = styled(Link)`
  font-size: 18px;
  color: #52B6FF;
  text-decoration: none;
  margin-left:30px;
  margin-right:30px;
`
