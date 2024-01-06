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
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
