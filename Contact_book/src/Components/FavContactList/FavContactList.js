import React, { Fragment } from "react";
import "./FavContactList.css";
import ContactItem from "../ContactItem/ContactItem";

const FavContactList = ({ DataContact, changeFavorite, removeContact, editContact, saveContact }) => {

    var contact;
    if (DataContact != null) {
        contact = DataContact.map(item => {
            console.log(item.isFavarite);
            if (item.isFavarite === true) {
                return (
                    <ContactItem
                        key={item.id}
                        name={item.name}
                        phone={item.phone}
                        email={item.email}
                        address={item.address}
                        gender={item.gender}
                        avatar={item.avatar}
                        isFavarite={item.isFavarite}
                        changeFavorite={() => changeFavorite(item.id)}
                        removeContact={() => removeContact(item.id)}
                        editContact={() => editContact(item.id)}
                        saveContact={() => saveContact(item.id)}
                    >
                    </ContactItem>
                );
            }
        });
    }

    return (
        <Fragment>
            <div className="card-deck">
                {contact}
            </div>
        </Fragment>
    )

}

export default FavContactList;