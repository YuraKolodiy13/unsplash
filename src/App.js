import React, {useEffect} from 'react';

import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import Topics from "./Components/Topics/Topics";
import Topic from "./pages/Topic/Topic";

const App = () => {

  return (
    <div className="App border">
      <Topics/>

      <Switch>
        <Route path="/topics/:slug" component={Topic} />
      </Switch>
    </div>
  );
}

export default App;
