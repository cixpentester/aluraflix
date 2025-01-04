import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"

const Nav = styled.nav`
    width: 100%;
    height: auto;
    min-height: 50px;
    background-color: ${({theme}) => theme.bg1};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    box-sizing: border-box;
    border-bottom: 2px solid ${({theme}) => theme.primary};
    
    @media screen and (min-width: 768px) {
        &{
            padding: 10px 5px;
        }
    }
`

const Icon = styled(Link)`
    display: flex;
    align-items: center;
`

const IconNav = styled(Icon)`
    margin-left: 30px;
`

const Logo = styled.img`
    max-width: 100%;
    height: 15px;

    @media screen and (min-width: 768px) {
        align-self: center;
        height: 35px;
        margin: auto 0;
    }
`

const Button = styled(Link)`
    border: 2px solid #F5F5F5;
    color: white;
    padding: 10px;
    font-weight: bold;
    border-radius:  4px;
    text-decoration: none;
    
    @media screen and (min-width: 768px) {
        padding: 10px 30px;
    }
`

const ButtonNav = styled(Button)`
    margin-right: 30px;
`

const Header = () => {
    return <Nav>
        <IconNav to={"/"}><Logo src={logo} alt="logo"/></IconNav>
        <ButtonNav to={"/video"}>Nuevo video</ButtonNav>
    </Nav>
}

export default Header