import React from 'react';
import './App.css';
import {getData} from "./util/products"
import Product from './components/Product';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: getData(),
    }
    console.log(this.state.products)
  } 

  render() {

    
  const mapped = this.state.products.map((product) => 
  <Product key={product.name} {...product}  /> 
  )

    return (
      <>
        { mapped }
      </>
    );
  }
}

export default App;
