import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Movies></Movies>
    </div>
  );
}

export default App;
