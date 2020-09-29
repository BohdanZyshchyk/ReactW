import React, { Component, Fragment } from "react";
import "./App.css";
import PeopleList from "./Components/PeopleList/PeopleList";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PlanetsList from "./Components/PlanetsList/PlanetsList";
import FilmList from "./Components/FilmList/FilmList";
import ReactPaginate from "react-paginate";

class App extends Component {
  state = {
    People: [],
    Planets: [],
    Films: [],
    pagePlanets: null,
    pageFilms: null,
    pagePeople: null,
  };
  peopleURl = "https://swapi.dev/api/people/";
  planetURL = "https://swapi.dev/api/planets/";
  filmURL = "https://swapi.dev/api/films/";

  getData = async (URL) => {
    var dataAll = await fetch(URL, { method: "GET" })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        return res;
        // this.setState({
        //   People: people.results
        // })
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    console.log(dataAll);
    return dataAll;
  };

  getPeople = async () => {
    let data = await this.getData(this.peopleURl);

    this.setState({
      pagePeople: data.count,
      People: data.results,
    });
  };

  getPlanets = async () => {
    let data = await this.getData(this.planetURL);
    console.log("data get planet " + data);
    let count = data.count / data.results.length;
    this.setState({
      pagePlanets: count,
      Planets: data.results,
    });
  };

  getFilms = async () => {
    let data = await this.getData(this.filmURL);
    console.log("data get film " + data);
    this.setState({
      pageFilms: data.count,
      Films: data.results,
    });
  };

  componentDidMount() {
    this.getPeople();
    this.getPlanets();
    this.getFilms();
  }

  render() {
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
                  <Link className="nav-item nav-link active" to="/">
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

          <Switch>
            <Route
              path="/"
              exact
              render={() => <PeopleList Data={this.state.People}></PeopleList>}
            ></Route>
            <Route
              path="/planets"
              exact
              render={() => (
                <Fragment>
                  <PlanetsList Data={this.state.Planets}></PlanetsList>
                   
                  <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pagePlanets}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </Fragment>
              )}
            ></Route>
            <Route
              path="/films"
              exact
              render={() => <FilmList Data={this.state.Films}></FilmList>}
            ></Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
