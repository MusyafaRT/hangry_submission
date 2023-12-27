
import './App.css';
import Banner from './components/Banner';
import FindUs from './components/FindUs';
import Outlet from './components/Outlet';
import Footer from './layout/Footer';
import { Navbar } from './layout/Navbar';

function App() {
  return (
    <div className="lg:max-w-[1100px] lg:mx-auto">
      <Navbar />
      <Banner />
      <Outlet />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
