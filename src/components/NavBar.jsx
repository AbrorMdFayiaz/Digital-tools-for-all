import NavBarLinks from './NavBarLinks';
import { FiShoppingCart } from 'react-icons/fi';
const NavBar = ({selectedTools}) => {
    return (
               <article className='shadow-sm '>
                   <div className=" container mx-auto navbar text-left bg-base-100 flex flex-col lg:flex-row gap-4 justify-between ">
                    <section className=" ">
                     <a className="text-2xl text-left inline-block mr-auto  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text font-black">DigiTools</a>
                    </section>
                    <section className=''>
                     <NavBarLinks></NavBarLinks>
                    </section>
                    <section className='flex gap-4 items-center'>
                        {/* cart indicator */}
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                          <FiShoppingCart />
                          <div className="indicator">
                          {
                            selectedTools.length===0
                            ?""
                            :<span className='relative'><span className="absolute -top-3.5 right-0 badge badge-sm border-none indicator-item  text-base-100 bg-linear-to-r from-[#4F39F6] to-[#9514FA]  ">{selectedTools.length}</span></span>
                          }
                            
                          </div>
                        </div>
                        {/* cart indicator */}
                     <a href="">Login</a>
                     <button className="btn btn-primary rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Get Started</button>
                    </section>
                   </div>
               </article>
    );
};
export default NavBar;