import React from 'react';
// import videoBg from '../img/pexels_videos.mp4';
// import About from './Frequently';
// import Content from './Content';
// import Download from './Download';
// import Enjoy from './Enjoy';
// import Profile from './Profile';
// import Weatch from './Weatch';
import Navigation from './navigation'
import Enjoy from './Enjoy';
import Download from './Download';
import Weatch from './Weatch';
import Profile from './Profile';
import Content from './Content';
import Frequently from'./Frequently';
import '../App.css';
export default function Home() {
  return (
    <div className='main'>
          {/* <video id="video" src={videoBg}  autoPlay loop muted /> */}
          <Navigation/>
          <Enjoy/>
      <Download/>
      <Weatch/>
      <Frequently/>
      <Profile/>
      {/* <About/> */}
      <Content/>
         
    </div>
  );
}
