import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "tailwindcss";

import Home from "./Components/pages/Home";
import Create from "./Components/pages/Create";
import Navbar from "./Components/comps/Navbar";
import { ProductProvider } from "./Components/context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
