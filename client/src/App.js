import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MeetPage from './components/MeetPage/MeetPage';
import HomePage from './components/HomePage/HomePage';
import Invalid from './components/Invalid/Invalid';
import "./App.scss";

function App() {
  return (
    //Routes for HomePage, MeetPage and Invalid Page
    <Router>
      <Switch>
        <Route exact path = "/"> 
          <HomePage />
        </Route>
        <Route exact path = "/:id">
          <MeetPage />
        </Route>
        <Route path = "*">
          <Invalid />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
