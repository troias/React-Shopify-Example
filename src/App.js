import logo from './logo.svg';
import './App.css';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import HomePage from "./pages/HomePage"
import ShopContextProvider from "./context/ShopContextProvider"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductPage from './pages/ProductPage'


const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

function App() {

  return (
    <ShopContextProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Router>
          <div className="App">
            <header className="App-header">
              <li>
                <Link to="about">Product Page</Link>
              </li>
              <li>
                <Link to="/">Home Page</Link>
              </li>

              <Switch>
                <Route path="/about">
                  <ProductPage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>

            </header>
          </div>
        </Router>
      </StyletronProvider>
    </ShopContextProvider>
  );
}

export default App;
