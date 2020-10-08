import React, { Component, Fragment } from "react";
import "./Planet.css";
import {Link} from "react-router-dom";

class Planet extends Component {
    state ={
    name: this.props.name,
	rotation_period: this.props.rotation_period,
	orbital_period: this.props.orbital_period,
	diameter: this.props.diameter,
	climate: this.props.climate,
	gravity: this.props.gravity,
	terrain: this.props.terrain,
	surface_water: this.props.surface_water,
    population: this.props.population,
    created: this.props.created,
    edited: this.props.edited,
    url: this.props.url,
    id: null
  }

  setId() {
    let array = this.state.url.split("/");
    let _id = array[array.length-2]
    _id = 'https://starwars-visualguide.com/assets/img/planets/'  + _id + '.jpg';
    this.setState({
      id: _id,
    });
  }
  componentDidMount () {
      this.setId();
    //   console.log(this.state.id);
  }
    render () {
        return (
            <Fragment>
                 <div className="card">
                    <img className="card-img-top" src={this.state.id} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.name}</h5>
                        <p className="card-text">{this.state.rotation_period}</p>
                        <p className="card-text">{this.state.orbital_period}</p>
                        <p className="card-text">{this.state.diameter}</p>
                        <p className="card-text">{this.state.climate}</p>
                        <p className="card-text">{this.state.terrain}</p>
                        <p className="card-text">{this.state.population}</p>
                        <p className="card-text">{this.state.created}</p>
                    </div>
                    <div className="card-footer">
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Planet;