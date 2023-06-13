import React from "react";
import { useSelector } from 'react-redux';

function ListProduct() {
    const {} = useSelector((state) => state.ProductReducer);
    return <div>ListProduct</div>;
};

export default ListProduct;