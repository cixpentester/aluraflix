import styled from "styled-components"
import Category from "../../components/Category"
import hero from "../../assets/img/hero.png"
import heroimg from "../../assets/img/imagen-hero.png"

const HomeMain = styled.main`
    background-color: rgba(0, 0, 0, 0.6);
    flex-grow: 1;
    height: 100%;
`

const Hero = styled.section`
    width: 100%;
    height: 75dvh;
    background-color: rgba(0, 18, 51, 0.56);
    background-image: url(${({back}) => back});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
`

const Greetings = styled.div`
    width: 90%;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        &{
            width: 40%;
            margin: unset;
        }
    }
`

const HeroTitle = styled.h2`
    color: white;
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
        &{
            font-size: 32px;
        }
    }
    @media screen and (min-width: 1920px) {
        &{
            font-size: 50px;
        }
    }
`

const HeroDesc = styled.p`
    color: white;
    @media screen and (min-width: 768px) {
        &{
            font-size: 18px;
        }
    }
    @media screen and (min-width: 1920px) {
        &{
            font-size: 28px;
        }
    }
`

const Deco = styled.img`
    display: none;
    aspect-ratio: 16/9;
    width: 30%;
    border: 3px solid ${({theme}) => theme.primary};

    @media screen and (min-width: 768px) {
        &{
            display: block;
        }
    }
    @media screen and (min-width: 1920px) {
        &{
            border-width: 5px;
        }
    }
`

const Home = () => {
    return <HomeMain>
        <Hero back={hero}>
            <Greetings>
                <HeroTitle>Challenge React</HeroTitle>
                <HeroDesc>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</HeroDesc>
            </Greetings>
            <Deco src={heroimg} alt="Imagen de Hero"/>
        </Hero>

        <Category>
        </Category>
    </HomeMain>
}

export default Home