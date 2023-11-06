import logo from './logo.svg';
import './App.css';
import UserData from './components/UserData';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNabar from './components/CustomNabar';
import NaveRoute from './components/NavRoute';
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <CustomNabar/>
         <NaveRoute/>
        </BrowserRouter>
    </div>
  );
}

export default App;
