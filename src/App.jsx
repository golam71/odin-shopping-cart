import "./App.css";

import Footer from "./layout/Footer.jsx";
import Navbar from "./layout/Navbar.jsx";

import { Outlet } from "react-router";

import { useState } from "react";

function App() {
  const [storeData, setStoreData] = useState([]);
  return (
    <>
      <Navbar storeData={storeData} />
      <div id="main">
        <Outlet context={{ storeData, setStoreData }} />
      </div>
      <Footer />
    </>
  );
}

export default App;
