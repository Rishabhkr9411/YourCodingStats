import React from "react";
import ReactDom from "react-dom";
import { useState,useEffect } from "react";
import { leetcode_LOGO,gfg_LOGO,codeforces_LOGO,leetcode_API,codeforces_API,gfg_API } from "../utils/constants";
import './login_page.css';
import { useParams,useNavigate } from "react-router-dom";




function Lc(){
    const [search,setSearch]=useState("");  
    const [list,setList]=useState("");

    const {name}=useParams();
    const navigate=useNavigate();
    const _LOGO=name==="leetcode"?leetcode_LOGO:name==="gfg"?gfg_LOGO:codeforces_LOGO;
    const _API=name==="leetcode"?leetcode_API:name==="gfg"?gfg_API:codeforces_API; 

    // useEffect(()=>{
        
    // },[])

    return (
        <>
        <div>
            <div className="cont">
            <img className=" cont-img" src={_LOGO} alt="" />
            <input type="text"
            className="searchbox"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="username.." />
            <button className="search-btn"
            onClick={()=>{
                
                const fetchdata=async ()=>{
                const data=await fetch(_API+search);
                const json=await data.json();
                console.log(json);
                setList(json);
                navigate("/"+name+"/"+search,{state:{data:json}}); // navigate to the profile page with the data
                console.log(setList);
                console.log(name);
                

            } 
            fetchdata(); // calling the fetchdata function for api calling
            }}
            > Search</button>
            </div>                      
        </div>
        

    </>
    )
}

export  default Lc;