import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList, CartPage, DashboardPage, OrderPage, ProductDetails } from "../pages";

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/order" element={<OrderPage />} />
        </Routes>
    </>
  )
}
