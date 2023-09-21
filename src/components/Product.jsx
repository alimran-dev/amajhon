import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const { id, title, price, images, description } = product;
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/products/${id}`)
    }
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
          <button onClick={handleDetails} className="bg-gray-700 text-white py-2 px-4 rounded-md">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
