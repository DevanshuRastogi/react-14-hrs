import React from 'react'
import './App.css'
import ClassBasedComponent from './components/ClassBasedComponent'
import FunctionalComponent from './components/FunctionalComponent'
import ProductList from './components/product'
import NewComponentForPractice from './components/NewComponentForPractice'

function App() {
 
  const productDataDummy = [
    "Product-01",
    "Product-02",
    "Product-03",
    "Product-04",
  ];
  return (
    <div>
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalComponent/>  */}
      {/* <ProductList listOfProd= {productDataDummy} name= "Devanshu" country = "India ❤️"/> */}
      <NewComponentForPractice />
    </div>
  )
}

export default App
