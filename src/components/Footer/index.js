import styled from "styled-components"
import logo from "../../assets/img/logo.png"

const FooterDiv = styled.footer`
    width: 100%;
    height: auto;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.bg2};
    padding: 10px 0 25px 0;
    border-top: 2px solid ${({theme}) => theme.primary};
`

const Logo = styled.img`
    height: 35px;
`

const Footer = () => {
    return <FooterDiv><Logo src={logo} alt="logo"/></FooterDiv>
}

export default Footer