import React, { Component, Fragment } from "react";
import "./App.css";
import ContactList from "./Components/ContactList/ContactList";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import uuid from "react-uuid";

import Page404 from "./Components/Page404/Page404";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";

class App extends Component {
  state = {
    List: [
      {
        id: 1,
        name: "Andrii Riabii",
        phone: "+380 (05) 41 66 765",
        email: "cuanid236316@gmail.com",
        address: "Soborna 16",
        gender: "men",
        avatar: 3,
        isFavarite: false,
      },
      {
        id: 2,
        name: "Kate Yaroshik",
        phone: "+380 (05) 23 11 885",
        email: "kate@gmail.com",
        address: "Soborna 35",
        gender: "women",
        avatar: 6,
        isFavarite: false,
      },
      {
        id: 3,
        name: "Vlad Lemonov",
        phone: "+380 (15) 11 11 222",
        email: "vlad@gmail.com",
        address: "Soborna 35",
        gender: "men",
        avatar: 1,
        isFavarite: false,
      },
    ],
    isCheck: false,
    currentContact: null,
  };

  changeFavorite = (id) => {
    const index = this.state.List.findIndex((t) => t.id === id);
    let tempList = this.state.List.slice();
    tempList[index].isFavarite = !tempList[index].isFavarite;
    this.setState({
      List: tempList,
    });
    console.log(this.state.List);
  };
  editContact = (id) => {
    const index = this.state.List.findIndex((item) => item.id === id);
    const currentContact = this.state.List[index];
    this.setState({
      currentContact: currentContact,
    });
  };
  saveContact = (obj) =>{
    const index = this.state.List.findIndex(x => x.id == obj.id);
    this.state.List[index] = obj;
  }
  addContact = (name, address, phone, email, avatar) => {
    const newContact = {
      id: uuid(),
      name: name,
      phone: phone,
      email: email,
      address: address,
      gender: "men",
      avatar: avatar,
      isFavorite: false,
    };

    console.log("NEW CONTACT ->", newContact);

    let tempList = [];
    if (this.state.List != null) {
      tempList = this.state.List.slice();
    }

    tempList.push(newContact);

    this.setState((state) => {
      return {
        List: tempList,
      };
    });
  };

  removeContact = (id) => {
    const indexRemoveElement = this.state.List.findIndex(
      (item) => item.id === id
    );
    this.state.List.splice(indexRemoveElement, 1);

    this.setState({
      isCheck: true,
    });
  };

  render() {
    return (
      <Fragment>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-10">
              <Link className="navbar-brand" to="/">
                Contact book
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
                    Contact list
                  </Link>
                  <Link className="nav-item nav-link" to="/favoriteContact">
                    Favorite contact
                  </Link>
                  <Link className="nav-item nav-link" to="/addContact">
                    Add contact
                  </Link>
                </div>
              </div>
            </nav>

            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <ContactList
                    DataContact={this.state.List}
                    changeFavorite={this.changeFavorite.bind(this)}
                    removeContact={this.removeContact.bind(this)}
                    editContact={this.editContact.bind(this)}
                    saveContact={this.saveContact.bind(this)}
                  ></ContactList>
                )}
              ></Route>

              <Route
                path="/favoriteContact"
                exact
                render={() => (
                  <ContactList
                    DataContact={this.state.List}
                    changeFavorite={this.changeFavorite.bind(this)}
                  ></ContactList>
                )}
              ></Route>

              <Route
                path="/addContact"
                exact
                render={() => (
                  <AddContact addContact={this.addContact}></AddContact>
                )}
              ></Route>

              <Route
                path="/editContact"
                exact
                render={() => (
                  <EditContact currentContact={this.state.currentContact}
                  saveContact={this.saveContact}></EditContact>
                )}
              ></Route>

              <Route path="*" render={() => <Page404></Page404>}></Route>
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
