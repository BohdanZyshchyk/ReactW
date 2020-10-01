import React, { Component, Fragment } from "react";
import "./App.css";
import ContactList from "./Components/ContactList/ContactList";
import FavContactList from "./Components/FavContactList/FavContactList";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import uuid from "react-uuid";

import Page404 from "./Components/Page404/Page404";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";
import SearchContactList from "./Components/SearchContactList/SearchContactList";

class App extends Component {
  state = {
    List: [],
    searchedList: [],
    searchQuery: null,
    isCheck: false,
    currentContact: null,
  };

  URL = "https://contactbook-9f583.firebaseio.com/list.json"

  getContacts = () => {
    fetch(this.URL, { method: "GET" })
      .then(data => {
        return data.json();
      })
      .then(contacts => {
        console.log(contacts);
        this.setState({
          List: contacts
        })
      })
      .catch(error => {
        console.log("Error: ", error);
      })
  }
  componentDidMount() {
    this.getContacts();
  }

  saveChanges(listData) {
    fetch(this.URL, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(listData)
    })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  changeFavorite = (id) => {
    const index = this.state.List.findIndex((t) => t.id === id);
    let tempList = this.state.List.slice();
    tempList[index].isFavarite = !tempList[index].isFavarite;
    this.saveChanges(tempList);
    this.setState({
      List: tempList,
    });
  };
  editContact = (id) => {
    const index = this.state.List.findIndex((item) => item.id === id);
    const currentContact = this.state.List[index];
    this.saveChanges(this.state.List);
    this.setState({
      currentContact: currentContact,
    });
  };
  saveContact = (obj) => {
    const index = this.state.List.findIndex(x => x.id == obj.id);
    this.state.List[index] = obj;
    this.saveChanges(this.state.List);
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
    this.saveChanges(this.state.List);

    this.setState({
      isCheck: true,
    });
  };

  setSearch = (event) =>{
    this.setState({
      searchQuery:event.target.value,
    });
  }

  initSearch = () =>{
    let searched = this.state.List.filter(item =>{
      if(item.name == this.state.searchQuery || 
        item.phone == this.state.searchQuery ||
        item.email == this.state.searchQuery ||
        item.address == this.state.searchQuery )
        return item;
    })
    this.setState({
      searchedList:searched,
    });
  }

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
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.setSearch.bind(this)} aria-label="Search" />
                  <Link class="btn btn-outline-success my-2 my-sm-0" to="/searchContact" onClick={this.initSearch.bind(this)} >Search</Link>
                </form>
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
                  <FavContactList
                    DataContact={this.state.List}
                    changeFavorite={this.changeFavorite.bind(this)}
                  ></FavContactList>
                )}
              ></Route>

              <Route
                path="/searchContact"
                exact
                render={() => (
                  <SearchContactList
                    DataContact={this.state.searchedList}
                    changeFavorite={this.changeFavorite.bind(this)}
                  ></SearchContactList>
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
