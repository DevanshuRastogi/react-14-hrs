import React from "react";
import SubProduct from "./components/SubProduct";

const ProductList = ({name , country , listOfProd}) => {
   
   console.log(`${name} ${country}`)
  return (
      <div>
      Ecommerce Projects
      {/* <SubProduct/> */}
      <ul>
        {listOfProd.map((item,index) => (
          <li key ={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
