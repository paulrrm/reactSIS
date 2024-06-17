import {BrowserRouter,Routes} from "react-router-dom"

import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; 
import { renderRoutes } from "./routes";

function  App() {
  return (
    <BrowserRouter>
      
      
      <Routes>
        
        {renderRoutes()}
      </Routes>
    </BrowserRouter>
  )
}
export default App
