import React  from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch.js";
import { useEffect, useState } from "react";
import NotFound from "../NotFound/NotFound";

const List = ({ subCats, maxPrice, sort, catId,setSearchQuery,searchQuery }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if (data && !loading)
      setFilteredData(
        data.filter((elm) => {
          return elm.attributes.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
      );
  }, [data, searchQuery]);

  return (
    <div className="list">
      {(filteredData.length>0)
        ? filteredData?.map((item) => <Card item={item} key={item.id} />)
        : <NotFound /> }
    </div>
  );
};

export default List;
