//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
 import { BrowserRouter as Router,
// Switch,
Route,
Routes,
// Link,
// Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    {/* <Login></Login>
    <Register></Register> */}
  
    <Router>
      <Header></Header>
      
    <Routes>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="Register" element={<Register/>}/>
    </Routes>
    <Footer></Footer>
    </Router>
    </div>

  );
}

export default App;
