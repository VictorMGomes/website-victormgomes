import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
   <Router>
     <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Contact" element={<Contact />} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
