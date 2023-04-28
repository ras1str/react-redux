import React from "react"
import { NavLink } from "react-router-dom"
import clasess from "./../Dialogs.module.css"

const DialogItem = (props) => {
    return (
  
      <div
       className={clasess.dialog}
       >
        <NavLink 
        to={"/dialogs/" + props.id}
        >
           {props.name}
           </NavLink>
      </div>
  
  
    )
  
  }

  export default DialogItem