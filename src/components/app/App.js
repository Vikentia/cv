import style from './App.module.scss';


import { Header } from '../header/Header';
import { About } from '../about/About';
import { Contacts } from '../contacts/Contacts';
import { Skills } from '../skills/Skills';
import { Projects } from '../projects/Projects';
import { Education } from '../education/Education';
import { Languages } from '../languages/Languages';
import { Experience } from '../experience/Experience';

function App() {
  return (
    <div className={style.app}>
      <div className={style.wrapper}>
        <Header />
        <About />
        <Contacts />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Languages />
      </div >
    </div >
  );
}

export default App;
