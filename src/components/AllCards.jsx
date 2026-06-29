import { use } from "react";
import { Bounce, toast } from "react-toastify";

const promiseCardData = fetch('/allJson/cards.json').then(r=>r.json());

const AllCards = ({selectedTools , setSelectedTools,totalPrice, SetTotalPrice}) => {
    const cardsData=use(promiseCardData);
    // console.log(cardsData);

    const cardButtonHandler=(item)=>{

      if (selectedTools.includes(item)) {
        toast(`"${item.title}" has already added in cart`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "coloured",
transition: Bounce,
className:`bg-warning`,
});
        return ;
      }
      else{
        setSelectedTools([...selectedTools , item]);
        SetTotalPrice(totalPrice+item.price);
        toast(`"${item.title}" is added in cart`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "coloured",
transition: Bounce,
className:`bg-success`,
});
      }
    }
    return (
        <>
        <article className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                    {  cardsData.map(item=>{
                return (
                        <div className="card  bg-base-100 shadow-sm ">
                            <div className="card-body">
                              <span className={`badge badge-xs  ml-auto px-3 py-4 font-medium text-base rounded-3xl border-none  ${item.badge==="Best Seller"?"badge-warning bg-[#FEF3C6]  text-[#BB4D00]":item.badge==="New"?"badge-success   bg-[#DBFCE7]  text-[#0A883E]":item.badge==="Popular"?"badge-info bg-[#E1E7FF]  text-primary":""}`}>{item.badge}</span>
                              <img className="w-1/6" src={item.icon} alt="" />
                                <h2 className="text-3xl font-bold">{item.title}</h2>
                                <p className="font-normal text-base text-[#627382] leading-5">{item.description}</p>
                                <h3 className="text-xl">${item.price}<span className="font-normal text-base text-[#627382]">{item.billingCycle}</span></h3>
                              <ul className="mt-6 flex flex-col gap-2 text-xs">
                                {
                                    item.features.map(element=>{
                                        return(
                                            <li>
                                              <svg xmlns="http://www.w3.org/2000/s.   vg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                              <span className="font-normal text-base text-[#627382] leading-5">{element}</span>
                                            </li>
                                        )
                                    })
                                } 
                              </ul>
                              <div className="mt-6">
                                <button onClick={()=>cardButtonHandler(item)} className={`btn btn-primary btn-block rounded-3xl ${selectedTools.includes(item)?"bg-success":"bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} border-none`}>{selectedTools.includes(item)?"Added to cart":"Buy Now"}</button>
                              </div>
                            </div>
                        </div>
                );
            })
        }
        </article>
        </>
    );
};
export default AllCards;