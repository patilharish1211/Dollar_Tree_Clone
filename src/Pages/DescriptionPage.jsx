import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Import Cart Context

const DescriptionPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const { dispatch } = useCart(); // Use the dispatch from the cart context

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error(err);
                navigate('/products');
            });
    }, [id, navigate]);

    if (!product) {
        return <p>Loading...</p>;
    }

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        navigate('/cart'); // Navigate to cart page after adding to cart
    };

    return (
        <div className="container" style={{ marginTop: '50px', textAlign: 'center' }}>
            <h5 className="title">{product.title}</h5>
            <div className="content">
                <img src={product.image} alt={product.title} className="image" style={{ height: '200px' }} />
                <div className="info">
                    <h2><b>Price:</b> {product.price}</h2>
                    <p style={{ width: '500px', marginLeft: '300px' }}><b>Description:</b> {product.description}</p>
                    <button 
                        style={{ padding: '5px 15px', fontSize: '18px', border: '2px solid black', borderRadius: '10px' }}
                        onClick={handleAddToCart}
                    >
                        Add To Cart 🛒
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DescriptionPage;
