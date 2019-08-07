
import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import  Home  from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Registration from "./component/registration";
import APICall from "./component/APICall";


function AppClass() {
    return (
      <div class="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/Registration" component={Registration}/>
          <Route path="/APICall" component={APICall}/>
        </Switch>
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <BrowserRouter>
      <AppClass />
    </BrowserRouter>,
    rootElement
  );
serviceWorker.unregister();
