import React from "react"
import { NavLink } from "react-router-dom"
import clasess from "./../Dialogs.module.css"


const Message = (props)=>{

    return (
      
      <div className={clasess.msg}>{props.msg}</div>
      
    )
  
  }

  export default Message