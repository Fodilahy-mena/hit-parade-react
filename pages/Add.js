import React, {useContext, useState} from 'react'
import { Context } from '../Context';
function Add() {
    const {allSongs, setAllSongs}= useContext(Context);
    ///
    const [title, setTitleInput] = useState('');
    const [artist, setArtistInput] = useState('');
    const [style, setStyleInput] = useState('');
    const [lyrics, setLyricsInput] = useState('');
    const [price, setPriceInput] = useState(0);
    // const [songs, setSongs] = useState([])

    const addNewSong = () => {
        setAllSongs([
            ...allSongs,
            {
                artist,
                style,
                id: Date.now(),
                title,
                upVotes: 0,
                downVotes: 0,
                isFavorite: false,
                lyrics,
                price: Number(price),
            }
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title === '') return;
        if(artist === '') return;
        if(style === '') return; 
        if(lyrics === '') return;
        addNewSong();
        setTitleInput('');
        setArtistInput('');
        setPriceInput(0);
        setStyleInput('');
        setLyricsInput('')
        console.log(allSongs);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="input" type="text" name="title" value={title} onChange={(e) => setTitleInput(e.target.value)} placeholder="Title" required/> 
                <input className="input" type="text" name="artist" value={artist} onChange={(e) => setArtistInput(e.target.value)} placeholder="Artist" required/> 
                <input className="input" type="number" name="price" value={price} onChange={(e) => setPriceInput(e.target.value)} placeholder="Price" required/> 
                <select className="input" type="text" name="style" value={style} onChange={(e) =>  setStyleInput(e.target.value)} placeholder="Style" required>
                    <option value="">Style</option>
                    <option value="Bassessa">Bassessa</option>
                    <option value="Country">Country</option>
                    <option value="Hip Pop">Hip Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Kaoitry">Kaoitry</option>
                    <option value="Regbae">Reggae</option>
                    <option value="Rock">Rock</option>
                    <option value="R&B">R&B</option>
                    <option value="Soul">Soul</option>
                    <option value="Salegy">Salegy</option>
                    <option value="Tsapiky">Tsapiky</option>
                    <option value="Wassa">Wassa</option>
                    <option value="Waza">Waza</option>
                    <option value="Others">Others</option>
                </select> 
                <textarea className="input" type="text" name="lyrics" value={lyrics} onChange={(e) => setLyricsInput(e.target.value)} placeholder="Lyrics" required rows="5" cols="40"/>
                <button className="add_btn" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add
