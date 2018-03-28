import { Route, DefaultRoute } from '../ReactConstants';
import App from './App';
import Catalog from './Catalog';
import Cart from './Cart';

const Routes = () => {
    <Route handler = {App} path = "/" >
        <DefaultRoute name = "catalog" handler = {Catalog} />
        <Route name = "cart" handler = {Cart}/>
    </Route >
}