import React from "react";
import './SkIcon.css';

type propType = {
    size:string
}
const SkIcon = (props:propType) =>{

 return(
    <div className={props.size} >
       <p className="iconText">SK</p>
    </div>
 )
}
export default SkIcon;