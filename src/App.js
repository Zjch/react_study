import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import router from './router/router.js';



class App extends Component{
  render(){
    return (
      <div>
        <Router>
          <div>
            {
              router.map((route, key) => {
                return <Route 
                        key={key}
                        path={route.path}
                        exact={route.exact}
                        // component={route.component}
                        render={props => (
                          <route.component routes={route.routers} {...props}/>
                        )}
                      />
              })
            }
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
