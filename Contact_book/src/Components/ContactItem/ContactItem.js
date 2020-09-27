import React, { Component, Fragment } from "react";
import "./ContactItem.css";
import {Link} from "react-router-dom";

class ContactItem extends Component {

    state = {
        key: this.props.key,
        name: this.props.name,
        phone: this.props.phone,
        email: this.props.email,
        address: this.props.address,
        gender: this.props.gender,
        avatar: this.props.avatar,
        isFavarite: this.props.isFavarite
    }


    setRandomImage() {
        const randomAvatar = Math.floor(Math.random() * Math.floor(99));

        this.setState({
            avatar: randomAvatar
        });
    }

    render() {
        const { name, email, avatar, address, phone, gender } = this.state;
        const URL_image = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;

        var class_star = "fas fa-star fa-2x icon";
        if (this.props.isFavarite === false) {
            class_star = "far fa-star fa-2x icon";
        }

        return (
            <Fragment>
                <div class="card">
                    <img className="card-img-top" src={URL_image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{phone}</p>
                        <p className="card-text">{email}</p>
                        <p className="card-text">{address}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-info" onClick={this.setRandomImage.bind(this)}>RANDOM IMAGE</button>
                        <i className={class_star} onClick={this.props.changeFavorite} ></i>
                        <i className="fas fa-trash-alt fa-2x trash" onClick={this.props.removeContact}></i>
                        <Link  to="/editContact">
                            <i className="fas fa-edit fa-2x edit" onClick={this.props.editContact}></i>
                        </Link>
                    </div>
                </div>
            </Fragment >
        )
    }

}

export default ContactItem;