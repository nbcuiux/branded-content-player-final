import React, { Component, PropTypes } from 'react';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAdyPD3iR7zgP37TuNKiUOwxIlY9pVUlXk",
    authDomain: "my-player-64da9.firebaseapp.com",
    databaseURL: "https://my-player-64da9.firebaseio.com",
    projectId: "my-player-64da9",
    storageBucket: "my-player-64da9.appspot.com",
    messagingSenderId: "315516643162"
  };

var fire = firebase.initializeApp(config);

export default fire;