import React, { Component, Fragment } from "react";
import "./GroupList.css";

class GroupList extends Component{

    setData(e){
        e.preventDefault();
        let groupName = e.target.innerHTML;
        console.log(groupName);
        this.props.setGroup(this.props.contactId, groupName);
    }
    render() {
    var groups;
    if (this.props.dataGroup != null) {
        groups = this.props.dataGroup.map(item => {
            return (
                <button className="dropdown-item" onClick={this.setData.bind(this)}
                >
                {item.name}
                </button>
            );
        });
    }
    
    return (
        <Fragment>
                {groups}
        </Fragment>
    )
    }
}

export default GroupList;