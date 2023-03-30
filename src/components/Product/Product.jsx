import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { id, name, price, img, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className="product">
            <div style={{ padding: '8px' }}>
                {img
                    ?
                    <img src={img} alt="" />
                    :
                    <div style={{ height: '334.19px', width: '334.19px', marginTop: '0px', backgroundColor: '#eceff1', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ fontWeight: 'bold' }}>No Image Available</span>
                    </div>}
            </div>
            <div className="product-info">
                <h6 className="product-name">{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <br />
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>

            <button onClick={() => handleAddToCart(props.product)} className="add-to-cart-btn" >
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;