import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Songs from './pages/Songs';
import Header from './components/Header';
import Styles from './pages/Styles'
import Cart from './pages/Cart';
import StyleName from './pages/StyleName';
import SongLyrics from './pages/SongLyrics';
import Add from './pages/Add';



function App() {
    return (
        <div>
            <Link to="/">
                <h1>Hit Parade</h1>
			</Link>
            
            <Header />
			
			<Switch>
				<Route exact path="/">
                    <Songs/>
				</Route>
                
                <Route exact path="/styles">
                    <Styles/>
				</Route>

                <Route path="/add">
					<Add/>
				</Route>

                <Route path="/cart">
					<Cart/>
				</Route>

                <Route path="/styles/:styleName">
                    <StyleName/>
				</Route>
                <Route path="/song/:songId">
                    <SongLyrics/>
                </Route>
			</Switch>
            
        </div>
    )
}

export default App
