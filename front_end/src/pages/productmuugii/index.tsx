import ProductCard from "@/components/Product/ProductCard";

// import ProductSwiper from "@/components/Product/ProductCard/ProductSwiper";
import ProductSideBar from "@/components/Product/Productsidebar";
import { BASE_URL_API } from "@/util/variables";
// import Link from "next/link";
// const product = ({ product }: any) => {
//   const router = useRouter();
//   console.log("product", product);
//   if (router.isFallback) {
//     return <div>Уншиж байна...</div>;
//   }
// };

const ProductList = ({ products }: any) => {
  console.log("P", products);
  return (
    <>
     
        <ProductSideBar />
        {products?.map((product: any, idx: number) => (
          <ProductCard product={product} key={idx} />
        ))}
     
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL_API}/products/`);
  const data = await res.json();
  console.log("PP", data);

  return { props: { products: data.products } };
}
export default ProductList;
