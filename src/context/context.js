import { createContext, useState } from "react";

const DataContext = createContext()

const DataProvider = ({children}) => {
    //Estados de inputs de videoForm
    const [nameVideo,setNameVideo] = useState({valor:"", estado:null})
    const [urlImg,setUrlImg] = useState({valor:"", estado:null})
    const [urlVideo,setUrlVideo] = useState({valor:"", estado:null})
    const [categoria,setCategoria] = useState({valor:"", estado:null})
    const [descripcion,setDescripcion] = useState({valor:"", estado:null})

    //Estados de inputs de videoForm
    const [nameCategory,setNameCategory] = useState({valor:"", estado:null})
    const [descripcionCategory,setDescripcionCategory] = useState({valor:"", estado:null})
    const [color,setColor] = useState({valor:"#000000", estado:null})

    //Estados de videos y categorias
    const [video,setVideo] = useState([
        {nombreVideo:"Cuando usar LET, VAR y CONST", categoria:"Front End", urlVid:"https://www.youtube.com/watch?v=PztCEdIJITY", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/PztCEdIJITY/maxresdefault.jpg"}, 
        {nombreVideo:"¿Que es JavaScript?", categoria:"Front End", urlVid:"https://www.youtube.com/watch?v=GJfOSoaXk4s", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/GJfOSoaXk4s/maxresdefault.jpg"}, 
        {nombreVideo:"Equipo Front End", categoria:"Front End", urlVid:"https://www.youtube.com/watch?v=rpvrLaBQwgg", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/rpvrLaBQwgg/maxresdefault.jpg"},
        {nombreVideo:"¿Como un desarrollador Front End usa el figma?", categoria:"Front End", urlVid:"https://www.youtube.com/watch?v=UuAX5azcvDQ", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/UuAX5azcvDQ/maxresdefault.jpg"}, 
        {nombreVideo:"Frameworks de Front End - Edición especial", categoria:"Front End", urlVid:"https://www.youtube.com/watch?v=UNeKzI2WHgQ", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/UNeKzI2WHgQ/maxresdefault.jpg"}, 
        {nombreVideo:"Box Model y Box sizing", categoria:"Front End", urlVid:"https://www.youtube.com/watch?v=ts9qfCKamKg", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/ts9qfCKamKg/maxresdefault.jpg"},
        {nombreVideo:"Spring Framework. ¿Qué es?", categoria:"Back End", urlVid:"https://www.youtube.com/watch?v=t-iqt1b2qqk", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/t-iqt1b2qqk/maxresdefault.jpg"}, 
        {nombreVideo:"¿Qué es SQL y NoSQL?", categoria:"Back End", urlVid:"https://www.youtube.com/watch?v=cLLKVd5CNLc", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/cLLKVd5CNLc/maxresdefault.jpg"}, 
        {nombreVideo:"Simplificando tu código en Java: Conoce los enum", categoria:"Back End", urlVid:"https://www.youtube.com/watch?v=EoPvlE85XAQ", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/EoPvlE85XAQ/maxresdefault.jpg"},
        {nombreVideo:"Banco de Datos MySQL | Contenidos ONE", categoria:"Back End", urlVid:"https://www.youtube.com/watch?v=8J0AoPZMVxA", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/8J0AoPZMVxA/maxresdefault.jpg"}, 
        {nombreVideo:"Back End", categoria:"Back End", urlVid:"https://www.youtube.com/watch?v=Z024LSCMqFk", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/Z024LSCMqFk/maxresdefault.jpg"}, 
        {nombreVideo:"Descomplicando Base de Datos", categoria:"Back End", urlVid:"https://www.youtube.com/watch?v=G1cDRqKuxpg", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/G1cDRqKuxpg/maxresdefault.jpg"},
        {nombreVideo:"¿Qué son las Soft Skills?", categoria:"Innovación y gestión", urlVid:"https://www.youtube.com/watch?v=vhwspfvI52k", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg"}, 
        {nombreVideo:"7 Soft Skills más deseadas por las empresas", categoria:"Innovación y gestión", urlVid:"https://www.youtube.com/watch?v=YhR7Zp8NUzE", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/YhR7Zp8NUzE/maxresdefault.jpg"}, 
        {nombreVideo:"¿Qué son las metodologias ágiles?", categoria:"Innovación y gestión", urlVid:"https://www.youtube.com/watch?v=6N3OkLCfK-0", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/6N3OkLCfK-0/maxresdefault.jpg"},
        {nombreVideo:"Tips para tener concentración en el Home Office", categoria:"Innovación y gestión", urlVid:"https://www.youtube.com/watch?v=_zYbZ5S0VMw", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/_zYbZ5S0VMw/maxresdefault.jpg"}, 
        {nombreVideo:"Marketing personal para programadores", categoria:"Innovación y gestión", urlVid:"https://www.youtube.com/watch?v=PEGmLW-a0h8", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/PEGmLW-a0h8/maxresdefault.jpg"}, 
    {nombreVideo:"¿Cuáles son las Soft Skills y Hard Skills necesarias para trabajar con tecnología?", categoria:"Innovación y gestión", urlVid:"https://www.youtube.com/watch?v=7lnmW8fB0nM", descVid:"descripcion" , urlImg:"https://i.ytimg.com/vi/7lnmW8fB0nM/maxresdefault.jpg"},
    ])

    const [category,setCategory] = useState([
        {nombreCat:"Front End", desc:"Formación Front End de Alura Latam", color:"#6BD1FF", id:1}, 
        {nombreCat:"Back End", desc:"Formación Back End de Alura Latam", color:"#00C86F", id:2}, 
        {nombreCat:"Innovación y gestión", desc:"Formación de Innovación y gestión de Alura Latam", color:"#FFBA05", id:3}
    ])

    const categoryList = () => {
        let data = []
        category.map(({nombreCat}) => data.push({value:nombreCat}))
        return data;
    }

    let data = {
        videoForm: [
            {
                label: "Nombre",
                placeholder: "Ingresar",
                value: nameVideo.valor,
                update: (value, state) => setNameVideo({valor:value, estado:state}),
                error: nameVideo.estado,
                helpText: "Al menos 3 caracteres",
                options: null,
                type: "text",
                name: "nombreVideo",
                required:true,
                minmax: [3,30],
                propTarget: "nombreVideo"
            },
            {
                label: "URl imagen",
                placeholder: "Ingresar",
                value: urlImg.valor,
                update: (value, state) => setUrlImg({valor:value, estado:state}),
                error: urlImg.estado,
                helpText: "Al menos 3 caracteres",
                options: null,
                type: "text",
                name: "urlImagen",
                required:true,
                minmax: [3,60],
                propTarget: "urlImg"
            },
            {
                label: "URL video",
                placeholder: "Ingresar",
                value: urlVideo.valor,
                update: (value, state) => setUrlVideo({valor:value, estado:state}),
                error: urlVideo.estado,
                helpText: "Al menos 3 caracteres",
                options: null,
                type: "text",
                name: "urlVideo",
                required:true,
                minmax: [3,60],
                propTarget: "urlVid"
            }, 
            {
                label: "Categoria",
                placeholder: "Selecciona una categoria",
                value: categoria.valor,
                update: (value, state) => setCategoria({valor:value, estado:state}),
                error: categoria.estado,
                helpText: "Elige una opcion",
                options: [...categoryList()],
                type: "select",
                name: "categoria",
                required:true,
                propTarget: "categoria"
            },
            {
                label: "Descripcion",
                placeholder: "Ingresar",
                value: descripcion.valor,
                update: (value, state) => setDescripcion({valor:value, estado:state}),
                error: descripcion.estado,
                helpText: "Al menos 3 caracteres",
                options: null,
                type: "textarea",
                name: "descripcion",
                required:true,
                minmax: [3,50],
                propTarget: "descVid"
            }
        ],

        categoryForm: [
            {
                label: "Nombre",
                placeholder: "Ingresar",
                value: nameCategory.valor,
                update: (value, state) => setNameCategory({valor:value, estado:state}),
                error: nameCategory.estado,
                helpText: "Al menos 3 caracteres",
                options: null,
                type: "text",
                name: "nombreCategoria",
                required:true,
                minmax: [3,30],
                propTarget: "nombreCat",
                id:1
            },
            {
                label: "Descripcion",
                placeholder: "Ingresar",
                value: descripcionCategory.valor,
                update: (value, state) => setDescripcionCategory({valor:value, estado:state}),
                error: descripcionCategory.estado,
                helpText: "Al menos 3 caracteres",
                options: null,
                type: "textarea",
                name: "descripcionCategoria",
                required:true,
                minmax: [3,50],
                propTarget: "desc",
                id:2
            },
            {
                label: "Color",
                placeholder: null,
                value: color.valor,
                update: (value, state) => setColor({valor:value, estado:state}),
                error: color.estado,
                helpText: "Selecciona un color",
                options: null,
                type: "color",
                name: "color",
                required:true,
                propTarget: "color",
                id:3
            }
        ],

        video: {
            videos: video,
            update: (data) => setVideo(data)
        },
        category: {
            categories: category,
            update: (data) => setCategory(data)
        }
    }

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export { DataProvider }
export default DataContext