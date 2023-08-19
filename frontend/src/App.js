import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Checkout from "./pages/Checkout";
import Flight from "./pages/Flight";

function App(){

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/flight" element={<Flight />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
