import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Form from "@/components/Form";
import Stats from "@/components/Stats";
import Plan from "@/components/Plan";
import Contact from "@/components/Contact";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <div className={'flex lg:flex-row lg:flex-nowrap flex-wrap flex-col lg:mt-20 mt-10'}>
                <Form />
                <Stats />
            </div>
            <Plan />
            <Contact />
            <Transformation />
            <Testimonials />
            <Footer />
        </>
    )
}
