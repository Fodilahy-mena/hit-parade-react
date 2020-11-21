import React, {useContext} from 'react';
import {useHistory,useParams, Link} from 'react-router-dom';

import { Context } from '../Context';
function StyleName() {
    const { allSongs }= useContext(Context);

    const {styleName} = useParams();
    
    const thisSong = allSongs.filter(song => song.style === styleName);
    
    function getUniqueListBy(thisSong, key) {
        return [...new Map(thisSong.map(song => [song[key], song])).values()]
    }
    const songStyle = getUniqueListBy(thisSong, 'style')
    console.log("filteredStyle",songStyle)
    
    return (
        <>
            {songStyle.map(song => (
                <h3 className="individualStyle" key={song.id}>🎧 {song.style}</h3>
            ))}

            {thisSong.map(song => (
                <Link className="link__to-lyrics" key={song.id} to={`/song/${song.id}`}>
                    <div className="song_from_style" key={song.id}>
                        <h2>{song.title}</h2>
                        <span>{song.artist}</span>
                    </div>
                </Link>
                
            ))}
        </>
    )
}

export default StyleName
