import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const Header = () => {
    return (
        <header>
            <nav className="bg-white dark:bg-gray-900">
                <div className="border-gray-200 border-b-2 dark:border-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="ShopBook Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ShopBook</span>
                    </Link>
                    <div className="flex items-center gap-6 text-gray-900 dark:text-white">
                        <span className="text-xl cursor-pointer bi bi-gear-fill"></span>
                        <span className="text-xl cursor-pointer bi bi-search"></span>
                        <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                            <span className="text-2xl bi bi-cart-fill relative">
                                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                            </span>                    
                        </Link>
                        <span className="text-xl cursor-pointer bi bi-person-circle"></span>
                    </div>
                </div>
            </nav>
        </header>
    )
  }