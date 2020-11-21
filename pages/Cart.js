import React, {useContext, useState} from 'react';
import CartItem from '../components/CartItem';
import { Context } from '../Context';


const Cart = () => {
    const { cartItems, boughtCart }= useContext(Context);
    const [buyBtnText, setBuyBtnText] = useState("Buy");
	
    console.log(cartItems)

    function handleBuy() {
		//change the text
		setBuyBtnText("Buying....")
		setTimeout(() => {
			boughtCart();
			setBuyBtnText("Buy")   
			}, 3000)
		//when the order resolve, change the text again
	}

    const itemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))
    const totalCosts = cartItems.reduce((sum, item) => {
        return sum = sum + item.price;
    }, 0);
    
    return (
        <main className="main">
			{itemElements}
            <div className="costs">
                {cartItems.length > 0 ? 
                <button className="buy_btn" onClick={handleBuy}>{buyBtnText}</button>
                :
                <p>You have no items in your cart! ⚠</p>}
                <p className="total-cost"><strong>Total:</strong> {`${totalCosts} Ar`}</p>
			
            </div>
		</main>
    )
}

export default Cart
