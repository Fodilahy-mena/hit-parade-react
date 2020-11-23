import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../Context';

function Header() {
	const { cartItems }= useContext(Context);
	console.log("crt itm",cartItems)
    return (
        <header>
			<Link to="/">
				<h2>🔥 Popular songs</h2>
			</Link>
            <Link to="/styles">
				<h2>💝 Styles</h2>
			</Link>
            <Link to="/add">
				<h2><i className="ri-add-box-fill filledAddCart"></i> Add</h2>
			</Link>
			<Link to="/cart">
                <h2> {cartItems.length > 0 ? <i className="ri-shopping-cart-fill cartheadfill"></i> : <i className="ri-shopping-cart-line cartheadnull"></i>} Cart</h2>
			</Link>
		</header>
    )
}

export default Header
