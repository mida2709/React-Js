import './App.css';
import { Counter } from './components/counter/Counter';
import { CounterSass } from './components/counter-sass/Counter'

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterSass />
    </div>
  );
}

export default App;