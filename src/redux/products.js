const url = 'https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/v2/amz/amazon-lookup-prices?page=1&domainCode=com&asin=B07QFC6LN6';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '37709b3824msh3576a8ec77e387dp1dfc39jsnd88e4c37edba',
    'X-RapidAPI-Host': 'axesso-axesso-amazon-data-service-v1.p.rapidapi.com'
  }
};

const GET_PRODUCTS = 'GET_PRODUCTS';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export const getProducts = products => ({
  type: GET_PRODUCTS,
  products
});

export const fetchProducts = () => async dispatch => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export default productsReducer;
