import "./App.css";

import Footer from "./layout/Footer.jsx";
import Navbar from "./layout/Navbar.jsx";

import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
