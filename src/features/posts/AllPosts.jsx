import React from 'react';

import SkeletonLoading from '../shared/api/SkeletonLoading';
import SkeletonAllPosts from './skeletons/SkeletonAllPosts';
import useAsyncLoadState from '../shared/api/useAsyncLoadState'
import NavLink from '../shared/NavLink'
import { getAllPostSummaries } from './posts.api'

const AllPosts = () => {
    const [summaries, status] = useAsyncLoadState(getAllPostSummaries, [])

    return (
        <SkeletonLoading status={status} skeleton={<SkeletonAllPosts />}>
            {summaries.map(post =>
                <NavLink key={post.id} className="clear-style" to="/entry" params={{ postId: post.id }}><h5>&gt; {post.title}</h5></NavLink>
            )}
        </SkeletonLoading>
    )
}

export default AllPosts