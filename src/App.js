import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Importe tes sections/components
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer.js/Footer";
import Sec1 from "./Sections/Sec1/Sec1";
import Sec2 from "./Sections/Sec2/Sec2";
import SecContact from "./Sections/SecContact/SecContact";
import SecServices from "./Sections/SecServices/SecServices";
import SecSkills from "./Sections/SecSkills/SecSkills";
import WorksSec from "./Sections/WorksSec/WorksSec";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Sec1 />} />
        <Route path="/about" element={<Sec2 />} />
        <Route path="/services" element={<SecServices />} />
        <Route path="/skills" element={<SecSkills />} />
        <Route path="/works" element={<WorksSec />} />
        <Route path="/contact" element={<SecContact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
