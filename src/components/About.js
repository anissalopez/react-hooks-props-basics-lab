import React from "react";
import Links from "./Links"


function Bio (prop){
  if (!prop.bio){
    return null
  }
  return <p>{prop.bio}</p>
};

function About(prop) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <Bio bio = {prop.bio}/>
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      <Links linkedin = {prop.linkedin} github = {prop.github} />
      
    </div>
  );
}

export default About;
