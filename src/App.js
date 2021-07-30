import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import HomePage from "./pages/HomePage";
import ShopContextProvider from "./context/ShopContextProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./component/UI/NavBar/NavBar";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart/Cart";
import Header from "./component/UI/Layout/Header/Header";
import ThemeContextProvider from './context/ThemeContextProvider'
import HomePageLayout from "./component/UI/Layout/HomePageLayout";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

function App() {
  return (
    <ShopContextProvider>

      <StyletronProvider value={engine} debug={debug} debugAfterHydration>

        <Router>
          <ThemeContextProvider>
            <HomePageLayout>
              <Header>
                <NavBar />
                <Cart />
              </Header>
              <Switch>
                <Route path="/product/:id">
                  <ProductPage />
                </Route>
                <Route exact path="/">
                  <HomePage />
                </Route>
              </Switch>
            </HomePageLayout>
          </ThemeContextProvider>
        </Router>
      </StyletronProvider>
    </ShopContextProvider>
  );
}

export default App;
