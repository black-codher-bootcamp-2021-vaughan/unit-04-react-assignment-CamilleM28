import "./styles/App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import productList from "./models/data.json";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import About from "./pages/About";
import Search from "./components/Search";
import BasketList from "./components/BasketList";
import BasketTotal from "./components/BasketTotal";
import BasketCount from "./components/BasketCount";
import Pagination from "./components/Pagination";

function App() {
  const [products, setProducts] = useState(productList);
  const [basket, setBasket] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="body">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="styledTitle">Media Store</h1>
                <Header basket={basket} />
                <Search search={search} setCurrentPage={setCurrentPage} />
                <div id="results">
                  <ProductList
                    products={currentProducts}
                    addToBasket={addToBasket}
                  />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                />
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <h1 className="styledTitle">About</h1>
                <Header basket={basket} />
                <About />
              </>
            }
          />

          <Route
            path="basket"
            element={
              <>
                <h1 className="styledTitle">Basket</h1>
                <Header basket={basket} />
                <div className="basketInfo">
                  <BasketCount basket={basket} />
                  <BasketTotal basket={basket} />
                </div>
                <div id="results">
                  <BasketList
                    basket={basket}
                    removeFromBasket={removeFromBasket}
                  />
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </section>
  );

  async function search(text) {
    const url = `https://itunes.apple.com/search?term=${text}&limit=60`;
    const results = await fetch(url).then((res) => res.json());
    setProducts(results.results);
  }

  function addToBasket(track) {
    setBasket(
      basket.concat(
        products.filter((product) => product.trackId === track.trackId)
      )
    );
    setProducts([
      ...products.map((product) => {
        if (product === track) {
          product.inBasket = true;
        }
        return product;
      }),
    ]);
  }

  function removeFromBasket(track) {
    setBasket(
      basket.filter((basketItem) => basketItem.trackId !== track.trackId)
    );

    setProducts([
      ...products.map((product) => {
        if (product === track) {
          product.inBasket = false;
        }
        return product;
      }),
    ]);
  }
}

export default App;
