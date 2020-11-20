import React, {useContext} from 'react';
import { Context } from '../Context';
import Style from '../components/Style'

const Styles = () => {
    const { allSongs }= useContext(Context);
    return (
        <div>
            {allSongs.map(song => (
				<Style key={song.id} song={song}/>
			))}
        </div>
    )
}

export default Styles
