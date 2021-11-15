import React from 'react';

import useAsyncLoadState from '../shared/api/useAsyncLoadState'
import NavLink from '../shared/NavLink'
import { getAllPostSummaries } from './posts.api'

const AllPosts = () => {
    const [summaries, status] = useAsyncLoadState(getAllPostSummaries, [])

    return (
        <div>
            {summaries.map(post =>
                <NavLink key={post.id} className="clear-style" to="/entry" params={{ postId: post.id }}><h5>{post.title}</h5></NavLink>
            )}
        </div>
    )
}

export default AllPosts