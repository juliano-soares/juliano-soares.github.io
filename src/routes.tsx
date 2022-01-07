import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Artigo } from './pages/Artigo';
import { Blog } from './pages/Blog';
import { Contato } from './pages/Contato';
import { Portifolio } from './pages/Portifolio';
import { PageNotFound } from './pages/PageNotFound';

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/artigos" exact component={Artigo} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/contato" exact component={Contato} />
      <Route path="/portifolio" exact component={Portifolio} />
      <Route component={PageNotFound} />
    </BrowserRouter>
  )
}

export default Routes;