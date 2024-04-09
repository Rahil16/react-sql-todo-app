import React from "react";
import './css/styles.css';
import AddTaskIcon from '@mui/icons-material/AddTask';

function Navbar(){
    return(
        <div className="parent-div">
        <div className="child-div">
        <ul className="nav-container" style={{listStyleType:"none"}}>
            <li className="Navbar-li" id="title" onClick={()=>{window.location.reload(false)}}><AddTaskIcon className="logo"></AddTaskIcon>Daily ToDo</li>
        </ul>
        </div>
        </div>
    )
}

export default Navbar;