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
            <h3 className="lyrics_owner">{song.artist}</h3>
            <div className="lyrics">
                <p>{song.lyrics}</p>
            </div>
        </div>
        ))
    )
}

export default SongLyrics
