import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Helpout from './components/Helpout';
import Utilities from './components/Utilities';
import StylesMenu from './components/Styles/StylesMenu';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <header>
            <StylesMenu />
          </header>
          <Switch>
            <Route exact path="/menu" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/helpout" component={Helpout} />
            <Route exact path="/useful-steps" component={Utilities} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
