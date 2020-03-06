import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function PostList({posts}) {

    return (
        <div className="row content">
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
                <button>Delete</button>
            </ul>


            </div>

    );
}

export default PostList;