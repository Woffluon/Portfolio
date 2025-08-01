import React, { Suspense, lazy } from "react";
import ReactLenis from "lenis/react";
import SEO from "./components/SEO";

// Lazy load all the sections
const Navbar = lazy(() => import('./sections/Navbar'));
const Hero = lazy(() => import('./sections/Hero'));
const ServiceSummary = lazy(() => import('./sections/ServiceSummary'));
const Services = lazy(() => import('./sections/Services'));
const About = lazy(() => import('./sections/About'));
const Works = lazy(() => import('./sections/Works'));
const ContactSummary = lazy(() => import('./sections/ContactSummary'));
const Contact = lazy(() => import('./sections/Contact'));

const App = () => {


  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <SEO />

      <Suspense fallback={null}>
        <div>
          <Navbar />
          <main>
            <Hero />
            <ServiceSummary />
            <Services />
            <About />
            <Works />
            <ContactSummary />
            <Contact />
          </main>
        </div>
      </Suspense>
    </ReactLenis>
  );
};

export default App;
