import React,{ useRef, useState } from 'react'
import Videofooter from './componentes/footer/Videofooter';
import VideoSideBar from './componentes/sidebar/VideoSideBar';
import "./Video.css"

function Video({likes,mensage,shares,name,description,music,url}) {

    const videoRef = useRef(null);
    const [play, setplay] = useState(false);
        function handdleStart(){
            if(play){
                videoRef.current.pause()
                setplay(false)
            }
            else{
                videoRef.current.play()
                setplay(true)
            }
        }


  return (
    <div className='Video'>
        <video 
            className='Video_player'
            ref= {videoRef}
            onClick= {handdleStart}
            loop
            src={url}
        >  
        </video>
        <VideoSideBar
            likes={likes}
            mensage={mensage}
            shares={shares}

        />
        <Videofooter 
            name={name}
            description={description}
            music={music}
        />

    </div>
  )
}

export default Video