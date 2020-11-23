import React, { useContext } from 'react'
import {useParams} from 'react-router-dom';
import { Context } from '../Context';

function SongLyrics() {
    const { allSongs }= useContext(Context);

    const {songId} = useParams();
    
    const thisSong = allSongs.filter(song => song.id === Number(songId));
    console.log("found song",thisSong)
    
    return (
        thisSong.map(song => (
        <div key={song.id}>
            <i style={{fontSize: "20px",color: "blue", position: "relative", top: "2rem", cursor: "pointer", alignItems: "center"}} className="ri-arrow-left-line" onClick={() => history.back()}>Go Back</i>
            <h3 className="lyrics_owner">{song.title}: {song.artist}</h3>
            <div className="lyrics">
                <h3>Lyrics</h3>
                <p>{song.lyrics}</p>
            </div>
            
        </div>
        ))
    )
}

export default SongLyrics
