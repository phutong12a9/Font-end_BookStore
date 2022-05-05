import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React,{ Component } from 'react';
import RouterURL from './router/RouterURL';
class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
          <RouterURL />
    </div>
    </Router>
  );
}
}

export default App;
