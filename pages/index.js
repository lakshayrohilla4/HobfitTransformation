import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Form from "@/components/Form";
import Stats from "@/components/Stats";
import Plan from "@/components/Plan";
import Contact from "@/components/Contact";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import {useEffect, useRef} from "react";
import Script from "next/script";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Home() {
    const formRef = useRef(null);
    const scrollToTopRef = useRef(null);



    // hide scrollToTopRef when formRef is in view
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 scrollToTopRef.current.style.display = 'none';
    //             } else {
    //                 scrollToTopRef.current.style.display = 'block';
    //             }
    //         },
    //         {
    //             root: null,
    //             rootMargin: '0px',
    //             threshold: 0.1
    //         }
    //     );
    //
    //     if (formRef.current) {
    //         observer.observe(formRef.current);
    //     }
    //
    //     return () => {
    //         if (formRef.current) {
    //             observer.unobserve(formRef.current);
    //         }
    //     };
    // }, []);

    useEffect(() => {
        const ReactPixel = require('react-facebook-pixel').default;
        ReactPixel.init('712123561131539');
        ReactPixel.pageView();
    }, []);

    return (
        <>
            <FloatingWhatsApp
                notificationDelay={10}
                phoneNumber={'+919810244706'}
                accountName={'Hobfit'}
                avatar={'https://firebasestorage.googleapis.com/v0/b/hobitapp-22cb6.appspot.com/o/Group%2028525.jpg?alt=media&token=f3231b10-d685-4546-9582-0b31d978cfa9'}
            />
            <Header/>
            <Hero/>
            <div className={'bg-[#292e47] flex lg:flex-row justify-center lg:flex-nowrap flex-wrap flex-col pb-10 '}>
                <div ref={formRef}/>
                <Form/>
                {/*<Stats/>*/}
            </div>
            {/*<Plan/>*/}
            {/*<Contact />*/}
            <Transformation/>
            <Testimonials/>
            <Footer/>
            {/*    Scroll to top absolute div*/}
            {/*<div*/}
            {/*    ref={scrollToTopRef}*/}
            {/*    className={'fixed bottom-5 right-5 bg-[#292e20] rounded-full p-3 cursor-pointer'} onClick={() => {*/}
            {/*    formRef.current?.scrollIntoView({*/}
            {/*        behavior: 'smooth',*/}
            {/*        block: 'center',*/}
            {/*    })*/}
            {/*}}>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none"*/}
            {/*         viewBox="0 0 24 24" stroke="currentColor">*/}
            {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
            {/*              d="M5 15l7-7 7 7"/>*/}
            {/*    </svg>*/}
            {/*</div>*/}
        </>
    )
}
