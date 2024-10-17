import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Home from "./componets/Home";
import Product from "./componets/Product";
import Notfound from "./componets/Notfound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="*" element={<Notfound />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
