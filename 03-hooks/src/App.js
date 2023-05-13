import logo from './logo.svg';
import './App.css';
import LuasSegitiga from './komponents/LuasSegitiga';
import LuasLingkaran from './komponents/LuasLingkaran';
import { useState } from 'react';
import { CounterProvider } from './context/CounterProvider';
function App() {
  const [page, setPage] = useState('luasSegitiga')

  return (
    <div className="App">
      <CounterProvider>
      <button onClick={() => setPage('luasSegitiga')}> Luas Segitiga</button>
      <button onClick={() => setPage('luasLingkaran')}> Luas Lingkaran</button>
      {
        page === 'luasSegitiga' ? <LuasSegitiga/> : <LuasLingkaran/>
      }
      <Counter />
      </CounterProvider>
      </div>
  );   
        
}
export default App;
