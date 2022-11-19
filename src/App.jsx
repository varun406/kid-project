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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/checkout-form/CheckoutForm";
import Completion from "./components/completion/Completion";
import Payment from "./components/payment/Payment";
import { GlobalStyles } from "./components/CommonStyles";

export const SidebarContext = createContext(null);
const stripePromise = loadStripe(
  "pk_test_51M5m7jSADZVubAzgrHFuhwxrmqdG3T0Co9FuoH42GMKiWI614ILKGTBYmYzLNUfSsP6XmMdJmng0IgueV0h2DoEW00CBXheiKu"
);

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: `{{sk_test_51M5m7jSADZVubAzgaAcrEfGnWr8ZfslPMBTYZiYqVW8Ay7Qt9OgfpsRsRlTYCmQPSeAKUawamueg4ogDw0oXfKqP00dGdokuQI}}`,
  };

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
            <Route path="/complete" element={<Completion />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
          </Routes>
        </Router>
      </SidebarContext.Provider>
    </div>
  );
};

export default App;
