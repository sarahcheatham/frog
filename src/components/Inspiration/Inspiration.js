import React from "react";
import '../../App.css';
import './Inspiration.css';
import SubHeader from '../SubHeader';
import ListItem from '../List/ListItem';

const Inspiration = ()=>{
    const text = "Inspiration.";
    const inspo = "inspo"
    return (
        <div className={inspo}>
            <SubHeader text={text} id={inspo}/>
            <ul className="inspo-list">
                <ListItem content={"David Hockney"}/>
                <ListItem content={"Alex Katz"}/>
                <ListItem content={"Marcel Breuer"}/>
                <ListItem content={"Bauhaus Movement"}/>
                <ListItem content={"Jessica Simorte"}/>
                <ListItem content={"Jules Buck Jones"}/>
            </ul>
        </div>
    )
}
export default Inspiration;