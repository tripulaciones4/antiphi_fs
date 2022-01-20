import React, { useContext, useEffect, useRef, useState } from "react";
import "./Form.css";
import fondo  from '../../assets/fondo.jpg';
import { userContext } from '../../context/userContext';
import axios from "axios";
import QueryList from "../QueryList/QueryList";
import PopUp from "../PopUp/PopUp";
import popUpIconG  from '../../assets/img/CheckPopUp.jpg';
import popUpIconB from '../../assets/img/XPopUp.jpg'

const Form = () => {

    const {user} = useContext(userContext)
    
    const search_form = useRef()


    const [queries, setQueries] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const [lastUrl, setLastUrl] = useState("");
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [iconPop, setIconPop] = useState();

  useEffect(async() => {
    const data= await axios.get("http://localhost:4000/api/queries/",{
        headers: {'access-token': user.token}
        })
    data.data.mensaje?window.alert("Token inválido"):setQueries(data.data)
}, [])


    const  handleSubmit =async event=> {
        event.preventDefault();
        const url= search_form.current.search.value
        setLastUrl(url)
        const queryDataMachine= await axios.get(`https://desafiotripulaciones4.pythonanywhere.com?url=${url}`)
        
        const resDataMachine = queryDataMachine.data
        resDataMachine.result==="phishing"?setIconPop(popUpIconB)
                                            :setIconPop(popUpIconG)
        resDataMachine.result==="phishing"?setTitle("No se recomienda introducir datos en este URL")
                                            :setTitle("Este URL no es sospechoso")
        resDataMachine.result==="phishing"?setMessage("Te recomendamos reportar esta URL para hacer crecer la base de datos y seguir evitando las ciberamenazas")
                                            :setMessage("Continua navegando con precaución para así evitar posibles ciberamenzas")

        const query= await axios.post('http://localhost:4000/api/queries/create',
            {           
                url: resDataMachine.url,
                analysis_result: resDataMachine.result,
                id_user: user.id_user
            },{
            headers: {'access-token': user.token}
            })
        setPopUp(true)
        console.log(query)
                        
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

            </div>
            {popUp? <PopUp close={()=>{setPopUp(false);setTitle("");setMessage("");setLastUrl("");setIconPop("")}} url={lastUrl} img={iconPop} title={title} message={message} />
            :null}
        </div>    
    );
};

export default Form;
