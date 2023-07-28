// import './App.css';
// import NavBar from './components/Navbar';
// import Footer from './components/Footer';
// import Sidebar from './components/Sidebar';
// import T2DMInfo from './components/T2DMInfo'
// import SelfCare from './components/SelfCare'
// import FAQ from './components/FAQ'
// import Home from './components/Home'
// import Chart from './components/Chart'
// import BGL from './components/BGL';
// import Medicine from './components/Medicine';
// import Excercise from './components/Exercise';
// import Emergency from './components/Emergency';
// import Community from './components/Community';
// import Notepad from './components/Notepad';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'


// function App() {
//   return (    
//       <div className="App">
//         <NavBar />
//         <Footer />
//         <Sidebar />
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/t2dminfo" element={<T2DMInfo/>} />
//           <Route path="/selfcare" element={<SelfCare/>} />
//           <Route path="/faq" element={<FAQ/>}/>
//           <Route path="/charts" element={<Chart/>} />
//           <Route path="/bgl" element={<BGL/>} />
//           <Route path="/medicine" element={<Medicine />} />
//           <Route path="/exercise" element={<Excercise />} />
//           <Route path="/emergency" element={<Emergency />} />
//           <Route path="/community" element={<Community />} />
//           <Route path="/notepad" element={<Notepad />} />
//           <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
//         </Routes>
//       </div>
      
//   );
// }

// export default App;

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
} from './components'
import {action as registerAction} from './components/Register'
import {action as loginAction} from './components/Login'
import {action as glucoseAction} from './components/BGL'


import {loader as dashboardLoader} from './components/Dashboard'
import {loader as glucoseLoader} from './components/BGL'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader
      },
      // {
      //   path: 'dashboard',
      //   loader: dashboardLoader,
      //   element: <Dashboard />,
      // },
      {
        path: 't2dminfo',
        element: <T2DMInfo />,
      },
      {
        path: 'selfcare',
        element: <SelfCare />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'bgl',
        element: <BGL />,
        action: glucoseAction,
        loader: glucoseLoader
      },
      {
        path: 'medicine',
        element: <Medicine />,
      },
      {
        path: 'exercise',
        element: <Exercise />,
      },
      {
        path: 'emergency',
        element: <Emergency />,
      },
      {
        path: 'notepad',
        element: <Notepad />,
      },
      {
        path: 'community',
        element: <Community />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
    action: loginAction
  },
  {
    path: 'register',
    element: <Register />,
    action: registerAction
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;