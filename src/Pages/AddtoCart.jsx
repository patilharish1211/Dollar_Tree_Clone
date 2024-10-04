import React from 'react';
import { useCart } from './CartContext';
// import { useCart } from './CartContext';

const AddtoCart = () => {
    const { cart } = useCart(); // Get cart items from context

    return (
        <div>
            <h4 style={{textAlign: 'center', marginTop: '15px'}}>Cart Section</h4>
            {cart.length === 0 ? (
                <h5>No items in cart</h5>
            ) : (
                <ul style={{listStyle: 'none'}}>
                    {cart.map((item, index) => (
                        <li key={index} style={{border: '2px solid gray', width: '370px', padding: '10px 10px', borderRadius: '10px'}}>
                            <img src={item.image} alt={item.title} style={{ height: '100px', marginLeft: '130px'}} />
                            <h6 style={{textAlign: 'center'}}>{item.title}</h6>
                            <p style={{fontWeight: 'bolder', textAlign: 'center'}}>Price: {item.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AddtoCart;