import React, {useContext} from 'react'
import { Context } from '../Context';
function Add() {
    const {
        handleChangeTitle, titleInput,
        handleChangeArtist, artistInput,
        handleChangePrice,
        priceInput,
        handleChangeStyle,
        styleInput,
        handleChangeLyrics,
        lyricsInput,
        handleSubmit }= useContext(Context);
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="input" type="text" name="title" value={titleInput} onChange={handleChangeTitle} placeholder="Title" required/> 
                <input className="input" type="text" name="artist" value={artistInput} onChange={handleChangeArtist} placeholder="Artist" required/> 
                <input className="input" type="number" name="price" value={priceInput} onChange={handleChangePrice} placeholder="Price" required/> 
                <select className="input" type="text" name="style" value={styleInput} onChange={handleChangeStyle} placeholder="Style" required>
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
                <textarea className="input" type="text" name="lyrics" value={lyricsInput} onChange={handleChangeLyrics} placeholder="Lyrics" required rows="10" cols="40"/>
                <button className="add_btn" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add
