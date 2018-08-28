import * as Ontology from 'ontology-dapi';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Asset } from './asset';
import { Home } from './home';
import { Network } from './network';
import { Provider } from './provider';
import { SmartContract } from './smartContract';

const App: React.SFC<{}> = () => (
  <BrowserRouter>
    <>
      <Route path="/" exact={true} component={Home} />
      <Route path="/network" exact={true} component={Network} />
      <Route path="/asset" exact={true} component={Asset} />
      <Route path="/smart-contract" exact={true} component={SmartContract} />
      <Route path="/provider" exact={true} component={Provider} />
    </>
  </BrowserRouter>
);

Ontology.client.registerClient({});
ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
