import { useLoaderData, useNavigation } from "react-router-dom";
import Product from "../../components/Product";

const Products = () => {
  const { products } = useLoaderData();
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" ? (
        <div className="h-screen flex justify-center items-center -mt-10">
          <span className="loader block w-24 h-24 border-[15px] border-b-[gray] border-black rounded-full animate-spin text-center"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
