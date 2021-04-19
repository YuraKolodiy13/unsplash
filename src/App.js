import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TopicsNav from "./components/TopicsNav/TopicsNav";
import Topic from "./pages/Topic/Topic";
import './assets/styles/globals.scss'
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";

const App = () => {

  return (
    <div className="App container">
      <TopicsNav/>

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} />
        <Route path="/topics/:slug" component={Topic} />
        <Route path="/users/:username" component={User} />
      </Switch>
    </div>
  );
};

export default App;
