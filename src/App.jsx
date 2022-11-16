import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
