import React,{useState,useEffect} from "react";
import Axios from "axios";

function Quote(){
    const [data,setData]=useState("");

  const getData=async()=>{
    const reponse= await Axios.get("http://localhost:5000/getData");
    setData(reponse.data);
   
  }

  useEffect(()=>{
    getData()
  },[]);

  let quote=data.quote;
  let author=data.author;

  return(
    <div className="totd">
        <p className="quote">{quote}</p>
        <p className="author">-{author}</p>
    </div>)

}

export default Quote;
