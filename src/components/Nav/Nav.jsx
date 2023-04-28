import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import clasess from "./Nav.module.css"


const Nav = (props) => {

  let friendsElements = props.sideBar.friends.map(friend => <Friends name={friend.name}/> )

  const setActive = ({ isActive }) => (isActive ? clasess.active : "")

  let navElements = props.sideBar.nav.map((nav) => {
    
      return <div className={clasess.item}> <NavLink className={setActive} to={nav.to}>{nav.name}</NavLink> </div>

})

  return (
    
    <nav className={clasess.nav}>
      
      { navElements }
      <div>
        <h3>Friends</h3>
        <div className={clasess.friends}>
          
          { friendsElements }
        </div>
      </div>
    </nav>
  )
}

export default Nav;