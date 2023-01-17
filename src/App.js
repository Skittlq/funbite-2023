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
      <Route path="/"><RedirectHome/></Route>
      <Route path="/home"><Home/></Route>
      <Route path="/games"><Games/></Route>
      <Route path="/video-of-the-day"><VideoOfTheDay/></Route>
      <Route path="/google-search"><GoogleSearch/></Route>
      <Route path="/credits"><Credits/></Route>
      <Footer/>
    </div>
  );
}

export default App;
