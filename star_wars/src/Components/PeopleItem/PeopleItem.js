import React, { Component, Fragment } from "react";
import "./PeopleItem.css";
import {Link} from "react-router-dom";

class PeopleItem extends Component {
    state ={
    name: this.props.name,
	height: this.props.height,
	mass: this.props.mass,
	hair_color: this.props.hair_color,
	skin_color: this.props.skin_color,
	eye_color: this.props.eye_color,
	birth_year: this.props.birth_year,
	gender: this.props.gender,
    homeworld: this.props.homeworld  
  }
    render () {
        return (
            <Fragment>
                 <div class="card">
                    <img className="card-img-top" src="" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.name}</h5>
                        <p className="card-text">{this.state.mass}</p>
                        <p className="card-text">{this.state.hair_color}</p>
                        <p className="card-text">{this.state.skin_color}</p>
                        <p className="card-text">{this.state.eye_color}</p>
                        <p className="card-text">{this.state.birth_year}</p>
                        <p className="card-text">{this.state.gender}</p>
                        <p className="card-text">{this.state.homeworld}</p>
                    </div>
                    <div className="card-footer">
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PeopleItem;