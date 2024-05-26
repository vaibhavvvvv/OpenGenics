import './App.css';
import Login from './Components/Login';
import Chat from './Components/Chat';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Challenge from './Components/Challenge';
import CreateChallenge from './Components/CreateChallenge';
import UpdateChallenge from './Components/UpdateChallenge';
import LoginPage from './Components/LoginPage';
import GitHubUserPage from './Components/ProfilePage';
import HomePage from './Components/HomePage';
import ManageChallenges from './Components/ManageChallenges';
import Friends from './Components/Friends';


function App() {
  return (

<BrowserRouter>

    <Routes>      
       <Route path="/" element={<LoginPage   />} />
       <Route path='/chat' element={<Chat />} />
       <Route path='/register' element={<Register />} />
       <Route path='/login' element={<Login />} />
       <Route path='/dashboard' element={<HomePage/>} />
       <Route path='/challenge' element={<Challenge />} />
       <Route path='/createchallenge' element={<CreateChallenge />} />
       <Route path='/allchallenge' element={<Challenge />} />
       <Route path='/updatechallenge' element={<UpdateChallenge />} />
       <Route path='/managechallenges' element={<ManageChallenges />} />
       <Route path='/friends' element={<Friends />} />
    </Routes>
</BrowserRouter>
    
  );
}

export default App;
