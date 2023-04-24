import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Works from "./Pages/Works/Works";
import Contacts from "./Pages/Contacts/Contacts";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
