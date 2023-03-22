import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
// import Modal from "./components/Modal/Modal";
import SingleNewsDetails from "./components/NewsBox/SingleNewsDetails";
import Newsletter from "./components/Newsletter/Newsletter";

import './index.css';


function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<MainContent/>} />
        <Route path='/about' element={<About/> } />
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/details' element={<SingleNewsDetails/>} />
      </Routes>
       <Newsletter/>
      <Footer/>
      {/* <Modal/> */}
    </div>
  );
}

export default App;
