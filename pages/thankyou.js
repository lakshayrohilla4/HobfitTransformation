import Thankyou from "@/components/Thankyou";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Script from "next/script";

const pixelScript = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1549540005808951');
fbq('track', 'PageView');
`

export default function ThankyouPage() {
    return (
        <>
            <Script
                id="pixel thank you page"
                dangerouslySetInnerHTML={{
                    __html: pixelScript,
                }}
            />
            <noscript>
                <img
                    alt={'Facebook Pixel Thankyou'}
                    height="1" width="1"
                    style={{display: 'none'}}

                           src="https://www.facebook.com/tr?id=1549540005808951&ev=PageView&noscript=1"
            /></noscript>
            <Thankyou/>
            <Transformation/>
            <Testimonials/>
            <Footer/>
        </>
    )
}
