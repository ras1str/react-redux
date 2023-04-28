import React from "react";
import clasess from "./Post.module.css"

const Post = (props) => {
    return (


        <div className={clasess.item}>
            
            <img
                src="https://avatarzo.ru/wp-content/uploads/z-za-pobedu.jpg"
                alt=""
            />
            <span>{props.msg}</span>
            <br />
            <span> like:{props.like}</span>
        </div>


    )
}

export default Post;