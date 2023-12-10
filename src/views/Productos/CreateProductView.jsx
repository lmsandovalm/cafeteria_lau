import React from "react";
import CreateProductComponent from "../../components/Forms/CreateProductComponent";
import LayoutComponent from "../../components/Layout/LayoutComponent";
function CreateProductView() {
  return (
    <LayoutComponent>
      <div className="justify-center items-center p-2 bg-orange-100 float-right mt-3 text-red-950 text-lg rounded-lg shadow-lg">
      Nuevo Producto
      </div>
      <CreateProductComponent />
    </LayoutComponent>
  );
}

export default CreateProductView;
