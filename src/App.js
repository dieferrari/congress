import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import ROUTES from './constants/routes'
const Layout = React.lazy(() => import(/* webpackChunkName: "Layout" */'./views/layout'));
const Homepage = React.lazy(() => import(/* webpackChunkName: "Homepage" */'./views/screens/Homepage'));
const Profile = React.lazy(() => import(/* webpackChunkName: "Profile" */'./views/screens/Profile'));


const App = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={null}>
          <Route exact path={ROUTES.homepage} children={<Layout><Homepage /></Layout>} />
          <Route exact path={`${ROUTES.profile}/:id`} children={<Layout><Profile/></Layout>} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
