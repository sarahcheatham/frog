import React from "react";
import '../../App.css';
import './Design.css';
import SubHeader from '../SubHeader';
import ListItem from '../List/ListItem';
import pink1 from '../../images/pink1.JPG';
import pink2 from '../../images/pink2.JPG';
import pink3 from '../../images/pink3.jpg';
import pink4 from '../../images/pink4.jpg';
import camera1 from '../../images/camera1.jpg';
import camera2 from '../../images/camera2.jpg';
import camera3 from '../../images/camera3.jpg';
import camera4 from '../../images/camera4.jpg';
import collage1 from '../../images/collage1.jpg';
import collage2 from '../../images/collage2.jpg';

const Design = ()=>{
    const text = "Design.";
    const design = "design";
    return (
        <div className={design}>
            <SubHeader text={text} id={design}/>
            <ul className="design-list">
                <ListItem className="designItem" content={"Painting"}/>
                <span className="paintingImages">
                    <img id="pink1" src={pink1} alt="pink1" width="98%"/>
                    <img id="pink2" src={pink2} alt="pink2" width="100%"/>
                    <img id="pink3" src={pink3} alt="pink3" width="92.5%"/>
                    <img id="pink4" src={pink4} alt="pink4" width="96%"/>
                </span>
                <ListItem className="designItem" content={"Drawing"}/>
                <span className="drawingImages">
                    {/* <img src={camera1} alt="camera1" width="35%"/> */}
                    <img id="camera2" src={camera2} alt="camera2" width="99.5%"/>
                    <img id="camera3" src={camera3} alt="camera3" width="95%"/>
                    <img id="camera4" src={camera4} alt="camera4" width="99%"/>
                </span>
                <ListItem className="designItem" content={"Collage"}/>
                <span className="collageImages">
                    <img id="collage2" src={collage2} alt="collage2" width="25%"/>
                    <img id="collage1" src={collage1} alt="collage1" width="30%"/>
                </span>
            </ul>
        </div>
    )
}
export default Design;