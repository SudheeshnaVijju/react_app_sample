import './App.css';
import CompA from './components/compA';
import CompB from './components/compB';
import ClassCompC from './components/classCompC';
import Image from './components/image';
import Person from './components/person';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import Students from './components/students';
import Hooks from './components/hooks';
import Light from './components/light';
import Task2 from './components/task2';
function App() {
  return (
    <div className="App">
      <h1>sdfg</h1>
      
      <BrowserRouter>
      {/* <Hooks/> */}
      <Menu />
      <Routes>
        <Route path="/" element={<Task2 />} />
        <Route path="/compb" element={<CompB />} />
        <Route path="/compc" element={<ClassCompC />} />
        <Route path="/imgcompo" element={<Image />} />
      </Routes>
      </BrowserRouter>
      {/* <h1>App</h1>
      <CompA />
      <CompB />
      <ClassCompC />
  <Image />
       <Person name="sudhee" rn="21a91a05f6" clg="AEC"/> 
       <Students /> 
       <Hooks />
      <Light /> */}
    </div>
  );
}

export default App;
