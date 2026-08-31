import Header from './sections/Header'
import Intro from './sections/Intro'
import Stack from './sections/Stack'
import Projects from './sections/Projects'
import About from './sections/About'
import Footer from './sections/Footer'
import './App.css'

function App() {

  return (
    <>
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#58c4dc] focus:text-[#16171d] focus:rounded-lg focus:font-medium focus:outline-none"
      >
        Skip to main content
      </a>

      <Header />
      <main id="main-content">
        <Intro />
        <Stack />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
