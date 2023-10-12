import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Profile from './Profile';
import data from './data';

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Freinds from './Freinds';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main data={data.PostPage}/>}></Route>
        <Route path='/profile' element={<Profile data={data.ProfilePage}/>}></Route>
        <Route path='/freinds' element={<Freinds data={data.FriendsBest}/>}></Route>

      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
