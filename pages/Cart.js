import React, {useContext, useState} from 'react';
import CartItem from '../components/CartItem';
import { Context } from '../Context';
import Styled from 'styled-components';

const TotalCostsStyle = Styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 59px;
    margin: 0;
    strong {
        color: #BAE8E8;
    }
`;
const BuyBtnStyle = Styled.button`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 78px;
    color: #000000;

    border-radius: 5px;
    cursor: pointer;
    border: none;
    height: fit-content;
    padding-inline-start: 40px;
    padding-inline-end: 40px;
    background: #FFD803;
    outline: none;

`;

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
                <BuyBtnStyle className="buy_btn" onClick={handleBuy}>{buyBtnText}</BuyBtnStyle>
                :
                <TotalCostsStyle>You have no items in your cart! ⚠</TotalCostsStyle>}
                <TotalCostsStyle className="total-cost"><strong>Total:</strong> {`${totalCosts} Ar`}</TotalCostsStyle>
			
            </div>
		</main>
    )
}

export default Cart
