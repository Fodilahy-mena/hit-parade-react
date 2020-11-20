import React, { useContext } from 'react'
import {Context} from '../Context';

function Song({song}) {
    const {toggleFavorite, 
        toggleUpVotes, 
        toggleDownVotes,
        addSongToCart,
        cartItems,
        removeSongFromCart} = useContext(Context);

        function cartIcon() {
            if(cartItems.some(cartItem => cartItem.id === song.id)) {
                return (<i onClick={() => removeSongFromCart(song.id)} className="ri-shopping-cart-2-fill"></i>)
            } else {
               return (<i onClick={() => addSongToCart(song)} className="ri-shopping-cart-2-line"></i>)
            }
        }
    return (
        <div className="song">
            <div className="song_favorite">
               {song.isFavorite ?
                <i onClick={() => toggleFavorite(song.id)} className="ri-heart-fill"></i> 
                : <i onClick={() => toggleFavorite(song.id)} className="ri-heart-line"></i>} 
            </div>
            
            <div>
                <h2>{song.title}</h2>
                <span>{song.artist}</span>
            </div>
            <div className="song_votes">
                <div className="votes_up">
                    <span>{song.upVotes}</span>
                    <button onClick={() => toggleUpVotes(song.id)}>
                        <i className="ri-arrow-up-line"></i>
                    </button>
                </div>
                
                <div className="votes_down">
                    <span>{song.downVotes}</span>
                    <button onClick={() => toggleDownVotes(song.id)}>
                        <i className="ri-arrow-down-line"></i>
                    </button>
                </div>
            </div>
            <div className="song_interest">
                {cartIcon()}
                <i className="ri-more-fill"></i>
            </div>
        </div>
    )
}

export default Song
