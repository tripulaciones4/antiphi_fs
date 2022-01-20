import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userContext } from '../../context/userContext';
import "./User.css";
import viewIcon from '../../assets/viewIcon.jpg';
import documentIcon from '../../assets/documentIcon.jpg';
import searchIcon from '../../assets/searchIcon.jpg';



const User = ({dataUser}) => {

  const {user} = useContext(userContext)
  
  const {email,name,last_name,id_user,department} =dataUser
  const [lastQueryTime, setLastQueryTime] = useState("/");
  const [queriesNumb, setQueriesNumb] = useState();
  

  const time=(createdAt)=>{

    let result
      let now= new Date()
      let endTime= new Date(createdAt)
    let difference = now.getTime() - endTime.getTime(); // This will give difference in milliseconds
    let inMinutes = Math.round(difference / 60000) 
    let inHours= Math.round(inMinutes / 60)
    let inDays= Math.round(inHours / 24)
  
    inMinutes<60?
        result=`${inMinutes}min.`
        :inHours<24?
            result=`${inHours}h.`
            : result=`${inDays}d.`
  
    return result 
  }


  useEffect(async() => {
    try{
      
      const data= await axios.get(`http://localhost:4000/api/queries/user/${id_user}`,
            {
               headers: {'access-token': user.token}
              })
              console.log(data);
              setQueriesNumb(data.data.length||0)
      if(data.data.length)  {      
      const lastQuery= data.data.sort(function (a, b) {
                if (a.createdAt < b.createdAt) {
                  return 1;
                }
                if (a.createdAt > b.createdAt) {
                  return -1;
                }
                return 0;
      })[0];
              
      setLastQueryTime(time(lastQuery.createdAt));}
              
  }catch(err){
    console.log(err)
  }
}, [])
      
    return(
      <div className="cardUser-container">
        
        <div className="div1">
          <h5 className="cardUser-name" >{name} {last_name}</h5>
          <p className="cardUser-email">{email}</p>
        </div>

        <div className="div2">

          <div className="div-time">
            <img className="viewIcon" src={viewIcon} alt="viewIcon" />
            <p className="cardUser-time">{lastQueryTime}</p>
          </div>

          <div className="div-num" >
            <img className="searchtIcon" src={searchIcon} alt="searchIcon" />
            <p className="cardUser-num">{queriesNumb}</p>
          </div>

          <div className="div-departament">
            <img className="documentIcon" src={documentIcon} alt="documentIcon" />
            <p className="cardUser-departament">{department}</p>
          </div>
          
          
          
        </div>

      </div>);
};

export default User;
