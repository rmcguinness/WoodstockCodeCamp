import { Routes, Route, Outlet } from "react-router-dom";
import Header from './Header'
import Calculator from './Calculator'
import Help from './Help'
import About from './About'
import Footer from './Footer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Calculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Route>
    </Routes>
  )
}
function Layout() {
  return (
    <div style={{backgroundColor: '#d9d9d9'}}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App
