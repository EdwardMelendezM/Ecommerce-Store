import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

interface ProductProps{
  params:{
    productId:string
  }
}

const ProductPage:React.FC<ProductProps> = async ({
  params
}) => {

  // @ts-ignore
  const product:Array<any> = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId:product[0]?.category?.id
  })

  return ( 
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-8">
            <Gallery
              images={product[0].images}
            />
            <div className="mt-10 px-4 sm:mt-16 sm:px-8 lg:mt-0">
              <Info data={product[0]} />
            </div>
          </div>
          <hr  className="my-10" />
          <ProductList title="Related items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
   );
}
 
export default ProductPage;