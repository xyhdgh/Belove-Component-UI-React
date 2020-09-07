import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes'

interface routeInterface {
  path: string;
  exact?: boolean;
  component: React.LazyExoticComponent<() => JSX.Element>
}

const Loading: React.FC = () => {
  return (
    <div>
      Loading...
    </div>
  )
}

const MyRouter: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          {routes.map((route: routeInterface) => {
            if (route.exact) {
              return <Route exact {...route} key={route.path}></Route>
            } else {
              return <Route {...route} key={route.path}></Route>
            }
          })}
        </Switch>
      </Router>
    </Suspense>
  )
}

export default MyRouter