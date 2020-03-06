import React from 'react';
import logo from "../logo.jpg";

function Footer(props) {

    return (
        <footer>
            <a href="http://yuwebdesign.tarima.org/"
               target="_blank" rel="noopener noreferrer"
            >
                &copy;&nbsp;YuWebdes!gn&nbsp;
                {/*2019 - */}{new Date().getFullYear()}
            </a>
            <a href="http://yuwebdesign.tarima.org/" target="_blank" rel="noopener noreferrer">
                <img src={logo} className="App-logo img-fluid"
                     alt="logo"/>
            </a>
        </footer>
    );
}

export default Footer;
