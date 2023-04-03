import React, { useState,useEffect } from 'react';


function Loader(props) {
    let data = props.data
    const [items,setItems]=useState(data);

     let   handleDelete=()=>{
        setItems(items.filter(()=>{ return -1 }));

    }
    
  return (
    <>
    
    <div>
        <div className='table-body'>
        <table>
         <tr>
           <th>url Short Result</th>
         </tr>
         <tr>
           <td>{!!data ? <div><span>${data}</span><button onClick={()=>handleDelete()} >delete</button></div>:null}</td>
         </tr>        
        </table>    
    </div>
    
    </div>
    
    </>
  )

    }
export default Loader