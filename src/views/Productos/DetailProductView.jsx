import React, { useEffect, useState } from "react";
import { fetchGet } from "../../logic/ApiHelper";
import { useParams } from "react-router-dom";

const DetailProductView = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetchGet("https://kaoxdc.pythonanywhere.com/api/product/" + id).then(
      (response) => setProduct(response)
    );
  }, {useState});

  return (
    <div className="justify-center items-center">
      <img src={product.photo}/>
      <h1>{product.nombre}</h1>
      <h4>{product.precio}</h4>
      </div>
  );
};

export default DetailProductView;

