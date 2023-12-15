import React, { useEffect, useState } from "react";
import { fetchGet } from "../../logic/ApiHelper";
import { useParams } from "react-router-dom";

const DetailProductView = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetchGet("https://fakestoreapi.com/products/" + id).then(
      (response) => setProduct(response)
    );
  }, [id]);

  return (
    <div className="grid justify-center items-center">
      <div className="grid full justify-center items-center rounded-lg ">
        <img  src={product.image}/>
        <div className="justify-center items-center text-xl"> 
          <h1>Nombre Producto: {product.title}</h1>
          <h4>Precio: $ {product.price}</h4>
          <p>Descripcion: {product.description}</p>
        </div>
      </div>  
      </div>
  );
};

export default DetailProductView;

