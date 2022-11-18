import React, { Suspense } from "react";
import Loader from "../Shared/Loader/Loader";
const Connect = React.lazy(() => import("./Connect/Connect"));
const NewsEvent = React.lazy(() => import("./NewsEvent/Newsevent"));
const Slider1 = React.lazy(() => import("./Slider/Slider"));
const Gallery = React.lazy(() => import("./Gallery/Gallery"));


const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <section>
          <Slider1 />
          <NewsEvent />
          <Connect />
          <Gallery />
        </section>
      </Suspense>
    </div>
  );
};

export default Home;
