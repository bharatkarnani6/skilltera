import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './Components/Header/header'
import Form from './Components/form/form';
import Route from './Components/Routes/Routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </div>
  );
}

export default App;
