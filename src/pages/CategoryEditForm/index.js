import { ButtonZone, Button, ButtonClear, Form, Title, createInput, resetInputValues, FormWrapper, validateForm  } from "../../components/Form"
import { useState, useContext, useEffect } from "react"
import DataContext from "../../context/context"
import { useParams } from "react-router-dom"


const settingNewCategory = (categories, idSel, dataUpdated, video) => {
    let data = []
    categories.map((category) => {
        const {id} = category
        if(id===idSel){
            const {nombreCat, desc, color} = dataUpdated;
            data.push({nombreCat, desc, color, id: idSel})
            return updateCategoryNameOnVideos(nombreCat, video, category.nombreCat)
        }else{
            const {nombreCat, desc, color} = category;
            return data.push({nombreCat, desc, color, id})
        }
    })
    return data;
}

const getFormData = (form) => {
    let data = {}
    form.forEach(({value, propTarget}) => {
        data = {
            ...data,
            [propTarget]:value
        }
    })
    return data;
}

const updateCategoryNameOnVideos = (nombreNuevo, video, nombreAnterior) => {
    const {videos,update} = video;
    let data = videos.map(({nombreVideo, categoria, urlVid, urlImg, descVid}) => categoria === nombreAnterior ? {
        nombreVideo,
        categoria:nombreNuevo,
        urlVid,
        descVid,
        urlImg
    } : {
        nombreVideo,
        categoria,
        urlVid,
        descVid,
        urlImg
    })
    update(data)
}

const fillingInputs = (inputList, nombre, desc, color) => {
    inputList.map(({ update, name }) => {
        const actions = {
            nombreCategoria: nombre,
            descripcionCategoria: desc,
            color: color
        }

        return update(actions[name], false)
    })
}


const CategoryEditForm = () => {
    const [disable,setDisable] = useState(true)
    const {video, category, categoryForm} = useContext(DataContext)

    const {id} = useParams()

    const updatingCategory = () => {
        toggleDisable()

        const {categories,update} = category;

        if(validateForm(categoryForm) === true){
            let data = updatedCategoryList(categories)
            update(data)
            resetInputValues(categoryForm)
            alert("Categoria actualizada")
        }else{
            alert("Ha ocurrido un error, vuelva a intentar")
        }

        toggleDisable()
    }

    const updatedCategoryList = (categories) => {
        const dataUpdated = getFormData(categoryForm);
        let data = settingNewCategory(categories, Number(id), dataUpdated, video);
        return data;
    }

    const settingValueToInputs = (idSel) => {
        let {nombreCat, desc, color} = category.categories.find(({id}) => id === idSel)

        resetInputValues(categoryForm)
        
        fillingInputs(categoryForm, nombreCat, desc, color)
    }

    function toggleDisable(){
        setDisable(!disable)
    }

    const handleSubmit = () => {
        updatingCategory()
    }

    useEffect(() => {
        settingValueToInputs(Number(id))
        toggleDisable()

        return () => {
            resetInputValues(categoryForm)
        }
    }, [])

    return <>
        <FormWrapper>
            <Form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <Title>Editar categoria</Title>

                {
                    categoryForm.map((input, i) => createInput(input, i, disable))
                }

                <ButtonZone>
                    <div><Button>Guardar</Button> <ButtonClear form={categoryForm}>Limpiar</ButtonClear></div>
                </ButtonZone>
            </Form>
        </FormWrapper>
    </>
}

export default CategoryEditForm