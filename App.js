import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import firebase from 'firebase';
import reducers from './src/reducers';
  
import Router from './src/Router';
class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCDTDXMks_G3AKyAJ7RRe53luGyhibBS2o",
      authDomain: "manager-d493d.firebaseapp.com",
      databaseURL: "https://manager-d493d.firebaseio.com",
      projectId: "manager-d493d",
      storageBucket: "",
      messagingSenderId: "345410633425"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    )
  }
}


export default App;

 