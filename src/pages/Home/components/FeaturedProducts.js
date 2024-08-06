import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services";
import { toast } from "react-toastify";


export const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchProducts();
  }, [])

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold rounded-md dark:bg-gray-200 mb-5">Featured Books</h1>
        <div className="flex flex-wrap justify-center lg:flex-row">
            
            { products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}   

        </div>
    </section>
  )
}
