
import Hero from "./components/hero";
import Dietition from "./components/hero/Dietition";
import Services from "./components/services/Services";
import HowItWorks from "./components/HowItWorks";
import WhatWeDo from "./components/WhatWeDo";
import PlansSlider from "./components/PlansSlider";

const Layout = () => {
  return (
    <main>
      <Hero />
      <Dietition />

      <Services />
      <HowItWorks />
      <WhatWeDo />
      <PlansSlider />
    </main>
  );
};

export default Layout;
