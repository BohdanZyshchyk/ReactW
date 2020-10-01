import React, { Fragment } from "react";
import "./SearchContactList.css";
import ContactItem from "../ContactItem/ContactItem";

const SearchContactList = ({ DataContact, changeFavorite, removeContact, editContact, saveContact }) => {

    var contact;
    if (DataContact != null) {
        contact = DataContact.map(item => {
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

export default SearchContactList;