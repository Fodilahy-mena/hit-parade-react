import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
			<Link to="/">
				<h2>🔥 Popular songs</h2>
			</Link>
            <Link to="/styles">
				<h2>💝 Styles</h2>
			</Link>
            <Link to="/add">
				<h2>🤨 Add</h2>
			</Link>
			<Link to="/cart">
                <h2>👜 Cart</h2>
			</Link>
		</header>
    )
}

export default Header
