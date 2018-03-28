import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Routes from './components/Routes';
import { Router } from 'react-router';

const keycloak = window.keycloak;

keycloak.init({ onLoad: 'check-sso' }).success( () => {
    if (keycloak.authenticated) {
        console.log("Keycloak authenticated");
        keycloak.loadUserInfo().success( profile => {
            window.userInfo = profile;
            Router.run(Routes, Router.HistoryLocation, function(Handler) {
                ReactDOM.render( < Handler / > , document.getElementById('container'));
            });
        });
    } else {
        Router.run(Routes, Router.HistoryLocation, function(Handler) {
            ReactDOM.render( < Handler / > , document.getElementById('container'));
        });
    }
});