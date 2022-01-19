import React, { useContext, useEffect, useRef, useState } from "react";
import "./Form.css";
import axios from "axios";
import fondo  from '../../assets/fondo.jpg';
import { userContext } from '../../context/userContext';
import QueryList from "../QueryList/QueryList";

const Form = () => {
    const {user} = useContext(userContext)
    
    const search_form = useRef()


    const [queries, setQueries] = useState([])

  useEffect(async() => {
    const data= await axios.get("http://localhost:4000/api/queries/",{
        headers: {'access-token': user.token}
        })
    data.data.mensaje?window.alert("Token inválido"):setQueries(data.data)
}, [])


    const  handleSubmit =async event=> {
        event.preventDefault();
        console.log(search_form.current.search.value);
        let query= await axios.post('http://localhost:4000/api/queries/create',
            {           
                url: search_form.current.search.value,
                analysis_result:"physhing",
                id_user:user.id_user
            },{
            headers: {'access-token': user.token}
            })
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
             
        </div>    
    );
};

export default Form;
