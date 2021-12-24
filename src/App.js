import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyProduct from './pages/MyProduct';
import MyInbox from './pages/MyInbox';
import TambahProduct from './pages/TambahProduct';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <MyProduct />}/>
        <Route exact path="/inbox" render={() => <MyInbox />}/>
        <Route exact path="/add_product" render={() => <TambahProduct />}/>
      </Switch>
    </Router>
  );
}

export default App;
