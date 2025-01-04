import React from "react";
import SubProduct from "./components/SubProduct";
import "./style.css";

const ProductList = ({ name, country, listOfProd }) => {
  const flag = true;

  // function renderTextBlock(getFlag) {
  //   return getFlag ? (
  //     <h1>
  //       Hey {name} from {country}
  //     </h1>
  //   ) : (
  //     <h6>hello world</h6>
  //   );
  // }

  let renderTextBlock = flag ? (
    <h1>
      Hey {name} from {country}
    </h1>
  ) : (
    <h6>hello world</h6>
  );
  return (
    <div>
      <h1 className="head-1"> Ecommerce Projects</h1>
      {renderTextBlock}

      {/* <SubProduct/> */}
      <ul>
        {listOfProd.map((item, index) => (
          //   <li key ={index}>{item}</li>
          <SubProduct singleItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
