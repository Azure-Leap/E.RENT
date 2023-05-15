import ProductCard from "@/components/Product/ProductCard";
import ProductHeader from "@/components/Product/ProductCard/ProductHeader";
import ProductSwiper from "@/components/Product/ProductCard/ProductSwiper";
import ProductSideBar from "@/components/Product/Productsidebar";
import Link from "next/link";
// const product = ({ product }: any) => {
//   const router = useRouter();
//   console.log("product", product);
//   if (router.isFallback) {
//     return <div>Уншиж байна...</div>;
//   }
// };

const ProductList = ({ products, }: any) => {
  console.log("P", products);
  return (
    <>
    
      <ProductHeader>
        <ProductSideBar />
        {products?.map((product: any, idx: number) => (
          <ProductCard product={product} />
         
        ))}
      </ProductHeader>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:9000/products/`);
  const data = await res.json();
  console.log("PP", data);

  return { props: { products: data.products } };
}
export default ProductList;
