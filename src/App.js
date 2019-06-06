import React from 'react';
import { Container, Header, } from "semantic-ui-react";
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import NoMatch from './components/NoMatch'

class App extends React.Component {
  render() {
    return (
      <>

      <Navbar />
        <Container style={{ marginTop: "25px", }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
        </Container>
      </>
      )
  }
}




export default App;
