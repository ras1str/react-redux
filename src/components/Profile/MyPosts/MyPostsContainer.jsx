import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const mapStateToProps =(state)=> {
    return { 
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) =>{
   return { 
    addPost : () => {
        dispatch(addPostActionCreator())

    }, 
    updateNewPostText : (text) => {
        let action = updateNewPostTextActionCreator(text)
        dispatch(action)
    }
   }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;