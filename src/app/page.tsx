// import Image from "next/image";

import React from "react"

export default function Home() {
  return (
   <div className="homeContainer">
   <div className="childContainer">
    Hey,
    My name is <span className="greenColour">Abdul Moiz</span>
    <br /> I am Learning (Next JS)
   </div>
   <div className="childContainer">
    <img className="profile" src={'/profile.jpeg'} alt="Profile pic" width={200} height={200}/>
   </div>
   </div>

)}
