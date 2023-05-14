import './App.css'
import { useRecoilState } from 'recoil'
import {Routes, Route, Outlet} from "react-router-dom";
import Header from './Header'
import Calculator from './Calculator'
import Help from './Help'
import About from './About'
import Footer from './Footer'

function App() {
  return (
    <>

     <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Calculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </>
  )
}
function Layout() {
  return (
    <div>
      <Header />
      <h1>Calculator Application</h1>
      <hr />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App
