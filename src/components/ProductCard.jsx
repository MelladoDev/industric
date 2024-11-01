import React, { useEffect } from "react";
import { useApi } from "../context/ApiContext";
import SkeletonMesh from '../components/SkeletonMesh';
import { Card } from "flowbite-react";

const ProductCard = () => {
  const { data, loading, error, fetchData } = useApi();
  
  useEffect(() => {
    fetchData("/products");
  }, []);

  if (loading) return <SkeletonMesh />; 
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data &&
        data.map((product) => (
          <Card
            key={product.id}
            className="px-5 pb-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <figure>
              <img
                src={product.image}
                alt={product.title}
                className="p-8 rounded-t-lg max-h-xs w-auto"
              />
            </figure>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{product.title}</h2>
            <p>{product.description}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default ProductCard;
