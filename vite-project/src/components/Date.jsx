import React from "react";
import './css/styles.css';

function DatenDay(){
    const date = new Date();
    
    let todaysDate=date.getDate()
    
    let month = date.toLocaleString('default', { month: 'long' });
    let day=date.toLocaleString('default',{weekday:'long'})
    let year=date.getFullYear()
    return (
    <div className="datenday">
    <h3 className="date">
    {todaysDate + " " + month +" "+ year}
    </h3>
    <h3 className="day">{day}</h3>
    </div>)
}

export default DatenDay;