import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import About from "./Components/About/About";
import PostDetail from "./Components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/home">Home2</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
            <About></About>
            </Route>
            <Route path="/home">
             <Home></Home>
            </Route>
            <Route path="/post/:id">
              <PostDetail></PostDetail>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
