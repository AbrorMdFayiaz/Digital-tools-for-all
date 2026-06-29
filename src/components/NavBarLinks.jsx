import { use } from 'react';
import { Suspense } from 'react';

const promiseNavLinksData=fetch("/allJson/navLinks.json").then(r=>r.json());

const NavBarLinks = () => {
    const navLinksData=use(promiseNavLinksData);
    return (
        <div>
            <ul className='flex gap-2.5 sm:gap-8 text-sm '>
                <Suspense fallback={
                    <>
                    <a>All-Products</a>
                    <a>All-Features</a>
                    <a>Pricing</a>
                    <a>Testimonials</a>
                    <a>FAQ</a>
                    </>
                }>
                    {navLinksData.map(item=><a key={item.id} href={item.path}>{item.label}</a>)}
                </Suspense>
            </ul>
        </div>
    );
};
export default NavBarLinks;