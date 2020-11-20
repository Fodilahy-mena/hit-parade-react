import React, {useContext} from 'react';
import Song from '../components/Song';
import { Context } from '../Context';

function Songs() {
    const { allSongs }= useContext(Context);
    console.log("alls", allSongs)
    return (
        <main className="main">
			{allSongs.map(song => (
				<Song key={song.id} song={song}/>
			))}
			
		</main>
    )
}

export default Songs
