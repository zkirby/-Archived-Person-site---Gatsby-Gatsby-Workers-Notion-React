import React from "react"

import Renderer from "../markdown/Renderer"
import useAsyncLoadState from "../shared/api/useAsyncLoadState"
import NavLink from "../shared/NavLink"
import { getPost } from "./posts.api"

const Post = ({ postId }) => {
    const [post, status] = useAsyncLoadState(() => getPost(postId))

    return (
        <div className="post">
            <NavLink className="home" to="/">
                Home
            </NavLink>
            <div className="body">
                <h1>{post?.title}</h1>
                <Renderer blocks={post?.content} />
            </div>
        </div>
    )
}

export default Post
