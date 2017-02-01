import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import firebase, {googleAuthProvider} from 'src/firebase/index'

//add appshell
import PropertyApp from 'PropertyApp'


//add route loaders and handler
var loadRoute = (cb) =>  {
 return (module) => cb(null, module.default);
}

var errorLoading  = (err) => {
 console.error('Dynamic page loading failed', err);
}

//add middleware for routes that need auth
var requireLogin = (nextState, replace, next) => {
  //no user logged in
  if(!firebase.auth().currentUser) {
    replace('/auth');
  }
  next();
}

//middleware to deal with redirection if user is logged in
var redirectLoggedIn = (nextState, replace, next) => {
  //if user is logged in
  if(firebase.auth().currentUser) {
    replace('/app');
  }
  next();
}

//construct our router
export default (
  <Router history={hashHistory}>
    <Route
      path="/"
      component={PropertyApp}>
    <Route
      path="/auth"
      onEnter={redirectLoggedIn}
      getComponent={(location, cb) => {
        System.import('AuthComponent')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}/>
    <Route
      path="reservations"
      getComponent={(location, cb) =>{
          System.import('Reservations')
         .then(loadRoute(cb))
         .catch(errorLoading);
        }}
      />
    <Route
      path="admin"
      getComponent={(location,cb) => {
        System.import('Admin')
       .then(loadRoute(cb))
       .catch(errorLoading);
      }}
      />
    <Route
      path="app"
      onEnter={requireLogin}
      getComponent={(location, cb) => {
        System.import('CiboTabs')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
      />
    </Route>
  </Router>
)
