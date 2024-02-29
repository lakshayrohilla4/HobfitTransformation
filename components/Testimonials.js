import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div className={'flex flex-col bg-white mt-20 pb-10'}>
            <h1 className={'mx-auto text-3xl lg:text-5xl font-semibold'}>
                What Our Users Say
            </h1>


            <div className="embla mt-10" ref={emblaRef}>
                <div className="embla__container flex flex-row space-x-5">
                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-start py-3 px-5 flex flex-col space-y-3 pb-3  rounded-bl-3xl">
                        <div className="flex flex-row items-center space-x-3">
                            <Image src={'/assets/testimonials/User1.png'} width={60} height={60}
                                   className={'rounded-full'}/>
                            <h1 className={'text-xl font-semibold'}>Kashvi Sharma</h1>
                        </div>
                        <p className={'text-sm'}>
                            Dealing with depression and PCOS, this platform became a lifeline. Personalized workouts and a PCOS-friendly nutrition plan not only tackled my health concerns but also helped me kick stress eating. Real support, real changes
                        </p>
                    </div>


                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-start py-3 px-5 flex flex-col space-y-3 pb-3 rounded-bl-3xl">
                        <div className="flex flex-row items-center space-x-3">
                            <Image src={'/assets/testimonials/User2.png'} width={60} height={60}
                                   className={'rounded-full'}/>
                            <h1 className={'text-xl font-semibold'}>Sohini Das</h1>
                        </div>
                        <p className={'text-sm'}>
                            Not dealing with weight loss, but I was completely inactive. Came across an ad, randomly clicked, and chose Zumba on a whim. Perfect for my laziness, easy to do at home, and surprisingly enjoyable. It got me active, resolved mood swings, and the added bonus of a free personalized diet plan.
                        </p>
                    </div>

                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-start py-3 px-5 flex flex-col space-y-3 pb-3 rounded-bl-3xl">
                        <div className="flex flex-row items-center space-x-3">
                            <Image src={'/assets/testimonials/User3.png'} width={60} height={60}
                                   className={'rounded-full'}/>
                            <h1 className={'text-xl font-semibold'}>Ananya Singh</h1>
                        </div>
                        <p className={'text-sm'}>
                            My sister does Zumba on your platform, and she recommended yoga to me. I can&apos;t express how calm I feel now! Dealing with anger due to constant overthinking, it has genuinely helped me. Struggling with shortness of breath, I love how it aids me. Thank you, HobFit.
                        </p>
                    </div>

                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-start py-3 px-5 flex flex-col space-y-3 pb-3 rounded-bl-3xl">
                        <div className="flex flex-row items-center space-x-3">
                            <Image src={'/assets/testimonials/User4.png'} width={60} height={60}
                                   className={'rounded-full'}/>
                            <h1 className={'text-xl font-semibold'}>Meenakshi Iyer</h1>
                        </div>
                        <p className={'text-sm'}>
                            I had to lose weight for my wedding, and trusting online platforms can be tricky. I spoke to a health coach named Priyanka, and she was so so understanding as I had a hectic schedule she was very helpful    she provided excellent support and guidance.The diet support was beneficial, and I also did Bhangra it was absolutely fun + beneficiary – the tutor was fantastic!!! It helped me alot !
                        </p>
                    </div>

                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-start py-3 px-5 flex flex-col space-y-3 pb-3 rounded-bl-3xl">
                        <div className="flex flex-row items-center space-x-3">
                            <Image src={'/assets/testimonials/User5.png'} width={60} height={60}
                                   className={'rounded-full'}/>
                            <h1 className={'text-xl font-semibold'}>Priya Singh</h1>
                        </div>
                        <p className={'text-sm'}>
                            Struggled with back pain for 4 months, my focus wasn&apos;t just on general fitness, but on addressing persistent back pain. Your program proved to be a game-changer. Doubts turned into relief. Thanks a bunch for easing my back pain and bringing positivity to my life.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimonials;
