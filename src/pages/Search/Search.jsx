import React, { useEffect, useState } from 'react'
import './Search.scss'
import axios from 'axios';
import ListProduct from 'src/components/ListProduct/ListProduct';
import { useDispatch, useSelector } from 'react-redux';
import { setListProduct } from 'src/redux/slices/Product';


function Search() {

  const { listProduct } = useSelector((state) => state.ProductReducer);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [sortOption, setSortOption] = useState([]);
  const dispatch = useDispatch();
  const getListProduct = async () => {
    const resp = await axios.get('https://shop.cyberlearn.vn/api/Product');

    console.log({ resp });

    const action = setListProduct(resp.data.content);

    console.log(action);
    dispatch(action);

  };

  useEffect(() => {
    getListProduct();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const results = listProduct.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleChangeSearchTerm = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const results = listProduct.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };


  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedResults = sortOption ? [...searchResults].sort((a, b) => {
    if (sortOption === 'asc') {
      return a.price - b.price;
    } else if (sortOption === 'desc') {
      return b.price - a.price;
    }
  }) : searchResults;

  return (
    <>
      <div className='search-input-container'>
        <label>Search</label>
        <form className="form-inline" onSubmit={handleSearch}>
          <input
            className="form-control"
            type="search"
            placeholder="Product name ..."
            aria-label="Search"
            value={searchTerm}
            onChange={handleChangeSearchTerm}
          />
          <button className="btn-search" type="submit">Search</button>
        </form>
      </div>

      <div className="search-result-container">
        <div className='result-title'>
          <h3>Search result</h3>
        </div>

        <div className="search-by-price">
          <label>Price</label>
          <select className="form-control" value={sortOption} onChange={handleSortOptionChange}>
            <option value="desc">decrease</option>
            <option value="asc">ascending</option>
          </select>
        </div>

        <ListProduct style={{marginBottom: '5rem', }} listProduct={sortOption ? sortedResults : searchResults}/>


      </div>
    </>

  )
}

export default Search