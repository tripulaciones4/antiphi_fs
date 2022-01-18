import React, { useContext, useRef } from "react";
import "./Form.css";
import axios from "axios";


import Header from "../Header/Header";
import Searches from "../Searches/Searches";
import fondo  from '../../assets/fondo.jpeg';
import { userContext } from '../../context/userContext';



const Form = () => {
    const {user} = useContext(userContext)

    const search_form = useRef()
    const  handleSubmit =async event=> {
        event.preventDefault();
        console.log(search_form.current.search.value);
        let query= await axios.post('http://localhost:4000/api/queries/create',
            {           
                url: search_form.current.search.value,
                analysis_result:"physhing",
                id_user:1
            },{
            headers: {'access-token': user.token}
            })
        console.log(query)
                        
    };
    
    return (
        <div>   
            <div><Header /></div>

            <form ref={search_form} className="form-search" style={{ backgroundImage: `url(${fondo})` }}>
                <label className="label-search" htmlFor="search">Don't take the bait!</label>                    
                <div className="search-container">
                    <input className="input-search" type="text" name="search" placeholder="Buscar URL" />                    
                    <button className="btn-search" onClick={handleSubmit} type="button">Buscar</button>
                </div>

            </form>

            <div><Searches /></div>
        </div>     
    );
};

export default Form;
