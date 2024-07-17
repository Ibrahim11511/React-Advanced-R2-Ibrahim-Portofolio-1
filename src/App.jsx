import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MasterLayout from "./Components/MasterLayOut/MasterLayout";
import "@fontsource/playfair";
import "@fontsource/quicksand";
import HomeBage from "./Components/Home Page/HomeBage";
import AboutPage from "./Components/About page/AboutPage";
import SkillsPage from "./Components/Skilling Page/SkillingPage";
import ExperiencePage from "./Components/Experience Page/ExperiencePage";
import NotFound from "./Components/Not Fount/NotFound";
import WorkPage from "./Components/Work Page/WorkPage";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <HomeBage />,
        },
        {
          path: "home",
          element: <HomeBage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "skills",
          element: <SkillsPage />,
        },
        {
          path: "experience",
          element: <ExperiencePage />,
        },
        {
          path: "work",
          element: <WorkPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
