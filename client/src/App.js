import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CallPage from './components/CallPage/CallPage';
import HomePage from './components/HomePage/HomePage';
import NoMatch from './components/NoMatch/NoMatch';
import "./App.scss";

function App() {
  return (
    //Routes for HomePage, CallPage and NoMatch Page
    <Router>
      <Switch>
        <Route exact path = "/"> 
          <HomePage />
        </Route>
        <Route exact path = "/:id">
          <CallPage />
        </Route>
        <Route path = "*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
