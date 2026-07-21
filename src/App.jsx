import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Team from './pages/Team'
import Facts from './pages/Facts'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/team" element={<Team />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
