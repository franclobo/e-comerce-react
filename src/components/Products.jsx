import React from 'react'
import PropTypes from 'prop-types'

function Products(props) {
  const {
    price,
    reviews,
    img,
    title,
    url,
  } = props;
  return (
    <div>
      <div className="card">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
          <p className="card-text">{reviews}</p>
        </div>
        <div className="card-footer">
          <span className="text-muted">{url}</span>
          <button type="button" className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  )
};

Products.propTypes = {
  price: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Products;
