import accountImg from "../assets/create-account.svg"
import chooseProducts from "../assets/choose-products.svg"
import startCreating from "../assets/start-creating.svg"
const GetStartedPortion = () => {
    return (
        <div className="text-center py-12 md:py-32 bg-base-200 px-2">
            <article className="container mx-auto">
            <section>
                <h2 className="font-extrabold text-3xl md:text-5xl">Get Started in 3 Steps</h2>
                <p className="font-normal text-base text-[#627382] leading-5 mt-4 mb-10">Start using premium digital tools in minutes, not hours.</p>
            </section>
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <article>
                    <div className="card bg-base-100 shadow-sm">
                    <div className="w-8 h-8  m-2 ml-auto  rounded-full bg-info bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none relative" ><div className="absolute top-3.75  left-1/2 -translate-x-1/2 -translate-y-1/2 badge bg-base-100 text-transparent bg-clip-text border-none rounded-full font-bold">01</div></div>
                      <figure>
                        <img
                          src={accountImg}
                          alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title  w-fit mx-auto text-2xl font-bold ">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                      </div>
                    </div>
                </article>
                <article>
                    <div className="card bg-base-100 shadow-sm">
                    <div className="w-8 h-8  m-2 ml-auto  rounded-full bg-info bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none relative" ><div className="absolute top-3.75 left-1/2 -translate-x-1/2 -translate-y-1/2 badge bg-base-100 text-transparent bg-clip-text border-none rounded-full font-bold">02</div></div>
                      <figure>
                        <img
                          src={chooseProducts}
                          alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title w-fit mx-auto text-2xl font-bold  ">Choose Products</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                      </div>
                    </div>
                </article>
                <article>
                    <div className="card bg-base-100 shadow-sm">
                    <div className="w-8 h-8  m-2 ml-auto  rounded-full bg-info bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none relative" ><div className="absolute top-3.75 left-1/2 -translate-x-1/2 -translate-y-1/2 badge bg-base-100 text-transparent bg-clip-text border-none rounded-full font-bold">03</div></div>
                      <figure>
                        <img
                          src={startCreating}
                          alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title  w-fit mx-auto text-2xl font-bold  ">Create Account</h2>
                        <p className="">Sign up for free in seconds. No credit card required to get started.</p>
                      </div>
                    </div>
                </article>
            </section>
            </article>
        </div>
    );
};

export default GetStartedPortion;