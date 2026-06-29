import { FiShoppingCart } from "react-icons/fi";
import { Bounce, toast } from "react-toastify";

const SelectedCards = ({selectedTools , setSelectedTools,totalPrice, SetTotalPrice}) => {

const removeButtonHandler =(item)=>{
        SetTotalPrice(totalPrice-item.price);
        setSelectedTools(selectedTools.filter(element=>element!==item));
        toast(`"${item.title}" is removed from cart`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "coloured",
transition: Bounce,
className:`bg-error`,
});
    }
    const proceedButtonHandler=()=>{
        setSelectedTools([]);
        SetTotalPrice(0);
        toast(`Checkout completed successfully`, {
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
    console.log(selectedTools)
    return (
            <>
            <section className="  border-base-30 p-2 md:p-10 space-y-6 rounded-2xl">
                <h2 className="font-bold text-2xl ">Your Cart</h2>
                {
                    selectedTools.length===0
                    ?<div className=" text-center md:p-15 space-y-4">
                    <section className="text-9xl  text-[#627382] inline-block "><FiShoppingCart /></section>
                    <p className=" font-normal text-base text-[#627382]  leading-5">Your cart is empty</p>
                    </div>
                    :
                <>
                <article className=" space-y-4">
                    {  selectedTools.map(item=>{
                        return (
                            <div className="card bg-base-200 shadow-sm rounded-2xl">
                                <div className="card-body flex flex-row  justify-between gap-1.5  ">
                                  <article className="flex gap-4 flex-col md:flex-row">
                                    <span className="bg-base-100 w-18 h-18  md:w-24 md:h-24 rounded-full relative "><img className="w-2/3 md:w-3/4 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 " src={item.icon} alt="" /></span>
                                    <section className="my-auto">
                                      <h2 className="text-[14px] md:text-xl font-bold">{item.title}</h2>
                                      <p className="font-normal text-base text-[#627382]">${item.price}</p>
                                    </section>
                                  </article>
                                  <button id="remove-btn" onClick={()=>removeButtonHandler(item)}  className="h-fit w-fit text-error font-bold my-auto">Remove</button>
                                </div>
                            </div>
                                );
                            })
                    }
                </article>
                <article className="flex justify-between">
                    <p className="font-normal text-base">Total:</p>
                    <h4 className="font-bold text-2xl">${totalPrice}</h4>
                </article>
                <button onClick={proceedButtonHandler} className="btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full  rounded-[100px]">Proceed to Checkout</button>
                </>
                }
            </section>
            </>
    );
};
export default SelectedCards;