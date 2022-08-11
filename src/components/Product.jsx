import React from 'react';
import ImgProduct from "./ImgProduct";
import InfoProduct from "./InfoProduct";

const Product = ({cat,name,price,stock,img,benefits}) => {

    return (
        <div className="parent__box">
          <ImgProduct img={img} />
          <InfoProduct cat={cat} name={name} price={price} stock={stock} benefits={benefits} />
        </div>
    );
}

export default Product;
