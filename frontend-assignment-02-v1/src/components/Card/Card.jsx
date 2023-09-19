import React from 'react'
import "./Card.css"

const Card = ({product}) => {
  return (
    <div className='card' title={`price:${product.price}₹
description: ${product.description}
    `} style={{backgroundColor:"rgb(176 73 63)"}}>
        <div className='card__heading'>{product.title.slice(0,12)}</div>
        <img className='card__image' src={product.thumbnail} alt={product.title}  />
    </div>
  )
}

export default Card