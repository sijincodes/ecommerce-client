import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";

import "./App.scss";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import UnderContruction from "./pages/UnderContruction/UnderContruction";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Outlet context={[searchQuery, setSearchQuery]} />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/Coming-Soon",
        element: <UnderContruction />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
