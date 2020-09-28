import React, { Component, Fragment } from 'react';
import './App.css';
import PeopleList from "./Components/PeopleList/PeopleList";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {

  state = {
    People : []
  }
  peopleURl = "https://swapi.dev/api/people/";

  getPeople = () => {
    fetch(this.peopleURl, {method: "GET"})
    .then(data => {
      return data.json()
    })
    .then(people =>{
      console.log(people.results);
      this.setState({
        People: people.results
      })
    })
    .catch(error =>{
      console.log("Error: ", error);
    })
  }

  componentDidMount(){
    this.getPeople();
  }

  render (){

  return (
    <Fragment>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-10">
              <Link className="navbar-brand" to="/">
                Star Wars
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link active" to="/peoples">
                    Peoples
                  </Link>
                  <Link className="nav-item nav-link" to="/planets">
                    Planets
                  </Link>
                  <Link className="nav-item nav-link" to="/films">
                    Films
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </Router>
      </Fragment>
  );
}
}

export default App;
