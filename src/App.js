import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="*" element={<h1>404 Not Found !</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
