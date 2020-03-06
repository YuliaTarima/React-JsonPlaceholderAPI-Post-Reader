import React from 'react';

 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Header(props) {

    return (
        <header className="app-header">
            <div className="header-logo"><FontAwesomeIcon icon="calendar-alt"/></div>
            <div className="header-heading"><h1>API Post Reader</h1></div>
        </header>
    );
}

export default Header;
