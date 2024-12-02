import { Route, Switch } from "wouter";
import HomeView from "./views/HomeView";
import AboutMe from "./views/AboutMe";
import Locations from "./views/Locations";

import { Swiper, SwiperSlide } from "swiper/react";
import LocationsDetails from "./views/LocationsDetails";

function App() {
  return (
    <>
      <div className="mx-auto">
        <Switch>
          <Route path="/" component={HomeView}></Route>
          <Route path="/aboutme" component={AboutMe}></Route>
          <Route path="/locations" component={Locations}></Route>
          <Route path="/each-location" component={LocationsDetails}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
