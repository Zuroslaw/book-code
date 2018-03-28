import  { Router }   from './ReactConstants';
import Routes from './components/Routes';

var userInfo;

keycloak.init({ onLoad: 'check-sso' }).success( () => {
    if (keycloak.authenticated) {
        console.log("Keycloak authenticated");
        keycloak.loadUserInfo().success( profile => {
            userInfo = profile;
            Router.run(Routes, Router.HistoryLocation, function(Handler) {
                React.render( < Handler / > , document.getElementById('container'));
            });
        });
    } else {
        Router.run(Routes, Router.HistoryLocation, function(Handler) {
            React.render( < Handler / > , document.getElementById('container'));
        });
    }
});