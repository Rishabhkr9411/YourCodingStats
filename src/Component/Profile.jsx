import React from "react";
import { useParams,useLocation } from "react-router-dom";
import { gfg_LOGO,codeforces_LOGO,leetcode_LOGO } from "../utils/constants";
import './profile.css';


function Profile() {

  const{name,username}=useParams();
  const location=useLocation();
  console.log(location);
  if(name==="leetcode"){
    console.log("leetcode");
    const item=location.state.data
    return(
      <>
      <div className="box">
        <div className="box-element">
          <img className="profile" src={leetcode_LOGO} alt="" />
          <ul>
            <li>User name : {username}</li>
            <li>Easy Problem : {item.easySolved}</li>
            <li>Medium Problem : {item.mediumSolved}</li>
            <li>Hard Problem : {item.hardSolved}</li>
            <li>Total Problem : {item.totalSolved}</li>
          </ul>
        </div>
      </div>
      </>
    )
  }
  else if(name==="codeforces"){ 
    console.log("codeforces");
    const item=location.state.data.result[0];
    return(
      <>
      <div className="box">
        <div className="box-element">
          <img className="profile"src={item.titlePhoto} alt="" />
          <ul>
            <li>User Name : {item.handle}</li>
            <li>Max rating :{item.maxRating}</li>
            <li>Rating : {item.rating}</li>
            <li>Max Rank : {item.maxRank}</li>
          </ul>

        </div>
      </div>
      </>
    )
  }
  else if(name==="gfg"){  

    console.log("gfg");
    const item1=location.state.data.info;
    const item2=location.state.data.solvedStats;
    return (
      <>
      
      <div className="box">
        <div className="box-element">
          <img  className="profile" src={item1.profilePicture} alt="" />
          <ul className="box-details">
            <li>UserName : {item1.userName}</li>
            <li>Current Streak : {item1.currentStreak}</li>
            <li>Easy Problem : {item2.easy.count}</li>
            <li>Medium Problem : {item2.medium.count}</li>
            <li>Hard Problem : {item2.hard.count}</li>
            <li>Total Problem Solved : {item1.totalProblemsSolved}</li>
          </ul>


        </div>
      </div>
      </>
    )
  }
  else{
  return (
    <>
      <h2>something error</h2>
    </>
    
  );
}
}
export default Profile;