import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyProduct from './pages/MyProduct';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <MyProduct />}/>
      </Switch>
    </Router>
  );
}

export default App;
