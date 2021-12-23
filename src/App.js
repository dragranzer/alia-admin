import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyProduct from './pages/MyProduct';
import MyInbox from './pages/MyInbox';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <MyProduct />}/>
        <Route exact path="/inbox" render={() => <MyInbox />}/>
      </Switch>
    </Router>
  );
}

export default App;
