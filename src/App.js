import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from "./components/PostList";

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

function App() {
    const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => {
                setPosts(res)
            })
    }
    return (
        <div className="App">
            <Header/>
            <button onClick={getPosts}>Get Posts</button>
            <PostList posts={posts}/>
            {/*<ConfirmationModal show post></ConfirmationModal>*/}
            <Footer/>
        </div>
    );
}

export default App;