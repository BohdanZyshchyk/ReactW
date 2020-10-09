import React, { Fragment } from "react";
import "./PeopleList.css";
import PeopleItem from "../PeopleItem/PeopleItem";

const PeopleList = ({ Data }) => {
  var contact;
  // console.log("Data on list " + Data);
  if (Data != null) {
    contact = Data.map((item) => {
      return (
        <PeopleItem
          name={item.name}
          height={item.height}
          mass={item.mass}
          hair_color={item.hair_color}
          skin_color={item.skin_color}
          eye_color={item.eye_color}
          birth_year={item.birth_year}
          gender={item.gender}
          homeworld={item.homeworld}
          url={item.url}
        ></PeopleItem>
      );
    });
  }

  return (
    <Fragment>
      <div className="container-fluid">
      <div className="container">
        <div className="row">{contact}</div>
      </div>
      </div>
    </Fragment>
  );
};

export default PeopleList;
