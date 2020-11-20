import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Songs from './pages/Songs';
import songsData from './songsData.json';
import Header from './components/Header';
import Styles from './pages/Styles'
import Cart from './pages/Cart';


const App = () => {
    return (
        <div>
            <h1>Hit Parade</h1>
            <Header />
			
			<Switch>
				<Route exact path="/">
                    <Songs/>
				</Route>
                <Route exact path="/styles">
                    <Styles/>
				</Route>
				<Route path="/cart">
					<Cart/>
				</Route>
				
			</Switch>
            
        </div>
    )
}

export default App
