import React, {useContext} from 'react';
import {Context} from '../Context';

function CartItem({item}) {
    const {removeSongFromCart} = useContext(Context);
    return (
        <div className="cart_item">
            <div className="item_delete">
                <i onClick={() => removeSongFromCart(item.id)} className="ri-delete-bin-5-line"></i>
            </div>
            <div>
                <h2>{item.title}</h2>
                <span>{item.artist}</span>
            </div>
            <p>{item.price} Ar</p>
        </div>
    )
}

export default CartItem
