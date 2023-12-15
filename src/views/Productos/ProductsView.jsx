import React, { useEffect, useState } from "react";
import LayoutComponent from "../../components/Layout/LayoutComponent";
import ItemProducto from "../../components/productos/ItemProduct";
import { fetchGet } from "../../logic/ApiHelper";
import { Link } from "react-router-dom";

function ProductsView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchGet("https://fakestoreapi.com/products").then((response) => {
      setProducts(response);
    });    
  }, []);

  return (
    <LayoutComponent>
      <div>
        <div className="w-full">
          <div>
            <Link className="justify-center items-center p-2 bg-orange-300 float-right mt-3 text-red-950 text-lg rounded-lg shadow-lg" to="/CreateProduct">Nuevo Producto</Link>
          </div>

          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {products?.map((product) => (
              <ItemProducto
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}
export default ProductsView;
