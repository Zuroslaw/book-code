import { Link } from '../ReactConstants';

export const UserHeader = props => (
    <ul className="nav navbar-nav navbar-right">
        <li>
            <a href=" "><span className="glyphicon glyphicon-user"/>{props.username}</a>
        </li>
        <li>
            <Link to="cart"><span className="glyphicon glyphicon-shopping-cart"/>Cart</Link>
        </li>
        <li>
            <a href={props.logoutUrl}><span className="glyphicon glyphicon-log-out"/> Logout</a>
        </li>
    </ul>
);

export default UserHeader;