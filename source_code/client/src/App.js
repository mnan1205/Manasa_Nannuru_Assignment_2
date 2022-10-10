import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from '../src/NavigationBar.js'
import PhotoArea from '../src/PhotoArea.js'
import HomeContent from '../src/HomeContent.js'
import NewsBar from '../src/NewsBar.js'
import Addition from '../src/Addition.js'



function App() {
  return (
    <>
      <div className="navigation-bar">
        <NavigationBar />
      </div>
      <div className='content-area'>
        <PhotoArea />
        <HomeContent />
      </div>
      <NewsBar />
      <Addition />
    </>
  );
}

export default App;
