import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const FullstackWorks = lazy(() => import('./components/FullstackWork'));
const Works = lazy(() => import('./components/Works'));
const About = lazy(() => import('./components/About'));
const Tech = lazy(() => import('./components/Tech'));
const Contact = lazy(() => import('./components/Contact'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-r from-[#9D3E1A] to-blue-700">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-x-hidden">
          <Suspense fallback={<LoadingFallback />}>
            <Navbar />
            <Hero />
          </Suspense>
        </div>
        
        <Suspense fallback={<LoadingFallback />}>
          <FullstackWorks />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Works />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Tech />
        </Suspense>
        
        <div className="relative z-0">
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
