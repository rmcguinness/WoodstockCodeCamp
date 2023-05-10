import './App.css'
import { useRecoilState } from 'recoil'
import {strState} from './State'
import {Routes, Route} from "react-router-dom";
import Header from './Header'
import Calculator from './Calculator'
import Help from './Help'
import About from './About'
import Footer from './Footer'

function App() {
  const [display] = useRecoilState(strState)
  return (
    <>
     <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <h1>Calculator Application</h1>
      <div>State value is: {display}</div>

      <Header />
      <hr/>
      <Calculator />
      <hr/>
      <Help />
      <hr/>
      <About />
      <hr/>
      <Footer />
    </>
  )
}

export default App
