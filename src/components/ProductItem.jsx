import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="w-60 h-85  ">
        <div className="overflow-hidden  rounded-2xl w-60 h-68  ">
          <img
            className="hover:scale-110  transition ease-in-out"
            src={image}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name} </p>
        <p className="text-sm font-medium">
          {currency}
          {price}{" "}
        </p>
      </div>
      {/* <div className='overflow-hidden '>
                <img className='hover:scale-110 transition ease-in-out' src={image} alt=''/>
            </div>
            <p className='pt-3 pb-1 text-sm'>{name} </p>
            <p className='text-sm font-medium'>{currency}{price} </p> */}
    </Link>
  );
}
export default ProductItem;
