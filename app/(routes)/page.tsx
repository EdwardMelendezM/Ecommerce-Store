import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

import { Billboard as BillboardType } from "@/types";

export const revalidate = 0;

const HomePage = async () => {

  const products = await getProducts({isFeatured:true})

  // @ts-ignore
  const billboard: BillboardType[]  = await getBillboard("e107eb78-330c-4309-8faf-8897a108801f")


  return ( 
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard[0]}  />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList
            title="Featured Products"
            items={products}
            />
          
        </div>
      </div>
    </Container>
   );
}
 
export default HomePage;