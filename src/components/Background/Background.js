import React from "react";
import '../../App.css';
import './Background.css';
import SubHeader from '../SubHeader';
import ListItem from '../List/ListItem';

const Background = ()=>{
    const text = "Background.";
    const background = "background";
    return (
        <div className={background}>
            <SubHeader text={text} id={background}/>
            <div className="background-list">
                <ul>
                    <ListItem content={"I am from Houston"}/>
                    <ListItem content={"Graduated from Austin Coding Academy in January 2019"}/>
                    <ul>
                        <ListItem content={"Earned a certificate in Full Stack JavaScript Web Development"}/>
                    </ul>
                    <ListItem content={"Graduated from Texas State in 2014"}/>
                    <ul>
                        <ListItem content={"Degree in Interdisplinary Studies (teaching)"}/>
                        <ListItem content={"Minor in Studio Art + Post BS Hours in Studio Art with an emphasis in painting"}/>
                    </ul>
                    <ListItem content={"I am currently working as a Kindergarten Teacher."}/>
                </ul>
            </div>
        </div>
    )
}
export default Background;