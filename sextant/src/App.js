//import logo from './logo.svg';
import './App.css';
import { CCard, CCardBody } from '@coreui/react';

function App() {
  return (
    <div className="App">
      <div className="App-header">Sextant</div>
      <div className="Exhibit">
          <div><h1>Dashboard</h1></div>

          <div className="Panel">IP</div>
          <div className="Panel">Latency</div>
      </div>
    </div>
  );
}

export default App;
