import React, { useState } from 'react';
import TableCsv from '../TableCsv/TableCsv';
import * as XLSX from 'xlsx';
import "./CSVreader.css"
 
const CSVreader=({setData,info})=> {
  // const [columns, setColumns] = useState([]);
  // const [data, setData] = useState([]);
  const [viewerOn, setViewerOn] = useState(false)
 
  // process CSV data
  const processData = dataString => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
 
    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && row.length == headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] == '"')
              d = d.substring(1, d.length - 1);
            if (d[d.length - 1] == '"')
              d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }
 
        // remove the blank rows
        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }
    // prepare columns list from headers
    // const columns = headers.map(c => ({
    //   name: c,
    //   selector: c,
    // }));
    const finalList= list.concat(info)
    setData(finalList);
    // setColumns(columns);
    
  }
 
  // handle file upload
  const handleFileUpload = e => {
    const file = e.target.files[0];
    setViewerOn(true)
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      
      const newdata = data.con
      processData(data);
      
    };
    reader.readAsBinaryString(file);

  }
  
  return (      
    <div className="container-input">
          <input  type="file" name="fileCSV" id="fileCSV" className="inputfile inputfileCSV" accept=".csv,.xlsx,.xls" onChange={handleFileUpload} />
          <label htmlFor="fileCSV">
          <strong>
          <svg xmlns="http://www.w3.org/2000/svg" className="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
          <span className="iborrainputfile" >Importar CSV</span>

          </strong>
          </label>
    </div>
  );
}
export default CSVreader;
