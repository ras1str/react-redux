import React from "react";

import clasess from "./../Nav.module.css"


const Friends = (props) => {

    return (
      <div>
        <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png" alt="" />
        <div><span>{props.name}</span></div>
  
      </div>
    )
  }

  export default Friends