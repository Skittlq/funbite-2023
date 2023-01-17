import './index.css';
import './background.css'
import { Route } from 'react-router-dom';
import Footer from './components/main/footer/Footer';
import Header from './components/main/header/Header';
import Navbar from './components/main/header/navbar/Navbar';
import NavbarMobile from './components/main/header/navbar/NavbarMobile';
import RedirectHome from './RedirectHome';
import Home from './components/pages/home/Home';
import Games from './components/pages/games/Games';
import VideoOfTheDay from './components/pages/votd/VideoOfTheDay';
import GoogleSearch from './components/pages/google_search/GoogleSearch';
import Credits from './components/pages/credits/Credits';

function App() {
  return (
    <div>
      <Header/>
      <NavbarMobile/>
      <Navbar/>
      <Route path="/funbite-2023/"><RedirectHome/></Route>
      <Route path="/"><RedirectHome/></Route>
      <Route path="/funbite-2023/home"><Home/></Route>
      <Route path="/funbite-2023/games"><Games/></Route>
      <Route path="/funbite-2023/video-of-the-day"><VideoOfTheDay/></Route>
      <Route path="/funbite-2023/google-search"><GoogleSearch/></Route>
      <Route path="/funbite-2023/credits"><Credits/></Route>
      <Footer/>
    </div>
  );
}

export default App;
