import React from 'react';
import { Link } from 'react-router';
import UserHeader from './UserHeader';
import GuestHeader from './GuestHeader';

export const Header = () => {
    let rightHeader;

    if(window.keycloak && window.keycloak.authenticated){
        rightHeader = <UserHeader 
                        username={window.userInfo.preferred_username}
                        logoutUrl={
                            window.keycloak.createLogoutUrl({
                                redirectUri: document.location.protocol + "//" + document.location.host
                            })}/>;
    } else {
        rightHeader = <GuestHeader
                        loginHandler={() => { window.keycloak.login(); return false; }}/>;
    }

    return (
        <nav className="navbar navbar-default">
        <div className="navbar-header">
            <Link to="catalog"><h1>Swarm Petstore</h1></Link>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
            {rightHeader}
        </div>
        </nav>
    );
};

export default Header;