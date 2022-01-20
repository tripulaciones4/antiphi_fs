import React, { useContext, useEffect, useRef, useState } from "react";
import "./Form.css";
import fondo  from '../../assets/fondo.jpg';
import { userContext } from '../../context/userContext';
import axios from "axios";
import QueryList from "../QueryList/QueryList";
import PopUp from "../PopUp/PopUp";
import popUpIconG  from '../../assets/img/CheckPopUp.jpg';
import popUpIconB from '../../assets/img/XPopUp.jpg'
import Ellipsis from '@bit/joshk.react-spinners-css.ellipsis';



const Form = () => {
    


    const {user} = useContext(userContext)
    
    const search_form = useRef()

    
    const [loading, setLoading] = useState(false);
    const [queries, setQueries] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const [lastUrl, setLastUrl] = useState("");
    const [messagePop, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [iconPop, setIconPop] = useState();

  useEffect(async() => {
    const data= await axios.get("http://localhost:4000/api/queries/",{
        headers: {'access-token': user.token}
        })
    data.data.mensaje?window.alert("Token inválido"):setQueries(data.data)
}, [popUp===true])


    const  handleSubmit =async event=> {
        event.preventDefault();
        setLoading(true)
        const url= search_form.current.search.value
        if(url.length<5||url.split(".").length<2){
            search_form.current.search.value=""
            setIconPop(popUpIconB)
            setTitle("Formato URL inválido")
            setMessage("La url introducida no es válida, debe tener un mínimo 5 caractéres")
            setPopUp(true)
            setLoading(false)
            return;
        }
        setLastUrl(url)
                

        const queryDataMachine= await axios.get(`https://desafiotripulaciones4.pythonanywhere.com?url=${url}`)
        
        const resDataMachine = await queryDataMachine.data
        resDataMachine.result==="phishing"?setIconPop(popUpIconB)
                                            :setIconPop(popUpIconG)
        resDataMachine.result==="phishing"?setTitle("No se recomienda introducir datos en este URL")
                                            :setTitle("Este URL no es sospechoso")
        resDataMachine.result==="phishing"?setMessage("Te recomendamos reportar esta URL para hacer crecer la base de datos y seguir evitando las ciberamenazas")
                                            :setMessage("Continua navegando con precaución para así evitar posibles ciberamenzas")

        const query= {           
            url: resDataMachine.url,
            analysis_result: resDataMachine.result,
            id_user: user.id_user
        }

        await axios.post('http://localhost:4000/api/queries/create', query,
        {
            headers: {'access-token': user.token}
        })
        search_form.current.search.value=""
        setLoading(false)
        setPopUp(true)
                        
    };
   


    
    return (
        <div>  
            
            <form ref={search_form} className="form-search" style={{ backgroundImage: `url(${fondo})`}}>

                <label className="label-search" htmlFor="search">Don't take the bait!</label>                    
                <div className="search-container">
                    <input className="input-search" type="text" name="search" placeholder="Buscar URL" />                    
                    <button className="btn-search" onClick={handleSubmit} type="button">Buscar</button>
                </div>

            </form>

            
            <div className="list-container-global">

                <div className="div-container-listHome">
               
                    <div className="list-containerHome" >
                        <h2 className="list-titleHome">Busquedas más recientes</h2>
                        <QueryList className="containerListItems" key={1} type={"lastQueries"} queries={queries}/>
                    </div>

                    <div className="list-containerHome" >
                        <h2 className="list-titleHome">Más Buscadas</h2>
                    
                        <QueryList className="containerListItems" key={2} type={"mostPopular"} queries={queries}/>
                        
                    </div>

                </div>
            {loading?<Ellipsis color="#00B9AD" size={400} style={{position:"fixed"}} />:null}
            

            </div>
            {popUp? <PopUp close={()=>{setPopUp(false);setTitle("");setMessage("");setLastUrl("");setIconPop("")}} url={lastUrl} img={iconPop} title={title} message={messagePop} analysis={iconPop===popUpIconG?"legitimate":"phishing"}/>
            :null}
        
        </div>    
    );
};

export default Form;
