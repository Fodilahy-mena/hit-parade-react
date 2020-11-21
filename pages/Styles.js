import React, {useContext, useState, useEffect} from 'react';
import { Context } from '../Context';
import Style from '../components/Style'

const Styles = () => {
    const { allSongs }= useContext(Context);

    //Remove duplicates from an array of objects in JavaScript

    function getUniqueListBy(allSongs, key) {
        return [...new Map(allSongs.map(song => [song[key], song])).values()]
    }
    const filtereSongStyle = getUniqueListBy(allSongs, 'style')
    console.log("filteredStyles",filtereSongStyle)
    return (
        <div className="styles">
            {filtereSongStyle.map(song => (
				<Style key={song.id} song={song}/>
			))}
        </div>
    )
}

export default Styles
