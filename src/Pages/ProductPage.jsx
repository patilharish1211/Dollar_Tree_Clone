import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    const getDataFromServer = () => {
        axios.get(' http://localhost:3000/products')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getDataFromServer();
    }, []);

    return (
        <div className="container-fluid mt-5" style={{ overflowX: 'hidden'}}>
            <div className="mainproductinfo row">
                {products.map((product) => (
                    <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-4">
                        <div className="card product-card w-100 h-100 p-0">
                            <Link to={`/descriptionpage/${product.id}`} className="text-decoration-none">
                                <div className="product-image-container">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="product-image"
                                        style={{height: '200px', width: '200px', marginLeft: '50px'}}
                                    />
    
                                </div>
                            </Link>
                            <div className="card-body text-center p-0 mt-5">
                                <h5 className="product-title">{product.title}</h5>
                                <h6 className="product-price">{product.price}</h6>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
