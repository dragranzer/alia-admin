import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyProduct from './pages/MyProduct';
import MyInbox from './pages/MyInbox';
import TambahProduct from './pages/TambahProduct';
import Login from './pages/Login';
import Product from './pages/Product';
import DetailMessage from './pages/DetailMessage';
import Registration from './pages/Registration';

import {store, persistor} from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Login />}/>
            <Route exact path="/myproduct" render={() => <MyProduct />}/>
            <Route exact path="/inbox" render={() => <MyInbox />}/>
            <Route exact path="/add_product" render={() => <TambahProduct />}/>
            <Route exact path="/registration" render={() => <Registration />}/>
            <Route exact path="/product/:id" render={() => <Product />}/>
            <Route exact path="/message/:id" render={() => <DetailMessage />}/>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
