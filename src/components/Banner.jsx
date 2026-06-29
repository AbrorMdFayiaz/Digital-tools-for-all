import { FaRegDotCircle } from 'react-icons/fa';
import bannerImg from '../assets/banner-image.svg'
import { PiPlayBold } from 'react-icons/pi';

const Banner = () => {
    return (
        <div className='container m-auto flex flex-col lg:flex-row gap-16 py-7 md:py-20 px-2'>
            <section className='  flex flex-col gap-4  justify-center'>
                <div className="badge badge-soft badge-primary"><span className='  rounded-full '><FaRegDotCircle /></span>New: AI-Powered Tools Available</div>
                <h1 className='inline-block text-3xl sm:text-5xl md:text-7xl font-extrabold sm:leading-13 md:leading-20 '>Supercharge Your <br></br><span>Digital Workflow</span></h1>
                <p className='inline-block font-normal text-base text-[#627382]  leading-5'>Access premium AI tools, design assets, templates, and productivity software—all in one place.Start creating faster today.Explore Products</p>
                <article className='inline-block space-x-4'>
                    <button className="inline-block btn btn-primary rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none">Explore Products</button>
                    <div className='inline-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl p-0.5'>
                       <button className=" btn rounded-4xl "><span className='text-primary'><PiPlayBold /></span><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>Watch Demo</span></button>
                    </div>
                </article>
            </section>
            <img src={bannerImg} className='w-11/12  mx-auto' alt="banner image" />
        </div>
    );
};

export default Banner;