import React from "react";
import AddWood from "./categories/AddWood";
import AddBrand from "./categories/AddBrand";

const AddCategories = _ => {
  return (
    <div className="addcategory__container">
      <div className="newproduct__container newproduct__title">
        Add a new brand & wood
      </div>
      <AddWood />
      <AddBrand />
    </div>
  );
};

export default AddCategories;
