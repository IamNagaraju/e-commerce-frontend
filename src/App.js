import React, { Component } from 'react';
import CategoryIndex from "./components/categories/index"
import Home from "./components/home/index"
import { BrowserRouter, Link, Route } from "react-router-dom"
import CategoryShow from "./components/categories/show"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <li><Link to="/"  >Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/">Home</Link></li>
          <Route path="/" exact component={Home} />
          <Route path="/categories" exact component={CategoryIndex} />
          <Route path="/categories/:id" component={CategoryShow} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
