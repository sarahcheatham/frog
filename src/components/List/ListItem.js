import React from "react";
import '../../App.css';
import './List.css';

const ListItem = (props)=>{
    return (
        <li className={props.className}>{props.content}</li>
    )
}
export default ListItem;