import {BrowserRouter,Route,Routes} from "react-router-dom"

import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; 


import NavBar from './components/NavBar';
import Login from "./interfaces/Login";
import Home from "./interfaces/Home";
function  App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<h1>AAAAA</h1>}/>
        <Route path="/contact" element={<h1>CCCCCC</h1>}/>
        <Route path="/login" element={<Login />}/>
        
      </Routes>
    </BrowserRouter>
  )
}
export default App
