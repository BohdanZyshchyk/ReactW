import React, { Fragment, Component } from "react";
import { Redirect } from "react-router-dom";

class AddCotnact extends Component {

    state = {
        name: null,
        isSended: false
    };
    getName(event) {
        this.setState({
            name: event.target.value
        })
    }

   
    sendData(event) {
        event.preventDefault(); //
        const { name } = this.state;
        this.props.addGroup(name);
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
                <form onSubmit={this.sendData.bind(this)}>
                    <div className="form-group">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" onChange={this.getName.bind(this)} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                         </button>
                </form>
            </Fragment>
        )
    }
}

export default AddCotnact;