import Product from "@/components/Product";
import { productsService } from "@/services/productsService";

const ProductList: React.FC = async () => {
  const products = await productsService.get();

  return (
    <div className="flex flex-col items-center w-full">
      <div className="uppercase text-[10px] sm:text-sm">
        the innovation leader in luxury vinyl plank
      </div>
      <div className="capitalize text-3xl sm:text-5xl">
        let&apos;s get started
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-2 max-w-5xl w-full">
        {products.map((product) => (
          <Product key={`product-${product.id}`} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
