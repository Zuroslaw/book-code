import React from 'react';
import { Router } from 'react-router';
import App from './App';
import Catalog from './Catalog';
import Cart from './Cart';

const { Route, DefaultRoute} = Router;

export const Routes = () => (
    <Route handler = {App} path = "/" >
        <DefaultRoute name = "catalog" handler = {Catalog} />
        <Route name = "cart" handler = {Cart}/>
    </Route >
);

export default Routes;