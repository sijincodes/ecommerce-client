import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

import "./FeaturedProducts.scss";

function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

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
        {error
          ? "Oops someting went wrong!"
          : loading
          ? "loading"
          : data?.map((elm, index) => <Card item={elm} key={index} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;
