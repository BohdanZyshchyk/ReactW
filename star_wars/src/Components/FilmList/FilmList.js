import React, { Fragment } from "react";
import "./FilmList.css";
import Planet from "../Film/Film";

const FilmList = ({ Data }) => {
  var contact;
  // console.log("Data on list " + Data);
  if (Data != null) {
    contact = Data.map((item) => {
      return (
        <Planet
          title={item.title}
          episode_id={item.episode_id}
          opening_crawl={item.opening_crawl}
          director={item.director}
          producer={item.producer}
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

export default FilmList;
