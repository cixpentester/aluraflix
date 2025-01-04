import { ButtonRoute, ButtonZone } from "../../components/Form"
import styled from "styled-components"

const Main = styled.main`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const NotFoundMessage = styled.span`
    margin: 10px 0 15px 0;
    color: white;
`

const NotFound = () => {
    return <>
        <Main>
            <NotFoundMessage>Esta página no existe</NotFoundMessage>
            <ButtonZone>
                <>
                    <ButtonRoute route="/">Inicio</ButtonRoute>
                </>
            </ButtonZone>
        </Main>
    </>
}

export default NotFound