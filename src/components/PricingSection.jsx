import { use } from 'react';
const promisePricingCardData = fetch('/allJson/pricingCardsInfo.json').then(r=>r.json());
const PricingSection = () => {
        const cardsPricingData=use(promisePricingCardData);
        // console.log(cardsPricingData);
    return (
        <section className='my-11 md:my-32 py-11 md:py-32'>
            <div className='text-center  '>
                <h2 className="font-extrabold text-3xl md:text-5xl">Simple, Transparent Pricing</h2>
                <p className="font-normal text-base text-[#627382] leading-5 mt-4 mb-10">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <article className=" container mx-auto grid lg:grid-cols-3 gap-7 px-2">
                        {  cardsPricingData.map(item=>{
                    return (
                            <div className={`card bg-base-200 shadow-sm ${ item.isMostPopular?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-base-100 ":"bg-base-100" }  `}>
                                <div className="card-body relative ">
                                    {
                                        item.isMostPopular
                                        ?<span className="absolute -top-0.5 left-1/2 -translate-x-1/2 -translate-y-1/2 badge badge-xs  px-3 py-4 font-medium text-base rounded-3xl border-none bg-[#FEF3C6]  text-[#BB4D00]">Most Popular</span>:""
                                    }
                                    <h2 className="text-3xl font-bold">{item.planName}</h2>
                                    <p className={`font-normal text-base leading-5 ${ item.isMostPopular?"text-base-100":"text-[#627382]" }`}>{item.description}</p>
                                    <h3 className="text-[40px] font-bold ">${item.price}<span className={`font-normal text-[20px] ${item.isMostPopular?"text-base":"text-[#627382]"} `}>/Month</span></h3>
                                  <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    {
                                        item.features.map(element=>{
                                            return(
                                                <li>
                                                  <svg xmlns="http://www.w3.org/2000/s.   vg" className={`size-4 me-2 inline-block  ${item.isMostPopular?"":"text-success"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                  <span className={`font-normal text-base  leading-5 ${ item.isMostPopular?"text-base-100":"text-[#627382]" } `}>{element}</span>
                                                </li>
                                            )
                                        })
                                    } 
                                  </ul>
                                  <div className="mt-6">
                                    <button className={`btn btn-primary btn-block rounded-3xl ${ item.isMostPopular?"bg-base-100":"bg-linear-to-r from-[#4F39F6] to-[#9514FA]" } border-none`}><span className={`${item.isMostPopular?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent":"" }`}>{item.buttonText}</span>
                                    </button>
                                  </div>
                                </div>
                            </div>
                    );
                })
            }
            </article>
        </section>
    );
};
export default PricingSection;