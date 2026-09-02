import Header from './sections/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Process from './sections/Process'
import About from './sections/About'
import Footer from './sections/Footer'
import './App.css'

function App() {

  return (
    <>
      {/* Skip to main content link for keyboard navigation */}
      {/* <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#58c4dc] focus:text-[#16171d] focus:rounded-lg focus:font-medium focus:outline-none"
      >
        Skip to main content
      </a> */}

      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
