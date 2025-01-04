import { useContext } from "react"
import styled from "styled-components"
import DataContext from "../../context/context"
import ImgFail from "../../assets/img/not-found.png"
import helpers from "../../helpers"

const CategoryMain = styled.section`
    width: 90%;
    height: auto;
    margin: 0 auto 45px auto;
    position: relative;
`

const Head = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 35px;

    &>h2{
        color: white;
    }
    
    @media (min-width: 768px) {
        flex-direction: unset;
        align-items: center;
    
        &>h2{
            padding: 10px;
            margin-right: 10px;
            border-radius: 5px;
        }
    }
`

const SliderTitle = styled.h2`
    background-color: ${({backColor}) => backColor};
    padding: 10px;
    border-radius: 4px;
    @media screen and (min-width: 1920px) {
        &{
            font-size: 36px;
        }
    }
`

const Description = styled.span`
    margin-top: 10px;
    color: ${({theme}) => theme.light};
    @media screen and (min-width: 1920px) {
        &{
            font-size: 24px;
        }
    }
`

const StyledWrapper = styled.div`
    width: 100%;
    position: relative;
`

const Slider = styled.div`
    overflow-x: scroll;
    white-space: nowrap;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    transition: left 0.5s ease;
    display: flex;
    column-gap: 20px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Item = styled.img`
    width: 95%;
    margin: 10px 0 0 10px;
    aspect-ratio: 16/9;
    scroll-snap-align: center;
    border: 3px solid transparent;
    border-color: ${({color}) => color};
    box-sizing: border-box;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        width: 48%;
        margin: 10px 0 0 0;
    }
    @media screen and (min-width: 1024px) {
        width: 33%;
    }
    @media screen and (min-width:1920px){
        border-width: 5px;
    }
`

const Next = styled.span`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 65%;
    right: -10px;
    background-color: ${({theme}) => theme.primary};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    @media screen and (min-width: 768px) {
        &{
            top: 55%;
            width: 50px;
            height: 50px;
            font-size: 24px;
            right: -24px;
        }
    }
    @media screen and (min-width: 1920px) {
        &{
            width: 70px;
            height: 70px;
            font-size: 32px;
            right: -30px;
        }
    }
`

const Prev = styled(Next)`
    left: -10px;
    @media screen and (min-width: 768px) {
        &{
            left: -24px;
        }
    }
    @media screen and (min-width: 1920px) {
        &{
            left: -30px;
        }
    }
`


const Category = () => {
    const {category, video} = useContext(DataContext)

    let cateData = [...category.categories]

    const sliderRef = []

    const NextScroll = (index) => {
        updateScroll(index, 1)
    }

    const PrevScroll = (index) => {
        updateScroll(index, -1)
    }

    const updateScroll = (index, scrollDirection) => {
        //Aumentando o disminuyendo scroll
        let screenWidth = window.innerWidth;
        let scrollPercentage = screenWidth >= 1024 ? 33 : screenWidth >= 768 ? 48 : 90;  
        let scrollValue = (sliderRef[index].offsetWidth * scrollPercentage) / 100;
        sliderRef[index].scrollLeft += (scrollValue  * scrollDirection)
    }

    return <CategoryMain>
        {
            //Insertando categoria
            cateData.map(({nombreCat, color, desc}, indexCat) => {
                return video.videos.some(({categoria}) => categoria === nombreCat) === true && 
                    <StyledWrapper key={indexCat}>
                        <Head>
                            <SliderTitle backColor={color}>{ nombreCat }</SliderTitle>
                            <Description>{ desc }</Description>
                        </Head>

                        <Slider ref={(ref) => sliderRef[indexCat]=ref}>
                        {
                            video.videos.map(({categoria, urlImg, urlVid}, indexVid) => {
                                return categoria === nombreCat && 
                                <Item onError={(e) => e.target.src=ImgFail} src={urlImg} alt="video" color={color} key={indexVid} onClick={() => helpers.openInNewTab(urlVid)}/>
                            })
                        }
                        </Slider>
                        
                        <Next onClick={() => NextScroll(indexCat)}><i className='bx bx-right-arrow-alt' ></i></Next>
                        <Prev onClick={() => PrevScroll(indexCat)}><i className='bx bx-left-arrow-alt'></i></Prev>
                    </StyledWrapper>
            })
        }
    </CategoryMain>
}

export default Category