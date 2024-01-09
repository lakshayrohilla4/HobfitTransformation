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

export default function Home() {
    const formRef = useRef(null);
    const scrollToTopRef = useRef(null);

    const pixelScript = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3646692885588971');
fbq('track', 'PageView');
        `


    // hide scrollToTopRef when formRef is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    scrollToTopRef.current.style.display = 'none';
                } else {
                    scrollToTopRef.current.style.display = 'block';
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, []);

    return (
        <>
            <Script
                id={'pixel-script-home'}
                dangerouslySetInnerHTML={{__html: pixelScript}}
            />
            <noscript><img
                alt={'Facebook Pixel Home'}
                height="1" width="1" style={{display: 'none'}}
                           src="https://www.facebook.com/tr?id=3646692885588971&ev=PageView&noscript=1"
            /></noscript>
            <Header/>
            <Hero/>
            <div className={'flex lg:flex-row lg:flex-nowrap flex-wrap flex-col lg:mt-20 mt-5'}>
                <div ref={formRef}/>
                <Form/>
                <Stats/>
            </div>
            <Plan/>
            {/*<Contact />*/}
            <Transformation/>
            <Testimonials/>
            <Footer/>
            {/*    Scroll to top absolute div*/}
            <div
                ref={scrollToTopRef}
                className={'fixed bottom-5 right-5 bg-[#292e20] rounded-full p-3 cursor-pointer'} onClick={() => {
                formRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M5 15l7-7 7 7"/>
                </svg>
            </div>
        </>
    )
}
