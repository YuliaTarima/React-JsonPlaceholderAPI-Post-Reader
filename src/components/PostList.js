import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PostItem from "./PostItem";
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/postAction";


class PostList extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div className="row content border p-3 m-3"
                 key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p>
                    <button>Edit</button>
                    <button>Delete</button>
                </p>
            </div>
        ));
        return (
            <div>
                {postItems}
            </div>
        );
    }
}

PostList.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
