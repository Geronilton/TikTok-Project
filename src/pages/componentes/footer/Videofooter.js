import React from 'react'
import "./VideoFooter.css"

import MusicNoteIcon from '@mui/icons-material/MusicNote';
function Videofooter({name,description,music}) {
  return (
    <div className='VideoFooter'>
        <div className='videofooter_text'>
            <h3>@{name}</h3>
            <p>{description}</p>

            <div className='videofooter_music'>
                <MusicNoteIcon className="videofooter_icon"/>
                <div className='videofootermusic_text'>
                    <p>{music}</p>
                </div>
            </div>
        </div>
        <img
            className='videofooter_record'
            alt='imagem de vinil girando'
            src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
        />
    </div>
  )
}

export default Videofooter