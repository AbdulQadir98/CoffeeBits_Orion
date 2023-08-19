import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'

import Home from "./pages/Home";
import Info from "./pages/Info";
import Checkout from "./pages/Checkout";
import Flight from "./pages/Flight";

function App(){

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/flight" element={<Flight />} />
        </Routes>
      </Router>
    </Provider>
  )
}
export default App
