import { ButtonZone, Button, ButtonClear, Form, Title, createInput, resetInputValues, FormWrapper, validateForm  } from "../../components/Form"
import { useState, useContext, useEffect, Fragment } from "react"
import DataContext from "../../context/context"
import styled from "styled-components"
import { Link } from "react-router-dom"
import helpers from "../../helpers"


const Table = styled.table`
    width: 100%;
    background-color: transparent;
    border-collapse: collapse;
    margin-bottom: 20px;
    outline: 3px solid #2A7AE4;
    border: none; 
`

const Row = styled.tr`
    border: none;
`

const Head = styled.th`
    text-align: left;
    background-color: transparent;
    color: white;
    border: 3px solid #2A7AE4;
    border-top: 0;
    padding: 5px;
    font-size: 20px;

    @media screen and (max-width: 650px) {
        &{
            display: none;
        }
    }
    @media screen and (min-width: 1920px) {
        &{
            font-size: 24px;
        }
    }
`

const Cell = styled.td`
    background-color: transparent;
    padding: 5px;
    color: lightgray;
    border: 3px solid black;

    @media screen and (max-width: 650px) {
        &{
            display: block;
        }

        &::before{
            content: '${({cellName}) => cellName}: ';
            font-weight: 700;
            padding-right: 10px;
            color: white;
            text-decoration: none;
        }
    }
    @media screen and (min-width: 1920px) {
        &{
            font-size: 20px;
        }
    }
`
const LinkStyled = styled(Link)`
    text-decoration: none;
    color: lightgrey;
`

const LabelAction = styled.span`
    cursor: pointer;
`


const CategoryForm = () => {
    const [disable,setDisable] = useState(false)
    const { categoryForm, category } = useContext(DataContext);

    const handleSubmit = (categoryForm) => {
        toggleDisable()

        const {categories, update} = category

        if(validateForm(categoryForm) === true){
            update([...categories, getNewCategory(categoryForm)])
            resetInputValues(categoryForm)
            alert("Categoria agregada")
        }else{
            alert("Ocurrio un error, vuelva a intentar")
        }

        toggleDisable()
    }

    const getNewCategory = (form) => {
        let data = {}

        form.forEach(({value, propTarget}) => {
            data = {
                ...data,
                [propTarget]:value
            }
        })

        //generando ID unica
        data.id = helpers.getNewId()

        return data;
    }

    function toggleDisable(){
        setDisable(!disable)
    }

    const removeCategory = (idSel) => {
        let remove = window.confirm("¿Quieres eliminar esta categoria?")
        if(remove){
            const {categories, update} = category;
            for (let index = 0; index < categories.length; index++) {
                const {id} = categories[index];
                if(id === idSel){
                    let data = categories.filter(({id}) => id !== idSel)
                    update(data)
                    alert("Categoria eliminada")
                    break;
                }
            }
        }
    }

    useEffect(() => {

        return () => {
            resetInputValues(categoryForm)
        }
    }, [])

    return <>
        <FormWrapper>
            <Form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(categoryForm)
            }}>
                <Title>Nueva categoria</Title>

                {
                    categoryForm.map((input, i) => createInput(input, i, disable))
                }

                <ButtonZone>
                    <div><Button disabled={disable}>Guardar</Button> <ButtonClear disabled={disable} form={categoryForm}>Limpiar</ButtonClear></div>
                </ButtonZone>

                <Table>
                    <thead>
                        <Row>
                            <Head style={{borderLeft:0}}>
                                Nombre
                            </Head>
                            <Head>
                                Descripcion
                            </Head>
                            <Head>
                                Editar
                            </Head>
                            <Head style={{borderRight:0}}>
                                Remover
                            </Head>
                        </Row>
                    </thead>
                    <tbody>
                        {
                            category.categories.map(({nombreCat, desc, id}, i) => {
                                let removingBorderBottom = {}
                                if(i===(category.categories.length - 1)){removingBorderBottom = {borderBottom:0}}

                                return <Fragment key={i}>
                                    <Row key={id}>
                                        <Cell style={{borderLeft:0, ...removingBorderBottom}} cellName="Nombre">
                                            {
                                                nombreCat
                                            }
                                        </Cell>
                                        <Cell style={{...removingBorderBottom}} cellName="Descripcion">
                                            {
                                                desc
                                            }
                                        </Cell>
                                        <Cell style={{...removingBorderBottom}} cellName="Editar">
                                            <LinkStyled to={"/category-edit/"+id}>Editar</LinkStyled>
                                        </Cell>
                                        <Cell style={{borderRight:0, ...removingBorderBottom}} cellName="Remover">
                                            <LabelAction onClick={(() => removeCategory(id))}>Remover</LabelAction>
                                        </Cell>
                                    </Row>
                                </Fragment>
                            })
                        }
                    </tbody>
                </Table>
            </Form>
        </FormWrapper>
    </>
}

export default CategoryForm