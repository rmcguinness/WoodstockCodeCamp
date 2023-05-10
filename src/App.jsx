import './App.css'
import { useRecoilState } from 'recoil'
import {strState} from './State'
import {Routes, Route, Outlet} from "react-router-dom";
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
        <Route path="/" element={<Layout />} >
          <Route index element={<Calculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>

      <h1>Calculator Application</h1>
      <div>State value is: {display}</div>

      <Calculator />
      <hr/>
      <Help />
      <hr/>
      <About />
    </>
  )
}
function Layout() {
  return (
    <div>
      <Header />
      <hr />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App
