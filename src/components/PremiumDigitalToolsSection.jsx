import { Suspense, useState } from "react";
import AllCards from "./AllCards";
import SelectedCards from "./SelectedCards";

const PremiumDigitalToolsSection = ({selectedTools , setSelectedTools}) => {
      const [productsButtonIsSelected,setProductsButtonIsSelected] = useState(true);
      const [totalPrice, SetTotalPrice]=useState(0);
    return (
        <div className="my-12 md:my-32 px-2 container mx-auto">
            <section className="text-center space-y-4">
                <h1 className="font-extrabold text-5xl">Premium Digital Tools</h1>
                <p className="font-normal text-base text-[#627382] leading-5 my-4">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </section>
            <section className="mt-4 mb-10">
                <article className='border border-base-300 w-fit rounded-4xl p-0.5 mx-auto'>
                    <button onClick={()=>setProductsButtonIsSelected(true)} className={`btn  border-none rounded-4xl m-0.5  ${productsButtonIsSelected?'bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-primary':''}  `}>Products</button>
                    <div className='inline-block rounded-4xl p-0.5'>
                       <button onClick={()=>setProductsButtonIsSelected(false)} className={`btn rounded-4xl border-none ${productsButtonIsSelected?'':'bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-primary'} `}>Cart ({selectedTools.length})</button>
                    </div>
                </article>
            </section>
            <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
            {/* Card Component called here */}
                {productsButtonIsSelected
                ?<AllCards selectedTools={selectedTools} setSelectedTools={setSelectedTools} totalPrice={totalPrice} SetTotalPrice={SetTotalPrice}></AllCards>
                :<SelectedCards selectedTools={selectedTools} setSelectedTools={setSelectedTools} totalPrice={totalPrice} SetTotalPrice={SetTotalPrice} ></SelectedCards>}
            </Suspense>
        </div>
    );
};
export default PremiumDigitalToolsSection;