import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import clasess from "./Users.module.css"



let mapStateToProps = (state) => {

  return{
    users: state.usersPage.users

  }

}

const UsersContainer = connect(mapStateToProps)(Users)

export default UsersContainer;