import { HashRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';

function Routes() {
  return(
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route component={PageNotFound} />
    </HashRouter>
  )
}

export default Routes;