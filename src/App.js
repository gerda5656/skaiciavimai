import logo from './logo.svg';
import './App.css';
import Studentai from './components/4uzd.js';
import Skaiciai from './components/5uzd.js';
import Masyvas from './components/6uzd.js';
import Sarasas from './components/7uzd.js';
import Preke from './components/8uzd.js';
import Paslaugos from './components/9uzd.js';
import Zodziai from './components/10uzd.js';
import Knygynas from './components/11uzd.js';
import Zodeliai from './components/12uzd.js';
import Projektai from './components/13uzd.js';
import Navbar from './components/14uzd.js';

function App() {
  return (
    <div className="App">
      <Studentai />
      <Skaiciai />
      <Masyvas />
      <Sarasas />
      <Preke />
      <Paslaugos />
      <Zodziai />
      <Knygynas />
      <Zodeliai />
      <Projektai />
      <Navbar />
    </div>
  );
}

export default App;
