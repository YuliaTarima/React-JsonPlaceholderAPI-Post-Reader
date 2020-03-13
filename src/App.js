import React, {Component} from 'react';
// import { connect } from 'react-redux';
import {createPost} from "./actions/postAction";
import {Provider} from "react-redux";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from "./components/PostList";
import AddPostForm from "./components/AddPostForm";
import store from './store';
import ReactDOM from 'react-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
    faTrashAlt,
    faCalendarCheck,
    faCalendarPlus,
    faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fab, faTrashAlt, faCalendarCheck, faCalendarPlus, faCalendarAlt);

// const resetPosts = () => {
//     fetch('http://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//            .then(data => this.setState({posts: data}));
// }
// const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <div className="container main-container">
                        <div className="container">
                            <div className="row p-3 m-3">
                                <h1>Posts</h1>
                            </div>
                            <AddPostForm/>
                            <PostList/>
                        </div>
                    </div>
                    {/*<ConfirmationModal show post></ConfirmationModal>*/}
                    <Footer/>
                </div>
            </Provider>
        );
    }

}

export default App;

// import React, {useState, useEffect} from 'react';
//
// function App() {
//     const [posts, setPosts] = useState([]);
//     console.log(posts);
//
//     useEffect(() => {
//         getPosts();
//     }, []);
