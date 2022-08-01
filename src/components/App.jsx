import { Routes, Route } from "react-router-dom"
import { Layout } from "./Layout/Layout"
import {Home} from "./Home/Home"

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews/>} />
            </Route>
          </Route> */}
        </Route>
      </Routes>
    </>
  );
};
