import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Login from './interfaces/Login'
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; 
import './App.css'
import { PrinciapalSide } from './interfaces';

function  App() {
  return (
    <>
      <Login/>
    </>
  )
}
export default App
