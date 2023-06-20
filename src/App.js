import React,{useEffect, useState} from 'react';
import './App.css';
import Video from './pages/Video';
import db from "./config/firebae"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function App() {

  let maxheigth;
  if(window.innerHeight <= 800){
    maxheigth = window.innerHeight;

  }

  const [video,setVideos]= useState([]);

  async function getVideos(){
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList)
  }

  useEffect(()=> {
    getVideos();
  }, [])


  return (
    <div className="App" style={{maxheigth:maxheigth + "px"}}>
        <div className= "app_videos">

          { video.map((item) => {
            return (
            <Video
              likes={item.likes}
              mensage={item.mensage}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
              
            />
            )
          }) }
        </div>
    </div>
  );
}

export default App;
