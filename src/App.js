import './App.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {useEffect, useState} from "react";



function App() {
    
    const [isScrolling, setIsScrolling] = useState(true);
    
    function ScrollToTop() {
        window.scrollTo(0, 0)
        setIsScrolling(false);
    }

    const listenScrollEvent = () => {
        if (window.scrollY >= 100) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        }
    }, []);
    
    
    
  return (
      <>
          <Navbar />
          <LandingPage />
          <Footer />
          {isScrolling
          && <div className="arrow-up" onClick={ScrollToTop}>
              <ArrowUpwardIcon
                  sx={{fontSize: 27, color: '#FFFFFF'}}/>
          </div>
          }
          
      </>
  );
}

export default App;
