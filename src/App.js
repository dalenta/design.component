import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/home";
import Detail from "pages/detailHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Detail} path="/detail" />
        <Route component={Home} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
