import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    if (!products || !Array.isArray(products)) return;
    
    const bestProducts = products.filter((item) => item.bestseller);
    setBestseller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          officiis eaque sint, fugit quo laborum.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestseller.length > 0 ? (
          bestseller.map((item,index) => (
            <ProductItem
              key={index} // Corrected key
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p className="text-center w-full col-span-5 text-gray-500">
            No Best Sellers Available
          </p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
