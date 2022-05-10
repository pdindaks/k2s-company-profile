import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomeScreen from './pages/HomeScreen/HomeScreen';
import AboutUs from './pages/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import Solution from "./pages/Solution/Solution";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="homescreen" element={<HomeScreen />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="solution" element={<Solution />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
  rootElement
);