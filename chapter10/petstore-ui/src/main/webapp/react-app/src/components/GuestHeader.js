import React from 'react';

export const GuestHeader = props => (
    <ul className="nav navbar-nav navbar-right">
        <li>
            <a href="#" onClick={props.loginHandler}>
                <span className="glyphicon glyphicon-log-in"/> Login
            </a>
        </li>
    </ul>
);

export default GuestHeader;