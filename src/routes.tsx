import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Artigo } from './pages/Artigo';
import { Blog } from './pages/Blog';
import { Contato } from './pages/Contato';
import { Portifolio } from './pages/Portifolio';
import { PageNotFound } from './pages/PageNotFound';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/artigos" component={Artigo} />
          <Route path="/blog" component={Blog} />
          <Route path="/contato" component={Contato} />
          <Route path="/portifolio" component={Portifolio} />
          <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;