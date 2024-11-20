import Earth from "./components/Earth";
import { Route, Switch } from "wouter";
import HomeView from "./views/HomeView";
import AboutMe from "./views/AboutMe";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomeView}></Route>
        <Route path="/aboutme" component={AboutMe}></Route>
      </Switch>
    </>
  );
}

export default App;
