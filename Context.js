import React, {useState, useEffect} from 'react'
import songsData from './songsData.json';

const Context = React.createContext();

function ContextProvider(props) {

    const [allSongs, setAllSongs] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    ///
    const [titleInput, setTitleInput] = useState('');
    const [artistInput, setArtistInput] = useState('');
    const [styleInput, setStyleInput] = useState('');
    const [lyricsInput, setLyricsInput] = useState('');
    const [priceInput, setPriceInput] = useState(0);
    // const [songs, setSongs] = useState([])

    useEffect(() => {
        setAllSongs(songsData);
    }, []);
    
    const addNewSong = () => {
        setAllSongs([
            ...allSongs,
            {
                artist: artistInput,
                style: styleInput,
                id: Date.now(),
                title: titleInput,
                upVotes: 0,
                downVotes: 0,
                isFavorite: false,
                lyrics: lyricsInput,
                price: Number(priceInput),
            }
        ]);
    };
    const handleChangeTitle = (e) => {
        e.preventDefault();
        setTitleInput(e.target.value)
    }
    const handleChangeArtist = (e) => {
        e.preventDefault();
        setArtistInput(e.target.value)
    }
    const handleChangePrice = (e) => {
        e.preventDefault();
        setPriceInput(e.target.value)
    }
    const handleChangeStyle = (e) => {
        e.preventDefault();
        setStyleInput(e.target.value)
    }
    const handleChangeLyrics = (e) => {
        e.preventDefault();
        setLyricsInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(titleInput === '') return;
        if(artistInput === '') return;
        if(styleInput === '') return; 
        if(lyricsInput === '') return;
        addNewSong();
        setTitleInput('');
        setArtistInput('');
        setPriceInput(0);
        setStyleInput('');
        setLyricsInput('')
        console.log(allSongs);
        
    }
    // console.log("newsongs",songs)

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
        handleChangeTitle,
        titleInput, 
        handleChangeArtist, 
        artistInput,
        handleChangePrice,
        priceInput,
        handleChangeStyle,
        styleInput,
        handleChangeLyrics,
        lyricsInput,
        handleSubmit}}>
                {props.children}
            </Context.Provider>
}

export { ContextProvider, Context};