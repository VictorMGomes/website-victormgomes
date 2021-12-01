import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Signup from "./components/pages/Signup";

function App() {
  return (
   <Router>
     <Header />
     <Container className="container"> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </Container>
    <Footer />
   </Router>
  );
}

export default App;
