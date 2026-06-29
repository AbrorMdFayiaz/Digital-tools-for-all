import { FaSquareFacebook } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="bg-[#101727] px-2">
<footer className="footer lg:footer-horizontal text-[#FFFFFF] container  mx-auto pt-10 md:pt-32 pb-10 md:pb-20">
    <aside>
    <h2 className="text-4xl font-bold mb-4">DigiTools</h2>
    <p>Premium digital tools for creators,<br/> professionals, and businesses. Work smarter<br/> with our suite of powerful tools.</p>
  </aside>
  <nav>
    <h6 className="text-[20px] leading-7 font-medium mb-4">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="text-[20px] leading-7 font-medium mb-4">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="text-[20px] leading-7 font-medium mb-4">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <aside>
    <nav>
    <h6 className="mb-4 text-[20px] leading-7 font-medium">Social Links</h6>
    <div className="flex gap-3">
      <a className="p-2.5 border-2 bg-base-10 rounded-full bg-[#FFFFFF]"><span className="text-[#101727]  rounded-full"><PiInstagramLogoFill /></span></a>
      <a className="border-2 p-2.5 bg-base-10 rounded-full bg-[#FFFFFF]"><span className="text-[#101727] rounded-full"><FaSquareFacebook /></span></a>
      <a className="border-2 p-2.5 bg-base-10 rounded-full bg-[#FFFFFF]"><span className="text-[#101727] rounded-full"><RiTwitterXLine /></span></a>
    </div>
  </nav>
  </aside>
</footer>
<section className=" text-[#FAFAFA] opacity-40 flex container  mx-auto py-4 md:py-8 justify-between border-[#FAFAFA] border-t flex-col gap-4 lg:flex-row ">
    <p>© {new Date().getFullYear()} Digitools. All rights reserved.</p>
    <div className="flex gap-3.5">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Cookies</span>
    </div>
</section>
        </div>
    );
};

export default Footer;