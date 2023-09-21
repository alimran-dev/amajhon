import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const productDetailsData = useLoaderData();
  const {title, price, images, description } = productDetailsData;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col shadow-md rounded-md w-96">
        <img
          src={images[0]}
          alt=""
          className="w-full h-60 rounded-t-md p-1 border-2 border-gray-400"
        />
        <div className="flex-grow p-4 flex flex-col gap-2">
          <p className="text-2xl font-semibold">{title}</p>
          <div className="flex-grow">
            <p>{description}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">Price: {price}$</p>
            <button
              onClick={handleGoBack}
              className="bg-gray-700 text-white py-2 px-4 rounded-md"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
