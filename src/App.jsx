import {strState} from './State'
import './App.css'
import { useRecoilState } from 'recoil'

function App() {
  const [display, setDisplay] = useRecoilState(strState)
  return (
    <>
      <h1>Calculator Application</h1>
      <div>State value is: {display}</div>
    </>
  )
}

export default App
