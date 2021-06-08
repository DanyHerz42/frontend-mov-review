import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Login}/>
        <Route path="/home" exact={true} component={Home}/>
        <Route path="/admin" exact={true} component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
