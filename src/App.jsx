
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './body';
import Historia from './historia';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {


  return (
    <>
    <BrowserRouter>
    <Routes> 
    <Route path='' element={<Body/>} />
    <Route path='/Historia' element={<Historia/>}/>
   
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
