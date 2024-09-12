// import './App.css';

import Navigation from './compound/navigation';
import Home from './compound/Home';
import Video from './compound/Video';
// import First1 from './Tv shows/first1';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Movies from './Card.js/Movies';
import Login from './compound/Login';
import Signup from './compound/Signup';
import LogOut from './Home/LogoOut';
import Card from './Card.js/Card';
import Addproduct from './Admin/addproduct';
import Main_page from './Admin/Main_page';
import Nav from './User/Nav';
import Aha from './Tv shows/Aha/Aha';
import ImportAha from './Tv shows/Aha/ImportAha';
import OutputAha from './Tv shows/Aha/OutputAha';
import ImportKoren from '../src/Tv shows/Aha/koren/ImportKoren';
import Koren from '../src/Tv shows/Aha/koren/Koren';
import OutputKoren from './Tv shows/Aha/koren/OutputKoren';
import Korens from '../src/Koren/Koren'
import ImportKorens from '../src/Koren/importKoren'
import Output from './Koren/Output';
import Mixer from './New-popular/Mixer';
import Search from './search/Serach';
import OutputSearch from './search/OutputSearch';
import ImportSearch from './search/ImportSearch';
import Importshort from './short_video/importshort';
import Short from './short_video/short';
import Outputshort from './short_video/Outputshort';
import Inputmarval from './Marval/Inputmarval';
import Addmarval from './Marval/Addmarval';
import Outputmarval from './Marval/Outputmarval';
import AllAha from './Tv shows/Aha/AllAha';
import Ramcharan from './Heros/Ramcharan/Ramcharan';
import Ramcharanop from './Heros/Ramcharan//Ramcharan _op';
import Inputramcharan from '../src/Heros/Ramcharan/Inputramcharan'
import Pawan from './Heros/PawanKalyan/Pawan';
import Inputpawan from './Heros/PawanKalyan/Inputpawan';
import Prabash from './Heros/Prabesh/Prabesh';
import Inputprabash from './Heros/Prabesh/inputprabash'
// import AlluArjun from './Heros/AlluArjun/AlluArjun'
// import Inputallu from './Heros/AlluArjun/InputAllu';
function App() {
  // const location = useLocation();
  // console.log(window.location.pathname)
  return (
    <>
    <div className>
      <div className='container-fulid bg-black'>
<BrowserRouter>
{/* {window.location.pathname === '/video' ? '' : <Navigation />} */}
{/* {window.location.pathname === '/first1' ? '' : <Video />} */}
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/" element={<Navigation/>} />
         <Route path="/video" element={<Video/>} />
         {/* <Route path="/first" element={<First1/>} /> */}
         <Route path="/Movies" element={<Movies/>} />
         <Route path="/Login" element={<Login/>} /> 
         <Route path="/Signup" element={<Signup/>} /> 
         <Route path="/Logout" element={<LogOut/>} /> 
         <Route path="/Card" element={<Card/>} /> 
         <Route path="/Addprodect" element={<Addproduct/>} /> 
         <Route path="/Main_page" element={<Main_page/>} /> 
         <Route path="/Nav" element={<Nav/>} /> 
         <Route path="/Mix" element={<Mixer/>} /> 
    
         <Route path="/Aha" element={<Aha/>} /> 
         <Route path="/AllAha" element={<AllAha/>} /> 

         <Route path="/ImportAha" element={<ImportAha/>} /> 
         <Route path="/OutputAha" element={<OutputAha/>} /> 
         <Route path="/ImportKoren" element={<ImportKoren/>} /> 
         <Route path="/Koren" element={<Koren/>} /> 
         <Route path="/OutputKoren" element={<OutputKoren/>} /> 
         <Route path="/Korens" element={<Korens/>} /> 
         <Route path="/ImportKorens" element={<ImportKorens/>} /> 
         <Route path="/Output" element={<Output/>} /> 
         <Route path="/Search" element={<Search/>} /> 
         <Route path="/SearchOutput" element={<OutputSearch/>} /> 
         <Route path="/ImportSearch" element={<ImportSearch/>} /> 
         <Route path="/ImportShort" element={<Importshort/>} /> 
         <Route path="/Short" element={<Short/>} /> 
         <Route path="/Outputshort" element={<Outputshort/>} /> 
         <Route path="/Inputmarval" element={<Inputmarval/>} /> 
         <Route path="/Addmarval" element={<Addmarval/>} /> 
         <Route path="/Outputmarval" element={<Outputmarval/>} /> 
       <Route path='/Nav' element={<Nav/>}/>
       <Route path='/Ramcharan' element={<Ramcharan/>}/>
       <Route path='/Ramcharanop' element={<Ramcharanop/>}/>
       <Route path='/Inputramcharan' element={<Inputramcharan/>}/>
       <Route path='/Pawan' element={<Pawan/>}/>
       <Route path='/Inputpawan' element={<Inputpawan/>}/>
       <Route path='/Prabash' element={<Prabash/>}/>
       <Route path='/Inputprabash' element={<Inputprabash/>}/>
       {/* <Route path='/AlluArjun' element={<AlluArjun/>}/> */}
       {/* <Route path='/Inputallu' element={<Inputallu/>}/> */}

   


       




        
         
         

           










       </Routes>
    </BrowserRouter>
      
      </div>
     
    </div>
    
    </>
  );
}

export default App;
