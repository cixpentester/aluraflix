import { ButtonZone, Button, ButtonClear, ButtonRoute, Form, Title, createInput, FormWrapper, resetInputValues, validateForm } from "../../components/Form"
import { useState, useContext, useEffect } from "react"
import DataContext from "../../context/context"


const VideoForm = () => {
    const [disable,setDisable] = useState(false)
    const { videoForm, video } = useContext(DataContext);
    
    const handleSubmit = (videoForm) => {
        toggleDisable()

        const {videos, update} = video

        if(validateForm(videoForm) === true){
            update([...videos, getNewVideo(videoForm)])
            resetInputValues(videoForm)
            alert("Video agregado")
        }else{
            alert("Ocurrio un error, vuelva a intentar")
        }

        toggleDisable()
    }

    const getNewVideo = (form) => {
        let data = {}

        form.forEach(({value, propTarget}) => {
            data = {
                ...data,
                [propTarget]:value
            }
        })

        return data;
    }

    function toggleDisable(){
        setDisable(!disable)
    }

    useEffect(() => {

        return () => {
            resetInputValues(videoForm)
        }
    }, [])

    return <>
        <FormWrapper>
            <Form onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(videoForm)
                }}
            >
                <Title>Nuevo video</Title>
                { 
                    videoForm.map((input, i) => createInput(input, i, disable)) 
                }

                <ButtonZone>
                    <div><Button disabled={disable}>Guardar</Button> <ButtonClear disabled={disable} form={videoForm}>Limpiar</ButtonClear></div>
                    <div><ButtonRoute route="/category">Nueva categoria</ButtonRoute></div>
                </ButtonZone>
            </Form>
        </FormWrapper>
    </>
}

export default VideoForm