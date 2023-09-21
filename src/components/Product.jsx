import PropTypes from "prop-types";

const Product = ({ product }) => {
  const { title, price, images, description } = product;
  console.log(product);
  return (
    <div className="flex flex-col shadow-md rounded-md">
      <img
        src={images[0]}
        alt=""
        className="w-full h-52 rounded-t-md p-1 border-2 border-gray-400"
      />
      <div className="flex-grow p-4 flex flex-col gap-2">
        <p className="text-2xl font-semibold">{title}</p>
        <div className="flex-grow">
          <p>{description}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-medium">Price: {price}$</p>
          <button className="bg-gray-700 text-white py-2 px-4 rounded-md">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
