import { Route, Switch } from "wouter";
import HomeView from "./views/HomeView";
import AboutMe from "./views/AboutMe";
import Locations from "./views/Locations";

import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  return (
    <>
      <div className="container mx-auto">
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
