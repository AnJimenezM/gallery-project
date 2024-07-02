
import './App.css'
import { Covenas1 } from './Components/Covenas1'
import { Covenas2 } from './Components/Covenas2'
import { Covenas3 } from './Components/Covenas3'
import { Covenas4 } from './Components/Covenas4'
import { Covenas5 } from './Components/Covenas5'
import { Covenas6 } from './Components/Covenas6'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navigation } from './Components/Navigation'
function App() {

  return (
    <>
      <BrowserRouter>
      <div>
        <h1 id='title' className='text-center my-3'>proyecto galeria</h1>
      </div>
      <Routes>
        <Route path='/covenas1' element={<Covenas1 className="imagen-principal"/>}/>
        <Route path='/covenas2' element={<Covenas2 className="imagen-principal"/>}/>
        <Route path='/covenas3' element={<Covenas3 className="imagen-principal"/>}/>
        <Route path='/covenas4' element={<Covenas4 className="imagen-principal"/>}/>
        <Route path='/covenas5' element={<Covenas5 className="imagen-principal"/>}/>
        <Route path='/covenas6' element={<Covenas6 className="imagen-principal"/>}/>
      </Routes>
      <Navigation/>
      </BrowserRouter>
     
    </>
  )
}

export default App
