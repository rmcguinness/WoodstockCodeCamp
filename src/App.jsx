import './App.css'
import { useRecoilState } from 'recoil'
import {strState} from './State'

function App() {
  const [display] = useRecoilState(strState)
  return (
    <>
      <h1>Calculator Application</h1>
      <div>State value is: {display}</div>
    </>
  )
}

export default App
