import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//utilizing class-based component inrder to use state
class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </Router>
    );
  }
}
export default App;
