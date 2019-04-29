import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './Home';
import Club from './Club';
import ExplorationZone from './ExplorationZone';



const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/exploration-zone' component={ExplorationZone} />
        <Route exact path='/exploration-zone' component={Club} />
      </Switch>
    </main>
  )
  
  export default Main;