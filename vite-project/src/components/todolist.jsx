import React, { useState } from "react";
import './css/styles.css';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';

function Todolist(){
    const [inputtext,setinputtext]=useState("");
    const [errMsg,seterrMsg]=useState("")

    function dothis(e){
        const newValue=e.target.value;
        setinputtext(newValue);
    }

    console.log(inputtext);
    const sendDataToBackend = async(e) => {
        if (inputtext.trim() ===""){
            e.preventDefault();
            seterrMsg(<span>* The task cannot be empty</span> )
        } else{
        await axios.post('http://localhost:5000/api/data', { inputtext })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
            
            setinputtext("")
        }
    };

    return(
    <div className="todolist-inpt">
            
            <form className="addline" autoComplete="off" onSubmit={sendDataToBackend}>
            <input placeholder="Enter your task here..." type="text" onChange={dothis} name="Todoinpt" value={inputtext} className="input-task"></input>
            <button type="submit" className="add-button"><AddIcon></AddIcon></button>
            </form>
            <p className="err-msg">{errMsg}</p>
            
    </div>
    )
}

export default Todolist;