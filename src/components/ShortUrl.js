import React from 'react';
import {useState} from "react";
import axios from "axios"
import './page.css'
import Loader from './Loader';


function ShortUrl() {
    const [input,setInput] = useState();
  const [error,setError] = useState();
  const [shortUrl,setShotUrl] = useState();
  const [loader,setLoader] = useState("false");
  const fetchApi = async()=>{
    try{
      setLoader("true");
      if(input){
        const res = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`)
       setLoader("false");
    
          setShotUrl(res.data.result.full_short_link);
      }
      else{
        alert("please enter url")
      }
        
    }
    catch(error){
        setError(error.message);
    }
  }

 const onClickHandle = (()=>{
        fetchApi();
        
 })

  return (
    <>
    
    <div className='body-container'>
    
       <input type="text" id="input-box" value={input} placeholder="Enter url here.. "  onChange={(e) =>{setInput(e.target.value)}} required></input>
        <button  onClick={onClickHandle}>submit</button>
    </div>
    <div className="shor-url-body">
        
    {loader==="true" ? <h2>{error !== "" && error}</h2>:<Loader data={shortUrl}/>
    }

    </div>
    
    </>
    
    
  )
}

export default ShortUrl