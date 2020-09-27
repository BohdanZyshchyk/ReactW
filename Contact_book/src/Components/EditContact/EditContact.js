import React, { Fragment, Component } from "react";
import "./EditContact.css";
import {Redirect} from "react-router-dom";

class EditContact extends Component {

    state = {
        id: this.props.currentContact.id,
        name: this.props.currentContact.name,
        phone: this.props.currentContact.phone,
        address: this.props.currentContact.address,
        avatar: this.props.currentContact.avatar,
        email: this.props.currentContact.email,
        gender: this.props.currentContact.gender,
        isSended: false
    };
    getName(event) {
        this.setState({
            name: event.target.value
        })
    }
    getAddress(event) {
        this.setState({
            address: event.target.value
        })
    }
    getPhone(event) {
        this.setState({
            phone: event.target.value
        })
    }
    getAvatar(event) {
        this.setState({
            avatar: event.target.value
        })
    }
    getEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    sendNewData(event) {
        event.preventDefault(); //
        
        this.props.saveContact(this.state)

        this.setState({
            isSended: true
        })
    }

    render() {
        if (this.state.isSended === true) {
            return (<Redirect to="/"></Redirect>)
        }
        return (
            <Fragment>
                <form onSubmit={this.sendNewData.bind(this)}>
                    <div className="form-group">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input value={this.state.name} type="text" className="form-control" onChange={this.getName.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label for="Address">Address</label>
                            <input type="text" value={this.state.address} className="form-control" onChange={this.getAddress.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label for="Phone">Phone</label>
                            <input type="tel" value={this.state.phone} className="form-control" onChange={this.getPhone.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label for="Avatar">Avatar</label>
                            <input type="number" value={this.state.avatar} min="1" max="99" className="form-control" onChange={this.getAvatar.bind(this)} />
                        </div>
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={this.state.email}
                            onChange={this.getEmail.bind(this)}
                        />
                    </div>
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />

                    </div>
                    <button type="submit" className="btn btn-primary" >
                        Submit
                         </button>

                </form>
            </Fragment>
        )
    }
}

export default EditContact;