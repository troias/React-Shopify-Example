import logo from './logo.svg';
import './App.css';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

function App() {

  return (
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    </StyletronProvider>
  );
}

export default App;