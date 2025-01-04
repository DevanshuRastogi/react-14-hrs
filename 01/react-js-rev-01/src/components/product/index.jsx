import React from "react";
import SubProduct from "./components/SubProduct";
import './style.css'

const ProductList = ({name , country , listOfProd}) => {
   
   console.log(`${name} ${country}`)
  return (
      <div>
     <h1 className="head-1"> Ecommerce Projects</h1>
      {/* <SubProduct/> */}
      <ul>
        {listOfProd.map((item,index) => (
        //   <li key ={index}>{item}</li>
        <SubProduct singleItem = {item} key={index}/>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
