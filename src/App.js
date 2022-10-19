import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import { Home } from './Containers/Pages/Home';
import { Headers} from './Containers/Components/Header/Headers.js';
import Login from './Containers/Pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Headers/>
    {/* <div className='bg-dark background__wrap'> */}
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>

      
    </Routes>
    {/* </div> */}
  </BrowserRouter>
  );
}

export default App;
