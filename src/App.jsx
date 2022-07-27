import "./App.css";
import Header from './components/Header/Header' 
import About from './components/About/About' 
import Nav from './components/Nav/Nav' 
import Experience from './components/Experience/Experience' 
import Services from './components/Services/Services' 
import Portfolio from './components/Portfolio/Portfolio'

import Contact from './components/Contact/Contact' 
import Footer from './components/Footer/Footer' 

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;