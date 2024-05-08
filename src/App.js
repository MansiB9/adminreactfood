import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Food from './Component/Food';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
         <Food/>
      </BrowserRouter>
     
    </div>
    
  );
}

export default App;
