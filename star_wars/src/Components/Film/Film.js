import React, { Component, Fragment } from "react";
import "./Film.css";
import { Link } from "react-router-dom";

class Film extends Component {
  state = {
    title: this.props.title,
    episode_id: this.props.episode_id,
    opening_crawl: this.props.opening_crawl,
    director: this.props.director,
    producer: this.props.producer,
    url: this.props.url,
    id: null,
  };
  
  setId() {
    let array = this.state.url.split("/");
    let _id = array[array.length-2]
    _id = 'https://starwars-visualguide.com/assets/img/films/'  + _id + '.jpg';
    this.setState({
      id: _id,
    });
  }
  componentDidMount () {
      this.setId();
    //   console.log(this.state.id);
  }

  render() {
    return (
      <Fragment>
        <div className="card">
          <img className="card-img-top" src= {this.state.id} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.state.title}</h5>
            <p className="card-text">{this.state.episode_id}</p>
            <p className="card-text">{this.state.opening_crawl}</p>
            <p className="card-text">{this.state.director}</p>
            <p className="card-text">{this.state.producer}</p>
            <p className="card-text">{this.state.url}</p>
            <p className="card-text">Pic ID</p>
            <p className="card-text">{this.state.id}</p>
          </div>
          <div className="card-footer"></div>
        </div>
      </Fragment>
    );
  }
}

export default Film;
