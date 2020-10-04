import React, { Component, Fragment } from "react";
import "./GroupItem.css";
import { Link } from "react-router-dom";
import ContactItem from "../ContactItem/ContactItem";
import ContactList from "../ContactList/ContactList";

class GroupItem extends Component {

    render() {
        return (
            <div className="container">
                <div className="container my-container">
                    <div className="row">
                        <div className="col-10">
                            <h3 className="card-title text-left">{this.props.groupName}</h3>
                        </div>
                        <div className="col-2">
                            <i className="fas fa-trash-alt fa-2x trash" onClick={this.props.removeGroup}></i>
                        </div>
                    </div>
                    <div className="container">
                        <ContactList DataContact={this.props.contacts} />
                    </div>
                </div>
            </div>
        )
    }
}


export default GroupItem;