import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from '.';

const Home = () => {
  return (
    <>
        <Navbar />
        <Sidebar />
        <Footer />
        <Outlet />
    </>
  );
};
export default Home;