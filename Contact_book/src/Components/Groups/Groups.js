import React, { Fragment } from "react";
import "./Groups.css";
import GroupItem from "../GroupItem/GroupItem";
import {Link} from "react-router-dom";


const Groups = ({ contacts, groups }) => {
    let key = 1;
    const groupItems = groups.map((g) => {
    let contactItems = contacts.filter((c) => {
        return c.group === g;
    });
    return <GroupItem key={key++} groupName={g} contacts={contactItems} />
})
    return (
        <Fragment>
            <div className="container">
                <Link to="addGroup" className="btn btn-primary">Add group</Link>
                <Link to="listGroups" className="btn btn-primary">List groups</Link>
                <hr className="my-4"></hr>
                {groupItems}
            </div>
        </Fragment>
    )
};


export default Groups;