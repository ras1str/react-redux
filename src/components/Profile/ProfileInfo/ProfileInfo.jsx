import React from "react";

import clasess from "./ProfileInfo.module.css"

const ProfileInfo = () => {
  return (
    <div className={clasess.content}>
        
      <img src="https://content.skyscnr.com/m/1b51182679225810/original/GettyImages-147444574_doc.jpg?resize=1800px:1800px&quality=100" alt="" />

      <div className={clasess.profileName}>ava + desctiption </div>
      
    </div>

  )
}

export default ProfileInfo;