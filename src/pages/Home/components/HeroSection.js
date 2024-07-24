import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
        <div className="text my-5">
            <h1 className="text-5xl font-bold dark:text-white">The One-stop Shop for Books</h1>
            <p className="text-2xl my-7 px-1 dark:text-slate-300">The ShopBook is one of the best site for learning new things and ideas about everything.</p>
            <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to="/products" type="button">Explore ShopBook</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full" src="https://images.ctfassets.net/3s5io6mnxfqz/p0iMWAqWk2KIqF5HOwpoq/3bf7bd1d1781041ceb1d202ed0358fab/AdobeStock_272072948.jpeg?w=1920" alt="ShopBook Hero Section" />
        </div>
    </section>
  )
}
