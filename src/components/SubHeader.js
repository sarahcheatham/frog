import React from "react";
import '../App.css';

const SubHeader = (props)=>{
    return (
        <div className="subheader" id={props.id}>{props.text}</div>
    )
}
export default SubHeader;