import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import { createContext, useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./pages/products/Products";

export const SidebarContext = createContext(null);

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="App">
      <SidebarContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
        <Router>
          {isSidebarOpen && <Sidebar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Router>
      </SidebarContext.Provider>
    </div>
  );
};

export default App;
