import React from 'react';
import { Router } from 'react-router';
import Header from './Header';

const { RouteHandler } = Router;

export const App = () => (
    <div>
        <Header/>
        <RouteHandler/>
    </div>
);

export default App;