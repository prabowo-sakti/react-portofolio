import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage";
import Blog from "../components/Blog/index";
import RekomendasiAnimeIsekaiTerbaik from "../components/Blog/article/RekomendasiAnimeIsekai";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/article/rekomendasi-anime-isekai-terbaik",
    element: <RekomendasiAnimeIsekaiTerbaik />,
  },
]);
