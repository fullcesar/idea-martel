import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer />
          </Route>
          <Route path="/categoria/:catId" exact>
            <ItemListContainer />
          </Route>
          <Route path="/item/:itemId" exact>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
