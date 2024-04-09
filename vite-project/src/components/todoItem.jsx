import React,{useEffect,useState} from "react";
import Axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';


const isChecked=false

function TodoItem(){
    const [tododata,settodoData]=useState("");
    const[dbCheck,setdbCheck]=useState();

  const getData=async()=>{
    const reponse= await Axios.get("http://localhost:5000/gettododata");
    settodoData(reponse.data);
  }

useEffect(()=>{
  getData()
},[]);
const newData=Array.from(tododata);


async function handleChange(e){
  if (e.target.checked) {  
    console.log("checkbox is checked");
    const stringedData=e.target.id;
    const jsonObject=JSON.parse(stringedData);
    const finalValue=jsonObject.data;
    
    await Axios.post("http://localhost:5000/api/check", {isChecked:true, finalValue});
  } else {
    console.log("checkbox is not checked");
    const stringedData=e.target.id;
    const jsonObject=JSON.parse(stringedData);
    const finalValue=jsonObject.data;

    await Axios.post("http://localhost:5000/api/check", {isChecked,finalValue});
  }
}


async function getCheckData(){
  const reponse2=await Axios.get("http://localhost:5000/api/completed");
  const newCheck=reponse2.data;

  setdbCheck(newCheck);
  
}
useEffect(()=>{
  getCheckData()
},[]);

async function deleteTask(e){
  window.location.reload(false);
  const deleteTaskName=e.target.id;
  await Axios.post("http://localhost:5000/deletetask",{deleteTodo:deleteTaskName});
}
    return(
        <div>
            <ul className="todoitems">
                {newData.map((item,index) =>
                <li className="todoitem-list" key={index}>
                <div className="check-text">
                <input onChange={handleChange} id={JSON.stringify(item)} value={dbCheck} defaultChecked={item.checked ? true : false} className="checkbox" type="checkbox" />
                <span className="item-text">{item.data}</span>
                
                </div>
                <div className="delete-button-container">
                <button type="button" id={item.data} onClick={deleteTask} className="delete-button" >
                  <DeleteIcon id="delete-icon"/>
                </button>
                </div>
                </li>
                )}              
            </ul>
        </div>
    );
}

export default TodoItem;