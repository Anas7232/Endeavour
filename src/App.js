import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './Components/Review';
import PrimarySearchAppBar from './Components/Search';
import Investor from './Components/Dashboard_Investor';
import IdeaBrief from './Components/Idea_brief';
import InvestorMentor from './Components/Dashboard_Mentor'
import Entrepreneur from './Components/Dashboard_Entrepreneur'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' exact element={<Header />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/review" element={<ResponsiveAppBar />} />
          <Route path='/searchbar' element={<PrimarySearchAppBar />} />
          <Route path='/investor' element={<Investor />} />
          <Route path='/ideabrief' element={<IdeaBrief />} />
          <Route path='/mentorinvestor' element={<InvestorMentor /> } />
          <Route path='/entrepreneur' element={<Entrepreneur />} />
        </Routes>
    </div>
  );
}

export default App;
