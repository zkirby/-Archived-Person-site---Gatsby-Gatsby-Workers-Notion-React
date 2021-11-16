import React from "react"
import { FaHome } from 'react-icons/fa';

import Renderer from "../markdown/Renderer"
import SkeletonLoading from "../shared/api/SkeletonLoading"
import useAsyncLoadState from "../shared/api/useAsyncLoadState"
import NavLink from "../shared/NavLink"
import { getPost } from "./posts.api"
import SkeletonPost from "./skeletons/SkeletonPost"

const Post = ({ postId }) => {
    const [post, status] = useAsyncLoadState(() => getPost(postId))

    return (
        <SkeletonLoading status={status} skeleton={<SkeletonPost />} >
            <div className="writing-container">
                <NavLink className="floating-home" to="/">
                    <FaHome />
                </NavLink>
                <div className="body writing-content">
                    <h1>{post?.title}</h1>
                    <Renderer className="writing-text" blocks={post?.content} />
                </div>
            </div>
        </SkeletonLoading>
    )
}

export default Post
