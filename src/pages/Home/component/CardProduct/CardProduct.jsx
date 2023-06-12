import React from 'react';
import './CardProduct.scss';

import { Heart1 , Heart2 } from 'src/assets/icon';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/slides/Cart';

function CardProduct(props) {
    const { product } = props;
    const dispatch = useDispatch();
    return (
        <div className='card-product'>
            <div className='icon-heart'>
               <Heart1 />
            </div>
            <div className="card-product-img">
                <img src={product.image} alt="" />
            </div>
            <div className="card-product-content">
                <p className="content-title">{product.name}</p>
                <p className="content-sub">{product.shortDescription}</p>
            </div>
            <div className="card-product-interact">
                <button className='card-product-btn buy-now' onClick={() => dispatch(addToCart(product))}>Buy now</button>
                <button className='card-product-btn price'>{product.price}$</button>
            </div>
        </div>
    )
}

export default CardProduct