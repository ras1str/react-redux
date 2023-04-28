import React from "react";


import clasess from "./Users.module.css"

const Users = (props) => {
    const usersArr = props.users.map(user => <div>{user.name} {user.id}</div>)
  
  return (
    <div>
      {usersArr}
   </div>
  )
}

export default Users;