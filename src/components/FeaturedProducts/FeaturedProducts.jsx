import React from "react";
import Card from "../Card/Card";

import "./FeaturedProducts.scss";

function FeaturedProducts({ type }) {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          dolor harum, neque quasi, consectetur architecto corporis tempora
          commodi perferendis quia ratione cum odit accusamus fuga obcaecati.
          Rem, perferendis! Neque, optio.
        </p>
      </div>
      <div className="bottom">
        {data.map((elm,index)=>(
            <Card item={elm} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
