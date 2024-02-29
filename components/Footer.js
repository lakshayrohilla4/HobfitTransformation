import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#292e47] flex lg:flex-row flex-col justify-around px-20 py-16">
            <Image src={'/assets/HobfitWhite.svg'} alt={'hobfit'} width={300} height={200} />
            {/*<div className="font-pangram text-xl font-medium text-left mt-5 text-white">*/}
            {/*    Info*/}
            {/*    <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Contact Us</div>*/}
            {/*    <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Fit Plan</div>*/}
            {/*    <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Transformations</div>*/}
            {/*    <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Testimone</div>*/}
            {/*</div>*/}
            {/*<div className="font-pangram text-xl font-medium text-left mt-5 text-white">*/}
            {/*    Our Policies*/}
            {/*    <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Privacy Policy</div>*/}
            {/*    <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Cookie Policy</div>*/}
            {/*    <div className="font-pangram text-base font-light text-left text-gray-300 uppercase">Terms & Condition</div>*/}
            {/*</div>*/}
            <div className="font-pangram text-xl font-medium text-left mt-5 text-white">
                Follow Us
                <div className={'flex flex-row space-x-4 mt-5'}>
                    <Link href={'https://www.instagram.com/getfitwith_hobfit/'} className={'cursor-pointer'} target={'_blank'}>
                        <Image src={'assets/Instagram.svg'} alt={'Instagram'} width={30} height={30} />
                    </Link>
                    <Link href={'https://www.linkedin.com/company/53480889/'} className={'cursor-pointer'} target={'_blank'}>
                        <Image src={'assets/Linkedin.svg'} alt={'Linkedin'} width={30} height={30} />
                    </Link>
                    <Link href={'https://wa.me/919810244706'} className={'cursor-pointer'} target={'_blank'}>
                        <Image src={'assets/Whatsapp.svg'} alt={'WhatsApp'} width={30} height={30} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
