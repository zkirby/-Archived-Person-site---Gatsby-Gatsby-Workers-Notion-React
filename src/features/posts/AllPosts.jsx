import React from 'react';

import useAsyncLoadState from '../shared/api/useAsyncLoadState'
import NavLink from '../shared/NavLink'
import { getAllPostSummaries } from './posts.api'

const AllPosts = () => {
    const [summaries, status] = useAsyncLoadState(getAllPostSummaries, [])

    return (
        <div>
            {summaries.map(summary =>
                <NavLink to={`/posts/${summary.id}`}>{summary.title}</NavLink>
            )}
        </div>
    )
}

export default AllPosts