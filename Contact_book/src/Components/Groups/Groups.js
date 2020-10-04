import React, { Fragment } from "react";
import "./Groups.css";
import GroupItem from "../GroupItem/GroupItem";
import {Link} from "react-router-dom";


const Groups = ({ groups }) => {
    const groupItems = groups.map((g) => {
        console.log(g.users);
    return <GroupItem groupName={g.name} contacts={g.users} />
})
    return (
        <Fragment>
            <div className="container">
                <Link to="addGroup" className="btn btn-primary">Add group</Link>
                <hr></hr>
                {groupItems}
            </div>
        </Fragment>
    )
};


export default Groups;