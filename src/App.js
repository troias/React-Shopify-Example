import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import HomePage from "./pages/HomePage";
import ShopContextProvider from "./context/ShopContextProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./component/UI/NavBar/NavBar";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products"
import Cart from "./pages/Cart/Cart";
import Header from "./component/UI/Layout/Header/Header";
import ThemeContextProvider from './context/ThemeContextProvider'
import HomePageLayout from "./component/UI/Layout/HomePageLayout";
import Collections from './pages/Collections'
import Footer from './component/UI/Layout/Footer/Footer'
import { FooterWrapper } from './component/UI/Layout/Footer/FooterWrapper'
import Menu from './component/UI/Layout/MegaMenu/Menu/Menu'
import { Provider } from 'react-redux'
import store from './reduxStore/Index'
import MenuModal from './component/UI/Modals/MenuModal/MenuModal'

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
              <Provider store={store}>

                <Header>
                  <NavBar />
                  <Cart />
                  <Menu />
                </Header>
                {/* <MenuModal /> */}


                <Switch>
                  <Route path="/product/:id">
                    <ProductPage />
                  </Route>
                  <Route path="/products">
                    <Products />
                  </Route>
                  <Route path="/Collections">
                    <Collections />
                  </Route>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                </Switch>


                <FooterWrapper>
                  <Footer />
                </FooterWrapper>


              </Provider>
            </HomePageLayout>
          </ThemeContextProvider>
        </Router>
      </StyletronProvider>
    </ShopContextProvider>
  );
}

export default App;
