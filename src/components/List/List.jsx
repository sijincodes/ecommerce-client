import React from "react";
import Card from "./../Card/Card";

import "./List.scss";

function List({catId,maxPrice,sort}) {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1578681994827-a9776963799c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1578681995025-03f3927ac671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Long Sleeve T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 14,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1578682442805-c592c161ccd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1578682442805-c592c161ccd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Aqua Sleeve T-shirt",
      isNew: false,
      oldPrice: 15,
      price: 9,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1585592049155-6642b799ab3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Aqua Shirt",
      desc: "Latest Trend of Summer 2023",
      isNew: true,
      oldPrice: 25,
      price: 20,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      img2: "https://images.unsplash.com/photo-1589234217365-08d3e0e5cf42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Denim Shirt",
      desc:"Perfect Fall shirt",
      isNew: false,
      oldPrice: 20,
      price: 18,
    },
   
  
  ]
  return (
    <div className="list">
      {data.map((elm, index) => (
        <Card item={elm} key={index} />
      ))}
    </div>
  );
}

export default List;
