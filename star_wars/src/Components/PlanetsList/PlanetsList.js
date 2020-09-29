import React, { Fragment } from "react";
import "./PlanetsList.css";
import Planet from "../Planet/Planet";

const PlanetsList = ({ Data }) => {
  var contact;
  // console.log("Data on list " + Data);
  if (Data != null) {
    contact = Data.map((item) => {
      return (
        <Planet
          name={item.name}
          rotation_period={item.rotation_period}
          orbital_period={item.orbital_period}
          diameter={item.diameter}
          climate={item.climate}
          gravity={item.gravity}
          terrain={item.terrain}
          surface_water={item.surface_water}
          population={item.population}
          created={item.created}
          edited={item.edited}
          url={item.url}
        ></Planet>
      );
    });
  }

  return (
    <Fragment>
      <div className="container">
        <div className="card-deck">{contact}</div>
      </div>
    </Fragment>
  );
};

export default PlanetsList;
