import React, { useEffect } from 'react'
import CarouselHome from 'src/components/CarouselHome/CarouselHome'
import ProductFeature from './component/ProductFeature/ProductFeature'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setListCategory, setListProduct } from 'src/redux/slices/Product';


// git
function Home() {
  const dispatch = useDispatch();
  const getListProduct = async () => {
    const resp = await axios.get('https://shop.cyberlearn.vn/api/Product');
    // console.log(resp);
    const action = setListProduct(resp.data.content)
    dispatch(action);
  };
  useEffect(() => {
    getListProduct();
  }, [])
  

  const getListCategory = async () => {
    const resp = await axios.get('https://shop.cyberlearn.vn/api/Product/getAllCategory');
    const action = setListCategory(resp.data.content)
    dispatch(action);
};
useEffect(() => {
    getListCategory();
}, [])

  return (
    <div>
      <CarouselHome />
      <ProductFeature />
    </div>
  )
}

export default Home