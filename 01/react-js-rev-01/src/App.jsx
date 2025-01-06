import React from "react";
import "./App.css";
import ClassBasedComponent from "./components/ClassBasedComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import ProductList from "./components/product";
import NewComponentForPractice from "./components/NewComponentForPractice";
import Users from "./components/users";
import Btns from "./components/context-components/btns";
import TextContent from "./components/context-components/TextContent";

function App() {
  return (
    <div>
      {/* <Users/> */}
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalComponent/>  */}
      {/* <ProductList listOfProd= {productDataDummy} name= "Devanshu" country = "India ❤️"/> */}
      {/* <NewComponentForPractice /> */}
      <TextContent />
      <Btns />
    </div>
  );
}

export default App;
