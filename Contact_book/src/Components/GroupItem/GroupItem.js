import React, { Component, Fragment } from "react";
import "./GroupItem.css";
import {Link} from "react-router-dom";
import ContactItem from "../ContactItem/ContactItem";
import ContactList from "../ContactList/ContactList";

class GroupItem extends Component {

    render(){
        var items = this.props.contacts.map((c) => {
            return <ContactList DataContact={this.props.contacts} />
        });
        return (
            <div className="container">
            <h3 className="card-title text-left">{this.props.groupName}</h3>
            <div className="card-deck">
                {items}
            </div>
            <hr className="my-4"></hr>
        </div>
    )
}
}


export default GroupItem;