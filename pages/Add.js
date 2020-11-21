import React, {useState} from 'react'
import { Context } from '../Context';
function Add() {
    const { allSongs }= useContext(Context);
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" value={inputValue} onChange={handleChange} placeholder="Add your todo list" required/> 
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add
