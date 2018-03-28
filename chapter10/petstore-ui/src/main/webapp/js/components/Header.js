import { Link } from '../ReactConstants';
import UserHeader from './UserHeader';
import GuestHeader from './GuestHeader';

export const Header = () => {
    let rightHeader;

    if(keycloak && keycloak.authenticated){
        rightHeader = <UserHeader 
                        username={userInfo.preferred_username}
                        logoutUrl={
                            keycloak.createLogoutUrl({
                                redirectUri: document.location.protocol + "//" + document.location.host
                            })}/>;
    } else {
        rightHeader = <GuestHeader
                        loginHandler={() => { keycloak.login(); return false; }}/>;
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