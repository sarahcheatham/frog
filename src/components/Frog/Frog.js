import React from "react";
import '../../App.css';
import './Frog.css';
import SubHeader from '../SubHeader';
import ListItem from '../List/ListItem';
import frog1 from '../../images/frog-1.jpeg';

const Frog = ()=>{
    const text = "Frog.";
    const frog = "frog";
    return (
        <div className={frog}>
            <SubHeader text={text} id={frog}/>
            <span id="frog-list-container">
                <img id="frogimg" src={frog1} alt="frog" width="50%"/>
                <ul className="frog-list">
                    <ListItem content={"Values"}/>
                    <ul>
                        <ListItem content={"Inclusion"}/>
                        <ListItem content={"Diversity"}/>
                        <ListItem content={"Innovation"}/>
                    </ul>
                    <ListItem content={"Interest in Design"}/>
                    <ListItem content={"Mentorship"}/>
                </ul>
            </span>
        </div>
    )
}
export default Frog;