import React, { useRef } from 'react';
import { Carousel } from 'antd';
import './CarouselHome.scss'
const contentStyle = {
    margin: 0,
    // height: 700,
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
import { Polygon1, Polygon2 } from 'src/assets/icon'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from 'src/redux/slices/Cart';
function CarouselHome() {
    const carouselRef = useRef();
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    const dispatch = useDispatch();
    const rs = useSelector(state => state.ProductReducer);
    const { listProduct } = rs;

    return (
        <div style={{ position: 'relative' }}>
            <button className='polygon-2' onClick={() => {
                carouselRef.current.prev();
            }}><Polygon2 /></button>
            <button className='polygon-1' onClick={() => {
                carouselRef.current.next();
            }}><Polygon1 /></button>
            <Carousel ref={carouselRef} effect='fade' dotPosition='bot' afterChange={onChange} autoplay>
                {listProduct.map((product) => {
                    return <div style={contentStyle} className='carousel' key={product.id}>
                        <img src={product.image} alt="" style={{ width: 689, height: 383, objectFit: 'cover', marginRight: '13rem' }} />
                        <div>
                            <p className='pro-name'>{product.name}</p>
                            <p className='pro-des'>{product.description}</p>
                            <button className='btn-carousel' onClick={() => dispatch(addToCart(product))}><p>Buy now</p></button>
                        </div>
                    </div>
                })}
            </Carousel>
        </div>
    )
}

export default CarouselHome




{/*                 
                <div >
                    <div style={contentStyle} className='carousel'>
                        <img src="https://shop.cyberlearn.vn/images/adidas-prophere.png" alt="" style={{ width: 689, height: 383, objectFit: 'cover', marginRight: '13rem' }} />
                        <div>
                            <p className='pro-name'>Adidas Prophere</p>
                            <p className='pro-des'>The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.</p>
                            <button className='btn-carousel'><p>Buy now</p></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={contentStyle} className='carousel'>
                        <img src="https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png" alt="" style={{ width: 689, height: 383, objectFit: 'cover', marginRight: '13rem' }} />
                        <div>
                            <p className='pro-name'>Adidas Prophere Black White</p>
                            <p className='pro-des'>The midsole contains 20% more Boost for an amplified Boost feeling.</p>
                            <button className='btn-carousel'><p>Buy now</p></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={contentStyle} className='carousel'>
                        <img src="https://shop.cyberlearn.vn/images/adidas-prophere-customize.png" alt="" style={{ width: 689, height: 383, objectFit: 'cover', marginRight: '13rem' }} />
                        <div>
                            <p className='pro-name'>Adidas Prophere Customize</p>
                            <p className='pro-des'>The midsole contains 20% more Boost for an amplified Boost feeling.</p>
                            <button className='btn-carousel'><p>Buy now</p></button>
                        </div>
                    </div>
                </div> */}