import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#292e47] flex lg:flex-row flex-col justify-between px-20 py-16">
            <Image src={'/assets/HobfitWhite.svg'} alt={'hobfit'} width={300} height={200} />
            <div className="font-pangram text-xl font-medium text-left mt-5 text-white">
                Info
                <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Contact Us</div>
                <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Fit Plan</div>
                <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Transformations</div>
                <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Testimone</div>
            </div>
            <div className="font-pangram text-xl font-medium text-left mt-5 text-white">
                Our Policies
                <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Privacy Policy</div>
                <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Cookie Policy</div>
                <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Terms & Condition</div>
            </div>
            <div className="font-pangram text-xl font-medium text-left mt-5 text-white">
                Follow Us
                {/*<div>*/}
                {/*    <img src={Insta} alt="" className="h-10 w-5 mr-2" />*/}
                {/*    <img src={tweet} alt="" className="h-10 w-5 mr-2" />*/}
                {/*    <img src={linked} alt="" className="h-10 w-5 mr-2" />*/}
                {/*</div>*/}
            </div>
        </footer>
    );
};

export default Footer;
