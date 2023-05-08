import './App.css'
import { useRecoilState } from 'recoil'
import {strState} from './State'
import Header from './Header'
import Calculator from './Calculator'
import Help from './Help'
import About from './About'
import Footer from './Footer'

function App() {
  const [display] = useRecoilState(strState)
  return (
    <>
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
