import React from "react";
import Axios from "axios";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ReactQueryCacheProvider, QueryCache } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { Provider } from "react-redux";

import routes, { landingpage, emailLogin } from "./userRoutes";
import store from "./store/store";
import RouteGuard from "./RouteGuard";
// import NotFound from 'NotFound'

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      retry: (failureCount, error) => {
        switch (error.response?.status) {
          case 400:
          case 401:
          case 403:
          case 404:
          case 405:
            return false;
          default:
            return failureCount < 1;
        }
      },
    },
  },
});

const unGuardedRoutes = [emailLogin, landingpage];

const App = () => {
  return (
    <Provider store={store}>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} exact path={route.path}>
                {unGuardedRoutes.includes(route.path) ? (
                  <route.component />
                ) : (
                  <RouteGuard path={route.path}>
                    {<route.component />}
                  </RouteGuard>
                )}
              </Route>
            ))}
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </ReactQueryCacheProvider>
    </Provider>
  );
};

export default App;
