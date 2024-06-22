import React from "react";
import './card.css'
import Body from "./Body";
function Card(props){
    const {url,title}=props;
    
    return(
        <>
        <div className="card">
            <div className="card-content">
                <img className="card-image" src={props.url}/>
                <h2 className="card-title">{props.title}</h2> 
            </div>
        </div>
        </>
    )   
}



export default Card;