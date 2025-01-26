import React from 'react';

const ProductCard = (props) => {
    return (
        <div>
            <p>Product Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Description: {props.description}</p>
        </div>
    );
};

export default ProductCard;