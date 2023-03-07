import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from './Layout'
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import Articles from './pages/Articles';

const  App = () => {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/Profile/:username" element={<Profile/>}/>
    </Route>
    <Route path="/articles" element={<Articles/>}>
    <Route path=":id" element={<Article/>}/>
    </Route>
    <Route path="MyPage" element={<MyPage/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
  );
}

export default App;

