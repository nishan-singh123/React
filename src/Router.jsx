import { BrowserRouter, Outlet, Route, Routes } from "react-router";

import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductsCartPage from "./pages/Cart";
import ProductsDetailsPage from "./pages/ProductsDetails";
import MainLayout from "./layout/MainLayout";
import ProductsLayout from "./layout/ProductsLayout";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainLayout />}
                >
                    <Route index element={<App />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />

                    {/* Route group*/}
                    <Route
                        path="products"
                        element={
                            <ProductsLayout />
                        }
                    >
                        <Route index element={<Products />} />
                        <Route path="cart" element={<ProductsCartPage />} />
                        <Route path=":id" element={<ProductsDetailsPage />} />
                    </Route>
                </Route>

                <Route path="auth">
                    <Route path="login" element={"Login Page"} />
                    <Route path="register" element={"Register Page"} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
