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

  getPeople = async (dataURL = this.peopleURl) => {
    let data = await this.getData(dataURL);

    this.setState({
      pagePeople: data.count,
      People: data.results,
    });
  };

  getPlanets = async (dataURL = this.planetURL) => {
    console.log("URELE");
    console.log(dataURL);
    let data = await this.getData(dataURL);
    console.log("data get planet " + data);
    let count = data.count / data.results.length;
    this.setState({
      pagePlanets: count,
      Planets: data.results,
    });
  };

  getFilms = async (dataURL = this.filmURL) => {
    let data = await this.getData(dataURL);
    console.log("data get film " + data);
    this.setState({
      pageFilms: data.count,
      Films: data.results,
    });
  };

  onPagePlanetChange = (e) => {
    let page = e.selected + 1
    let dataurl = "https://swapi.dev/api/planets/?page=" + page;
    this.getPlanets(dataurl);
    let tmp = [];
    this.setState({
      Planets: tmp
    })
  }

  onPagePeopleChange = (e) => {
    let page = e.selected + 1
    let dataurl = "https://swapi.dev/api/people/?page=" + page;
    this.getPeople(dataurl);
    let tmp = [];
    this.setState({
      People: tmp
    })
  }

  onPageFilmsChange = (e) => {
    let page = e.selected + 1
    let dataurl = "https://swapi.dev/api/films/?page=" + page;
    console.log(dataurl);
    this.getFilms(dataurl);
    let tmp = [];
    console.log(tmp);
    this.setState({
      Films: tmp
    })
  }

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
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
          </div>

          <Switch>
            <Route
              path="/"
              exact
              render={() =>
                <Fragment>
                  <PeopleList Data={this.state.People}></PeopleList>
                  <div className="container text-center">
                    <ReactPaginate
                      previousLabel={"previous"}
                      nextLabel={"next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"} ї
                      onPageChange={this.onPagePeopleChange}
                      pageCount={this.state.pagePeople}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={2}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}

                    />
                  </div>
                </Fragment>}
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
                    breakClassName={"break-me"} ї
                    onPageChange={this.onPagePlanetChange}
                    pageCount={this.state.pagePlanets}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
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
              render={() =>
                <Fragment>
                  <FilmList Data={this.state.Films}></FilmList>
                  <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"} ї
                    onPageChange={this.onPageFilmsChange}
                    pageCount={this.state.pageFilms}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}

                  />
                </Fragment>
              }
            ></Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
