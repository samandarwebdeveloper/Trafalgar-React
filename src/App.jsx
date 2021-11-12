import './App.scss';
import { useState } from 'react';

import Header from './Components/Header/header';
import Hero from './Components/Hero/hero';
import Services from './Components/Services/services';
import PageInfo from './Components/Page-info/page-info';
import Careusel from './Components/careusel/careusel';
import Doctors from './Components/Doctors/doctors';
import Footer from './Components/Footer/footer';

function App() {
  const [ lang, setLang] = useState("eng");
  const [ color, setColor] = useState("light");
  return (
    <div className={color}>
    <Header lang={lang} setLang={setLang} color={color} setColor={setColor}/>
    <Hero lang={lang}/>
    <Services lang={lang}/>
    <PageInfo lang={lang}/>
    <Careusel lang={lang}/>
    <Doctors lang={lang}/>
    <Footer lang={lang}/>
    </div>
   
  );
}

export default App;
