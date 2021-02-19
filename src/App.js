import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const { PUBLIC_URL } = process.env;

const Landing = lazy(() => import('./pages/Landing'));


const App = () => (
  <Suspense fallback={<h1>Loading profile...</h1>}>
    <BrowserRouter basename={PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Landing} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default App;
