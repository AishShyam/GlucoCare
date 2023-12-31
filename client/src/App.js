import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BGL,
  Community,
  Dashboard,
  Emergency,
  Exercise,
  FAQ,
  Home,
  Medicine,
  Notepad,
  SelfCare,
  T2DMInfo,
  Login,
  Register,
  Food,
  Lab,
  Insulin,
  Schedule,
} from "./components";
import { action as registerAction } from "./components/Register";
import { action as loginAction } from "./components/Login";
import { action as glucoseAction } from "./components/BGL";
import { action as medicineAction } from "./components/Medicine";
import { action as exerciseAction } from "./components/Exercise";
import { action as foodAction } from "./components/Food";
import { action as insulinAction } from "./components/Insulin";

import { loader as dashboardLoader } from "./components/Dashboard";
import { loader as glucoseLoader } from "./components/BGL";
import { loader as medicineLoader } from "./components/Medicine";
import { loader as exerciseLoader } from "./components/Exercise";
import { loader as foodLoader } from "./components/Food";
import { loader as insulinLoader } from "./components/Insulin";

const router = createBrowserRouter([
  // {
  //   path: "/",
  // },
  {
    path: "/",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "register",
    element: <Register />,
    action: registerAction,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: "t2dminfo",
        element: <T2DMInfo />,
      },
      {
        path: "selfcare",
        element: <SelfCare />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "bgl",
        element: <BGL />,
        action: glucoseAction,
        loader: glucoseLoader,
      },
      {
        path: "medicine",
        element: <Medicine />,
        action: medicineAction,
        loader: medicineLoader,
      },
      {
        path: "exercise",
        element: <Exercise />,
        action: exerciseAction,
        loader: exerciseLoader,
      },
      {
        path: "food",
        element: <Food />,
        action: foodAction,
        loader: foodLoader,
      },
      {
        path: "insulin",
        element: <Insulin />,
        action: insulinAction,
        loader: insulinLoader,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "lab",
        element: <Lab />,
      },
      {
        path: "emergency",
        element: <Emergency />,
      },
      {
        path: "notepad",
        element: <Notepad />,
      },
      {
        path: "community",
        element: <Community />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
