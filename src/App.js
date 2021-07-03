import './App.css';
import {ListOfCats} from "./pages/ListOfCats/ListOfCats";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
      <Switch>
          <Route path="/" component={ListOfCats} />
      </Switch>
  );
}

export default App;
