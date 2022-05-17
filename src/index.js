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
import OurProject from "./pages/OurProject/OurProject";
import PowerSolution from "./pages/PowerSolution/PowerSolution";
import BatteryManagementSystem from "./pages/BatteryManagementSystem/BatteryManagementSystem";
import DigitalPlatform from "./pages/DigitalPlatform/DigitalPlatfom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="homescreen" element={<HomeScreen />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="our-project" element={<OurProject />} />
      <Route path="power-solution" element={<PowerSolution />} />
      <Route path="battery-mngmnt-system" element={<BatteryManagementSystem />} />
      <Route path="digital-platform" element={<DigitalPlatform />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
  rootElement
);