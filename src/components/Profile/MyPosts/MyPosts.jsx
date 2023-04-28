import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import clasess from "./MyPosts.module.css"
import Post from "./Post/Post";




const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let onAddPost = function () {

        props.addPost()
        
    }

    let onPostChange = () => {
        
        let text = newPostElement.current.value
      
        props.updateNewPostText(text)
      
    }


    let postsElements = props.profilePage.posts.map(p => <Post msg={p.msg} like={p.likesCount} />)

    return (
        <div className={clasess.myPost} >
            <div><h3> my Post</h3></div>
            <div>
                <textarea onChange={onPostChange} value={props.profilePage.newPostText} ref={newPostElement} />
            </div>
            <div>
                <button onClick={onAddPost}>add Post</button>

            </div>
            <div>New Post</div>

            {postsElements}
        </div>

    )
}

export default MyPosts;