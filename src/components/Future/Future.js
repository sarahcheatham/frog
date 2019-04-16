import React from "react";
import '../../App.css';
import './Future.css';
import SubHeader from '../SubHeader';

const Future = ()=>{
    const text = "Future.";
    const future = "future";
    return (
        <div className={future}>
            <SubHeader text={text} id={future}/>
        </div>
    )
}
export default Future;