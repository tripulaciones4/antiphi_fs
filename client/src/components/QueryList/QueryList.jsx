import React from "react";

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
  const removeDuplicate= newArray.map(query=>{
    return [JSON.stringify(query), query]
  });
  let querysMapArr = new Map(removeDuplicate); // Pares de clave y valor
  let noRepeat = [...querysMapArr.values()]; // Conversión a un array
  
  let sorted=noRepeat.sort(function (a, b) {
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
  <div>
    {type==="lastQueries"?
    sortLast(queries).map((element,i)=>
    <div key={i}>
      <h4>Hace {time(element.createdAt)}</h4>
      <p>{element.url}</p>
    </div>)
    :null}



    {type==="mostPopular"?
    sortPopular(queries).map((element,i)=>
    <div key={i}>
      <h4>{element.many} {element.many>1?"consultas":"consulta"}.</h4>
      <p>{element.url}</p>
    </div>)
    :null}

  </div>);
};

export default QueryList;
