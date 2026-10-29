import React, { useEffect, useState } from 'react'

const ProductCard = ({product}) => {

    

    return (
      <div className="flex flex-wrap justify-start gap-3 items-">
        {product.map((item) => (
          <div
            className="card h-[300px] w-[400px] bg-white mt-3 text-[20px] shadow-lg  shadow-blue-500/50   rounded-3xl px-4 py-2"
            key={item.id}
          >
            <p>{item.title}</p>
            <img src={item.image} className="h-[60%]" alt="" />
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    );
}

export default ProductCard