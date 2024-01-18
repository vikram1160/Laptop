import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'    
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Refurbished from './components/Refurbished';
import Repair from './components/Repair';
import DataRecovery from './components/DataRecovery';
function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repair" element={ <Repair/> }/>
          <Route path="/refurbished" element={<Refurbished/>}/>
          <Route path="/datarecovery" element={ <DataRecovery/> }/>          
      </Routes>
          <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
