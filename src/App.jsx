import About from "./components/About/About";
import Award from "./components/Award/Award";
import Client from "./components/Client/Client";
import Connect from "./components/Connect/Connect";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import Portfolio from "./components/Portfolio/Portfolio";
import Service from "./components/Service/Service";
import Team from "./components/Team/Team";
import Testimonial from "./components/Testimonial/Testimonial";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <NavbarMobile />
      <div className="wrapper overflow-hidden">
        <Header />
        <About />
        {/* <Team /> */}
        <Service />
        <Portfolio />
        <Testimonial />
        <Client />
        <Award />
        <Connect />
        <Contact />
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
