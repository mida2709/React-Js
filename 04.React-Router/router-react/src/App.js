import './App.css';
import LuasLingkaran from './Components/LuasLingkaran';
import LuasSegitiga from './Components/LuasSegitiga';
import {Counter} from './Components/Counter';
import { CounterProvider } from './context/CounterProvider';
import { CounterTwoNumber } from './komponents/CounterTwoNumber';
import {FormText} from './Components/FormText';
import {Nilai} from './Components/Nilai';
import {Route, Routers} 'react-router-dom';
import {NotFound} from './Components/NotFound';
import {Layout} from './layout/Layout';
import {FormLogin} from './Components/FormLogin';
function App() {
  return (
    <div className="App">
      <CounterProvider >
        <Routers>
          <Route path="/luas-segitiga" element={<Layout><LuasSegitiga/></Layout>}/>
          <Route path="/LuasLingkaran" element={<Layout><LuasLingkaran/></Layout>}/>
          <Route path="/Counter" element={<Layout><Counter/></Layout>} />
          <Route path="/CounterTwoNumber" element={<Layout><CounterTwoNumber/></Layout>} />
          <Route path="/FormText" element={<Layout><FormText/></Layout>} />
          <Route path="/Nilai" element={<Layout><Nilai/></Layout>} />
          <Route path="/" element={<Nilai/>} />
          <Route path="/login" element={<FormLogin/>} />
          <Route path="*" element={<NotFound/>} />

          <Routers>
      </CounterProvider>

    </div>
  );
}

export default APP;