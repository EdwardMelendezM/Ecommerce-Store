import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

import { Billboard as BillboardType } from "@/types";

export const revalidate = 0;

const HomePage = async () => {

  // @ts-ignore
  const billboard: BillboardType[]  = await getBillboard("e107eb78-330c-4309-8faf-8897a108801f")


  return ( 
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard[0]}  />
      </div>
    </Container>
   );
}
 
export default HomePage;