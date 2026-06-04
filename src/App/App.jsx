import React from "react";
import { useSelector } from "react-redux";
import Sec1 from "./Sections/Sec1/Sec1";
import Sec2 from "./Sections/Sec2/Sec2";
import SecSkills from "./Sections/SecSkills/SecSkills";
import WorksSec from "./Sections/WorksSec/WorksSec";
import SecServices from "./Sections/SecServices/SecServices";
import SecContact from "./Sections/SecContact/SecContact";
import Footer from "./Layouts/Footer.jsx/Footer";
import Particles from "./Components/Particles/Particles";

const App = () => {
  const theme = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  // Couleurs des particules selon le thème
  const particleColors = isDark
    ? ["#ffffff", "#ffffff"]
    : ["#e11d74", "#ff2f7d", "#b51763"];

  return (
    <>
      <div className="app-container">
        <Particles
          key={theme} // force re-render quand le thème change
          particleColors={particleColors}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

        <Sec1 />
        <Sec2 />
        <SecSkills />
        <WorksSec />
        <SecServices />
        <SecContact />
        <Footer />
      </div>
    </>
  );
};

export default App;
