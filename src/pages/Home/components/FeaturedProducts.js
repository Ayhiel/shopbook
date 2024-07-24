import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";


export const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:8000/featured_products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, [])

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:bg-gray-200 mb-5">Featured Books</h1>
        <div className="flex flex-wrap justify-center lg:flex-row">
            
            { products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}   

        </div>
    </section>
  )
}
