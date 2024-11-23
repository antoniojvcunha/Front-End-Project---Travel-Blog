import Earth from "./components/Earth";
import { Route, Switch } from "wouter";
import HomeView from "./views/HomeView";
import AboutMe from "./views/AboutMe";
import Locations from "./views/Locations";

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route path="/" component={HomeView}></Route>
          <Route path="/aboutme" component={AboutMe}></Route>
          <Route path="/locations" component={Locations}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
