import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/projects/');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer isProjectPage={isProjectPage} />
    </div>
  );
};

export default Layout;
