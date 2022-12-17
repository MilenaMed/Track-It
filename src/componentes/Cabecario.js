import styled from "styled-components";
import logo02 from "../img/logoText.svg";

function Cabecario() {
    return (
        <>
            <ConteinerCabecario>
                <img src={logo02} alt="logo" ></img>
                <FotoUsuario>

                </FotoUsuario>
            </ConteinerCabecario>
        </>
    )
}

export default Cabecario

const ConteinerCabecario = styled.div`
position:fixed;
width: 375px;
height: 70px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display:flex;
align-items:center;
justify-content:space-between;
img{
    margin-left:20px;
    width: 97px;
}
`
const FotoUsuario = styled.div`
margin-right:20px;
width: 51px;
height: 51px;
background-image: url(http://pm1.narvii.com/6348/210f5c17e01a5adfb1eb24ec2f06ab8a057e1ce5_00.jpg);
background-size:cover;
border-radius: 98.5px;
`