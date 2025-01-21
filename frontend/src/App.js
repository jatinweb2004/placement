import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Contribution from './pages/Contribution';
import DataProvider from './context/DataProvider';
import InterviewData from './pages/InterviewData';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<InterviewData/>}/> 
          <Route path='/contribute' element={<Contribution/>}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
