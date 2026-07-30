
const ProductCard = (props) => {
  console.log(props);
  return (
    <div className='card product-card'>
      <img
      // src = {gucci}
      // alt = "Product Image"
      // className = "product-img"
      />
      <h3>{props.name}</h3>
      <p className='price'>NPR 25,000</p>
      <p className='description'>This unmistakable pattern decorates this small handbag as part of the latest Ophidia collection. A Double G hardware completes the style </p>
      <button className='btn buy-btn'>Buy now</button>
    </div>
  );
};

export default ProductCard;