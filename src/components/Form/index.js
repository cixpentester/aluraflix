import styled from "styled-components";
import { Link } from "react-router-dom";

const MainStyled = styled.main`
width: 100%;
    flex: 1;
    background-color: ${({theme}) => theme.bg2};
`

const FormStyled = styled.form`
    width: 90%;
    flex: 1;
    margin: 0 auto;
    @media screen and (min-width: 1920px) {
        &{
            width: 95%;
        }
    }
`

const TitleStyled = styled.div`
    margin-top: 30px;
    width: 100%;
    text-align: center;
    color: white;
`

const FormField = styled.div`
    width: 100%;
    height: auto;
    margin: 48px 0;
    padding-top: 5px;
    background-color: #53585D;
    border-radius:  4px;
    position: relative;
`

const TitleField = styled.label`
    color: lightgrey;
    margin-left: 5px;
    @media screen and (min-width: 1920px) {
        &{
            font-size: 18px;
        }
    }
`

const ErrorMessage = styled.p`
    color: ${({theme}) => theme.error};
    position: absolute;
    bottom: -35px;
    left: 0;
    @media screen and (min-width: 1920px) {
        &{
            font-size: 16px;
        }
    }
`

const InputStyled = styled.input`
    width: 100%;
    padding: 10px 5px;
    background-color: transparent;
    color: lightgrey;
    border: none;
    outline: none;
    border-bottom: 3px solid;
    border-radius: 4px;
    color: whitesmoke;
    /* box-sizing: border-box; */

    &::placeholder{
        color: whitesmoke;
        opacity: 1;
    }

    @media screen and (min-width: 1920px) {
        &{
            font-size: 18px;
        }
    }
`

const TextAreaStyled = styled.textarea`
    width: 100%;
    height: 80px;
    padding: 20px 5px 0 5px;
    margin-bottom: -4px;
    background-color: transparent;
    resize: none;
    border: none;
    border-bottom: 3px solid;
    border-radius: 4px;
    outline: none;
    color: whitesmoke;
    /* box-sizing: border-box; */

    &::placeholder{
        color: whitesmoke;
        opacity: 1;
    }
    @media screen and (min-width: 1920px) {
        &{
            font-size: 18px;
        }
    }
`

const SelectStyled = styled.select`
    width: 100%;
    background-color: transparent;
    padding: 20px 5px 15px 5px;
    border:0;
    border-bottom: 3px solid;
    border-radius:  4px;
    outline: none;
    appearance: none;
    color: whitesmoke;
    /* box-sizing: border-box; */

    &::placeholder{
        opacity: 1;
    }
`

const OptionStyled = styled.option`
    color: whitesmoke;
    background-color: black;
    @media screen and (min-width: 1920px) {
        &{
            font-size: 18px;
        }
    }
`

const ButtonZoneStyled = styled.div`
    width: 100%;
    height: auto;
    display: flex;  
    justify-content:space-between;
`

const ButtonStyled = styled.button`
    background-color: ${({theme}) => theme.primary};
    padding: 10px 30px;
    font-weight: 700;
    border-radius:  4px;
    cursor: pointer;
    color: white;
    border: none;
    margin-bottom: 40px;
    @media screen and (min-width: 1920px) {
        &{
            font-size: 18px;
        }
    }
`

const ButtonClearStyled = styled(ButtonStyled)`
    background-color: white;
    color: black;
    @media screen and (min-width: 768px) {
        &{
            margin-left: 20px;
        }
    }
`

const ButtonNavStyled = styled(Link)`
    background-color: ${({theme}) => theme.primary};
    color: white;
    cursor: pointer;
    padding: 10px 30px;
    font-weight: normal;
    border-radius:  4px;
    display: block;
    margin-bottom: 40px;
    text-decoration: none;
    @media screen and (min-width: 768px) {
        &{
            display: inline-block;
        }   
    }
    @media screen and (min-width: 1920px) {
        &{
            font-size: 18px;
        }
    }
`


//Methods
const handleFocusColor = (border) => {
    return border === "green" ? "green" : border === "transparent" ? "cyan" : "#C62828";
}

const handleBlurColor = (minLength, input, update) => {
    //verificar estado
    let valueVerified = input.value.length >= minLength ?   true : false ;
    update(input.value, !valueVerified)

    let border = input.style.borderColor;
    
    return border === "green" || input.value.length >= minLength ? "green" : border === "rgb(198, 40, 40)" ? "#C62828" : "transparent";
}

export const validateForm = (inputs) => {
    let valid = true;
    inputs.forEach(({error}) => {
        return error !== true ? valid = false : valid = true
    })
    return !valid;
}

export const resetInputValues = (form) => {
    form.map(({ update, type }) => update(type === "color" ? "#000000" : "", null))
}

export const createInput = (input, i, disable) => {
    const Inputs = {
        text: <Input config={input} unique={i} key={i} disabled={disable} />,
        color: <Input config={input} unique={i} key={i} disabled={disable} />,
        textarea: <TextArea config={input} unique={i} key={i} disabled={disable} />,
        select: <Dropdown config={input} unique={i} key={i} disabled={disable} />
    }
    return Inputs[input.type] || <></>
}


//Inputs
export const Input = ({config, unique, disabled}) => {
    const {label, placeholder, helpText, error, value, update, required, type, minmax, name} = config;

    return <>
        <FormField>
            <TitleField htmlFor={name+unique}>{label}</TitleField>
            <InputStyled 
                id={name+unique} 
                placeholder={placeholder} 
                style={{borderColor:error===true ? "#C62828" :  "transparent", height:type==="color" ? "50px" : "auto" }} 
                onFocus={(e) => e.target.style.borderColor = handleFocusColor(e.target.style.borderColor)} 
                onBlur={(e) => e.target.style.borderColor = handleBlurColor(type==="color"? 0 : minmax[0], e.target, update)}
                value={value}
                type={type}
                min={type==="color"? 0 : minmax[0]}
                max={type==="color"? 10 : minmax[1]}
                onChange={(e) => {
                    update(e.target.value, null)
                }}
                required={required}
                disabled={disabled}
            />
            {
                error === true && <ErrorMessage>{helpText}</ErrorMessage> 
            }
        </FormField>
    </>
}

export const TextArea = ({config, unique, disabled}) => {
    const {label, placeholder, helpText, error, value, update, required, minmax, name} = config;

    return <>
        <FormField>
            <TitleField htmlFor={name+unique}>{label}</TitleField>
            <TextAreaStyled 
                id={name+unique} 
                placeholder={placeholder} 
                style={{borderColor:error===true ? "#C62828" : "transparent"}} 
                value={value} 
                min={minmax[0]}
                max={minmax[1]}
                onFocus={(e) => e.target.style.borderColor = handleFocusColor(e.target.style.borderColor)} 
                onBlur={(e) => e.target.style.borderColor = handleBlurColor(minmax[0], e.target, update)}
                onChange={(e) => update(e.target.value, null)}
                required={required}
                disabled={disabled}
            >   
            </TextAreaStyled>
            {
                error === true && <ErrorMessage>{helpText}</ErrorMessage> 
            }
        </FormField>
    </>
}

export const Dropdown = ({config, unique, disabled}) => {
    const {options, placeholder, label, error, helpText, value, update, required, name} = config;

    return <>
        <FormField >
            <TitleField htmlFor={name+unique}>{label}</TitleField>
            <SelectStyled 
                id={name+unique} 
                style={{borderColor:error===true ? "#C62828" : "transparent"}} 
                value={value} 
                onFocus={(e) => e.target.style.borderColor = handleFocusColor(e.target.style.borderColor)} 
                onBlur={(e) => e.target.style.borderColor = handleBlurColor(0, e.target, update)}
                onChange={(e) => update(e.target.value, null)}
                required={required}
                disabled={disabled}
            >

                <OptionStyled hidden key={unique+"firstoption"}>{placeholder}</OptionStyled>
                {
                    options.map((option, index) => <OptionStyled key={unique+index} value={option.value}>{option.value}</OptionStyled>)
                }

            </SelectStyled>
            {
                error === true && <ErrorMessage>{helpText}</ErrorMessage> 
            }
        </FormField>
    </>
}

export const Button = ({children, disabled}) => <ButtonStyled disabled={disabled} type="submit">{children}</ButtonStyled>

export const ButtonClear = ({children, form, disabled}) => <ButtonClearStyled disabled={disabled} type="button" onClick={(e) => {
    e.preventDefault()
    form.map(({update}) => update("", 0))
}}>{children}</ButtonClearStyled>

export const ButtonRoute = ({children, route}) => <ButtonNavStyled to={route}>{children}</ButtonNavStyled>


//Elements
export const Title = ({children}) => <TitleStyled><h1>{children}</h1></TitleStyled>

export const FormWrapper = ({children}) => <MainStyled>{children}</MainStyled>

export const Form = ({children, onSubmit}) => <FormStyled onSubmit={onSubmit}>{children}</FormStyled>

export const ButtonZone = ({children}) => <ButtonZoneStyled>{children}</ButtonZoneStyled>