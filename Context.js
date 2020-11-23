import React, {useState, useEffect} from 'react'
import songsData from './songsData.json';

const Context = React.createContext();

function ContextProvider(props) {

    const [allSongs, setAllSongs] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        initCartItems();
    }, [])
    useEffect(() => {
        const lsAllSongs = JSON.parse(localStorage.getItem('allSongs'));
        if(lsAllSongs) {
            setAllSongs(lsAllSongs)
        } else {
        setAllSongs(songsData);
        }
    }, []);

    useEffect(() => {
        if(allSongs.length > 0) {
            localStorage.setItem('allSongs', JSON.stringify(allSongs));
        }
        
    }, [allSongs])

    function initCartItems() {
        const lsCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if(lsCartItems) {
            setCartItems(lsCartItems)
        }
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])
    
    function sortSong(songA, songB) {
		const rateSongA = songA.upVotes - songA.downVotes;
		const rateSongB = songB.upVotes - songB.downVotes;
		return rateSongB - rateSongA;
    }
    allSongs.sort(sortSong);
    
    // updating isFavorite when clicked
    function toggleFavorite(id) {
        const newSongsArray = allSongs.map(song => {
            // if it is the one, let's return an updated object
            if(song.id === Number(id)) {
                
                // update this element
                return {
                    ...song,
                    isFavorite: !song.isFavorite,}
                    
            }
            // it's not the one I am looking for, therefore, I will not change it
            return song;
        })
        setAllSongs(newSongsArray)
        console.log("updated nw sng",allSongs)
    }
    function toggleUpVotes(id) {
        const songsArrayUpdateUpVotes = allSongs.map(song => {
            // if it is the one, let's return an updated object
            if(song.id === Number(id)) {
                
                // update this element
                return {
                    ...song,
                    upVotes: song.upVotes + 1,}
                    
            }
            // it's not the one I am looking for, therefore, I will not change it
            return song;
        })
        setAllSongs(songsArrayUpdateUpVotes)
    }
    function toggleDownVotes(id) {
        const songsArrayUpdateDownVotes = allSongs.map(song => {
            // if it is the one, let's return an updated object
            if(song.id === Number(id)) {
                
                // update this element
                return {
                    ...song,
                    downVotes: song.downVotes + 1,}
                    
            }
            // it's not the one I am looking for, therefore, I will not change it
            return song;
        })
        setAllSongs(songsArrayUpdateDownVotes)
    }
    function addSongToCart(song) {
        // how to add an element to an array, in an immutable way
        // push is mutable (array.push(newstaff))
        // map is immutable (let newArray = array.map())
        
        setCartItems(prevItem => [...prevItem, song]);
    }

    function removeSongFromCart(song) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== song));
        }

    function boughtCart() {
        setCartItems([]);
    }
    return <Context.Provider value={{
        allSongs,
        toggleFavorite,
        toggleUpVotes, 
        toggleDownVotes, 
        addSongToCart, 
        cartItems,
        removeSongFromCart,
        boughtCart, 
        setAllSongs
        }}>
                {props.children}
            </Context.Provider>
}

export { ContextProvider, Context};