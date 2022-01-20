import axios from "axios";
import React from "react";
import "./QueryList.css";
import viewIcon  from '../../assets/viewIcon.jpg';
import notificationIcon from '../../assets/notificationIcon.jpg';

const QueryList = ({queries,type}) => {
  
  const sortLast=(arr)=>{
    let sorted=arr.sort(function (a, b) {
      if (a.createdAt < b.createdAt) {
          return 1;
      }
      if (a.createdAt > b.createdAt) {
          return -1;
      }
      return 0;
    });
    return sorted
};

const removeDuplicate= (arr)=>{
  const duplicateOut= arr.map(e=>{
      return [JSON.stringify(e), e]
      }
    )
    let querysMapArr = new Map(duplicateOut); // Pares de clave y valor
    let noRepeat = [...querysMapArr.values()]; // Conversión a un array
  return noRepeat
};


const sortPopular=(array)=>{
    let newArray=array.map((query)=>{
      const{url,analysis_result } =query
      const many =array.filter(query=>url===query.url).length
    const query_recount= {
      url,
      many,
      analysis_result
    }
  return query_recount
  })
  const duplicateOut= removeDuplicate(newArray)
    
  let sorted=duplicateOut.sort(function (a, b) {
    if (a.many < b.many) {
        return 1;
    }
    if (a.many > b.many) {
        return -1;
    }
    return 0;
  });
  return sorted
}

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



  return (
  <div className="list-containerHome">
    {type==="lastQueries" ? (sortLast(queries)).slice(0,5).map((element,i)=>
    <div className="cardList-Home" key={i}>

      <div className="container-totalTimeView">
        <img className="viewIcon" src={viewIcon} alt="viewIcon" />
        <h4 className="totalTimeView">Hace {time(element.createdAt)}</h4>
      </div>

      <p className="elemUrl">{element.url}</p>
    </div>)
    :null}



    {type==="mostPopular"?
    (sortPopular(queries)).slice(0,5).map((element,i)=>
    <div className="cardList-Home" key={i}>
      <div className="container-totalQueries">
        <img className="notificationIcon" src={notificationIcon} alt="notificationIcon" />
        <h4 className="numberQueries">{element.many} {element.many>1?"consultas":"consulta"}.</h4>
      </div>
      <p className="elemUrl">{element.url}</p>
    </div>)
    :null}

    {type==="lastQueriesCompany"? 
    sortLast(queries).map((element,i,queries)=>
    <div key={i}>
      <h4>{element.url}</h4>
      <p>{element.user.email}</p>
      <p>Hace {time(element.createdAt)}</p>
      <p>{queries.filter(e=>e.url===element.url).length}</p>
      <p>{element.user.department}</p>
    </div>
    ):null}

  </div>);
};

export default QueryList;
