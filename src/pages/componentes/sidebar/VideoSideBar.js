import React, {useState,}from 'react'
import "./videoSideBar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';




function VideoSideBar({likes,mensage,shares}) {
    const [liked, setlike] = useState(false)
    function handlelike(){
        setlike(!liked)
    }

  return (
    <div className='videosidebar'>
        <div 
            className='videosidebar_options'
            onClick={handlelike}
        > 
            {liked ?  <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/> }
            <p> {liked ? likes +1: likes } </p>
        </div>
        <div className='videosidebar_options'> 
            <ChatIcon fontSize='large' />
            <p> {mensage}</p>
        </div>
        <div className='videosidebar_options'> 
             <ShareIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSideBar