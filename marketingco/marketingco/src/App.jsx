import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Process from './pages/Process'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut')
    }
  }, [location, displayLocation])

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransitionStage('fadeIn')
          setDisplayLocation(location)
          window.scrollTo({ top: 0, behavior: 'instant' })
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/services"     element={<Services />} />
        <Route path="/process"      element={<Process />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact"      element={<Contact />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </>
  )
}

export default App