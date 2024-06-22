import React from "react";
import { gfg_LOGO,codeforces_LOGO, leetcode_LOGO } from '../utils/constants.jsx'
import Card from "./Card.jsx";
import './body.css';
import { Link } from "react-router-dom";

function Body(){
    const List=[
        {   
            name:"leetcode",
            url:leetcode_LOGO,
            title:"LeetCode"
        },
        {
            name:"codeforces",
            url:codeforces_LOGO,
            title:"Code Forces"
        },
        {
            name:"gfg",
            url:gfg_LOGO,
            title:"GFG"
        }
    ]
    return (
        <>
        <div className='body'>
            {
                List.map((item,index)=>(
                <Link key={item.name} to={"/"+item.name} > <Card  url={item.url} title={item.title}/></Link>
                ))
            }
        </div>
        </>

    )
}
export default Body;