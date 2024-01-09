import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        const ldJsonScript = {
            "@context": "http://schema.org",
            "@type": "Article",
            "name": "Unlock Rapid Weight Loss: Proven Strategies for Success",
            "headline": "Elite Tips for Accelerated Weight Loss and Fitness Transformation",
            "description": "Embark on a journey to a fitter you with scientifically proven weight loss strategies.",
            "datePublished": "2024-01-05T12:00:00Z",
            "image": "https://www.yourwebsite.com/images/elite-weight-loss.jpg",
            "author": {
                "@type": "Person",
                "name": "Your Name"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Hobfit Transformation",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.yourwebsite.com/images/elite-logo.jpg"
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.yourwebsite.com"
            }
        };

//         const pixelScript = `
// !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '3646692885588971');
// fbq('track', 'PageView');
//         `

        return (
            <Html>
                <Head>
                    <meta name="title" content="Unlock Rapid Weight Loss: Proven Strategies for Success"/>
                    <meta name="subject" content="Transform Your Body: Elite Weight Loss and Fitness Insights"/>
                    <meta name="geo.region" content="IN-QA-US-AE-SA-MY-HK-CA"/>
                    <meta name="geo.placename" content="Faridabad, Haryana, India - Be the Change"/>
                    <meta name="geo.position" content="28.446959;77.309221"/>
                    <meta name="ICBM" content="28.446959, 77.309221"/>

                    <meta name="keywords"
                          content="rapid weight loss, elite fitness, science-backed strategies, accelerated fat burn, premium wellness tips"/>

                    {/*<meta name="google-site-verification" content="Your Google Verification Code"/>*/}
                    {/*<meta name="msvalidate.01" content="Your Bing Verification Code"/>*/}


                    {/*<meta name="google-site-verification" content="Your Google Search Console Verification Code"/>*/}

                    {/*<meta name="mobileoptimized" content="width"/>*/}

                    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>

                    {/*<link rel="schema.DCTERMS" href="http://purl.org/dc/terms/"/>*/}
                    {/*<link rel="schema.DCMI" href="http://purl.org/dc/dcmitype/"/>*/}
                    {/*<link rel="schema.AGGREGATION" href="http://purl.org/net/agreemedia/"/>*/}
                    {/*<link rel="schema.OpenSearch"*/}
                    {/*      href="http://opensearch.org/Specifications/OpenSearch/1.1/Draft_2"/>*/}
                    {/*<link rel="search" type="application/opensearchdescription+xml"*/}
                    {/*      href="opensearch.xml" title="Your Elite Fitness Hub"/>*/}

                    {/*<link rel="canonical"*/}
                    {/*      href="https://www.yourwebsite.com/elite-weight-loss"/>*/}


                    <title>Unlock Rapid Weight Loss: Proven Strategies - Hobfit Transformation</title>
                </Head>
                <body>
                <Main/>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(ldJsonScript)}}/>
                {/*<script dangerouslySetInnerHTML={{__html: pixelScript}}/>*/}
                {/*<noscript><img height="1" width="1" style={{display: 'none'}}*/}
                {/*               src="https://www.facebook.com/tr?id=3646692885588971&ev=PageView&noscript=1"*/}
                {/*/></noscript>*/}
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
