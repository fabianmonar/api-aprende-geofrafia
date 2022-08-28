
import './App.css';
import Menu from './components/Menu';
import StudyMainMenu from './components/StudyComponents/StudyMainMenu';
import PracticeMain from './components/PracticeComponents/PracticeMain';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/study" element={<StudyMainMenu/>} />
        <Route path='/practice' element={<PracticeMain/>}/>
      </Routes>
    </div>
  );
}

export default App;