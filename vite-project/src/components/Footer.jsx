import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import './css/styles.css'

function Footer(){
    const date= new Date();
    const year= date.getFullYear();

    return (
        <div className="footer">
            <div className="footer-child">
            <button id="github-button" onClick={()=>{window.open('https://github.com/Rahil16','_blank')}} title="GitHub Link"><GitHubIcon id="github-icon"></GitHubIcon></button>
            <div>
            <p className="footer-item">Created By Rahil Tanna .</p>
            <p className="footer-item copyright">Copyright ©{year}.</p>
            </div>
            </div>
        </div>

    )
}   

export default Footer;