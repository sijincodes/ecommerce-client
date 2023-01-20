import React from "react";
import Card from "./../Card/Card";

import "./List.scss";

function List() {
  return (
    <div className="list">
      {data.map((elm, index) => (
        <Card item={elm} key={index} />
      ))}
    </div>
  );
}

export default List;
