import React from 'react';
import star from './star.png';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider/StateProvider';


function CheckoutProduct({ id, title, image, price, rating }) {
    const [{cart}, dispatch] = useStateValue();

    console.log(id, title, image, price, rating);

    const removeFromCart = () => {
        //remove item from basket
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        });
    }

    return (
        <div className = "checkoutProduct">
            <img className= "checkoutProduct__image" src = {image} alt = "" />

            <div className = "checkoutProduct__info">
                <p className = "checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <img src={star} alt="" className="star" />
                            ))
                    }
                </div>
                <button onClick = {removeFromCart}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
