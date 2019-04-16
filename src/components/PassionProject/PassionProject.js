import React from "react";
import '../../App.css';
import './PassionProject.css';
import SubHeader from '../SubHeader';
import ListItem from '../List/ListItem';
import arraynge from '../../images/arraynge.png';

const PassionProject = ()=>{
    const text = "Passion Project.";
    const pp = "passionProject";
    return (
        <div className={pp}>
            <SubHeader text={text} id={pp}/>
            <ul className="passionProject-list">
                <ListItem content={"Arraynge"}/>
                <a href="http://arraynge.herokuapp.com" className="arrayngeimg">
                    <img
                        src={arraynge}
                        alt="arraynge"
                        id="arrayngeimg"
                    />
                </a>
                <ListItem content={"Built using React.js for the front-end, Node.js and Express.js for the back-end, and MongoDB for the database."}/>
                <ListItem content={"A full-stack web application made for Kindergarten through Eighth grade teachers to allow teachers the ability to enter students test scores, sort students from high-to-low based on their test scores and then arrange students into leveled groups."}/>
            </ul>
        </div>
    )
}
export default PassionProject;