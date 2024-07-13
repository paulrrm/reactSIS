import {BrowserRouter,Routes} from 'react-router-dom'

import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; 
import urllink from '../src/config/urllink'

import { renderRoutes, routes } from "./routes";


function  App() {
  
  
  return (
    <BrowserRouter>
      
      <Routes>
        
        {renderRoutes(routes)}
      </Routes>
    </BrowserRouter>
  )
}
export default App
