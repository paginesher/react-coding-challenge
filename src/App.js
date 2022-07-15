import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import HomePage from './pages/homepage';
import PageTwo from './pages/pagetwo';
import PageThree from './pages/pagethree';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/pagetwo" element={<PageTwo />}/>
          <Route exact path="/pagethree" element={<PageThree />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;