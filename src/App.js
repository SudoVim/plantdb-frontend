import React, { Component } from 'react';
import './App.css';
import {Container} from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import AppNavBar from './AppNavbar.js';
import Browser from './Browser.js';
import PlantViewer from './PlantViewer.js';

const HomeRoute = (props) => {
    return <Browser />;

}

const PlantRoute = (props) => {
    return <PlantViewer plant={props.match.params.plant} />;

}

class App extends Component {
  render() {
    return (
        <div>
            <Container fluid={true}>
                <Router>
                    <div>
                        <AppNavBar />
                        <Route path="/" exact component={HomeRoute} />
                        <Route path="/plants/:plant" exact component={PlantRoute} />
                    </div>
                </Router>
            </Container>
        </div>
    );
  }
}

export default App;
