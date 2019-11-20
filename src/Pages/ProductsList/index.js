import React from 'react';
import Card from '../HomePage/Carousel/Card';

const ProductList = ({ products }) => {
  const AllProducts = products.map((item, ind) => {
    const key = ind;
    return <Card key={key} data={item}>{item.description}</Card>;
  });
  return (
    <div>
      <h1>{AllProducts}</h1>
    </div>
  );
};

export default ProductList;