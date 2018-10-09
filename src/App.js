import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

import Geoloc from "./Geoloc"
import Position from "./Position"
import MyMap from "./MyMap"

const reducer = (state = {ready: false, longitude: "", latitude: ""}, action) => {
  switch (action.type) {
    case "SEND_POSITION":
    
      return {
        ...state,
        longitude: action.longitude,
        latitude: action.latitude,
        ready: true
      }
    case "INIT_REQUEST":
      return {
        ...state,
        longitude: "pending...",
        latitude: "pending...",
        ready: false
      }
    default:
      return state;
  }
};

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Geoloc />
          <Position />
          <MyMap />
        </div>
      </Provider>
    );
  }
}

export default App;
