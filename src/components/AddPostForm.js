import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from "../actions/postAction";

class AddPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(post);
    }


    render() {
        return (

            <div className="row content border p-3 m-3">
                <h1>Add Post</h1>

                <form className="form-inline" onSubmit={this.onSubmit}>
                    <div
                        // className="form-row align-items-center"
                         className="form-group mb-2"
                    >

                        <label>Title: </label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                        />
                        <label>Text: </label>
                        <textarea
                            className="form-control"
                            name="body"
                            onChange={this.onChange}
                            value={this.state.body}
                        />
                        <button type="submit"
                                // className="btn btn-primary mb-2"
                        >Add Post
                        </button>
                    </div>
                </form>

            </div>
        );
    }
}

AddPostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost})(AddPostForm);