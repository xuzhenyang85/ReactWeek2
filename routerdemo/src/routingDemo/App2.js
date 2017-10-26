//Create a new file App2.js, and copy all from this file into is

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import bookStore from './BookStore';
import Header from './Header';
import Products from './Products';
import './RoutingStyles.css';

//Views start
const Home = () => (
  <div>
    <h2>Home View</h2>
    <p>Info about this site</p>
  </div>
)

const Company = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Our about page</p>
    </div>
  )
}

export default class App2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter >
        <div>
          <Header />
          <Switch> // switch ligesom java
            <Route path="/products" render={(props) => (<Products {...props} bookStore={bookStore} />)} />// hvis vi vil køre en funktion, vi kan smide components indre
            <Route path="/company" component={Company} /> // component peger på component
            <Route component={Home}></Route> // hvis der står noget path så viser vi Home
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
