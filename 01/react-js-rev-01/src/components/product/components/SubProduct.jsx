import React from "react";
import styles from "./prod-single.module.css";
const ButtonProd = () => {
  return <button>Order Me</button>;
};

const SubProduct = ({ singleItem }) => {
  return (
    <div style={{ padding :"12px" , border:"1px solid red" ,margin:"20px"}}>
      <h2 className={styles.prodTitle}>{singleItem}</h2>
      <ButtonProd className={styles.butnStyle} />
    </div>
  );
};

export default SubProduct;
