import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div className={'flex flex-col bg-white mt-20 pb-10'}>
            <h1 className={'mx-auto text-5xl font-semibold'}>
                What Our Users Say
            </h1>


            <div className="embla mt-10" ref={emblaRef}>
                <div className="embla__container flex flex-row space-x-5">
                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-start py-3 px-5 flex flex-col space-y-3 pb-3 lg:h-[22rem] h-[28rem] rounded-bl-3xl">
                        <div className="flex flex-row items-center space-x-3">
                            <Image src={'/assets/testimonials/User1.png'} width={100} height={100}
                                   className={'rounded-full'}/>
                            <h1 className={'text-xl font-semibold'}>Kashvi Sharma</h1>
                        </div>
                        <p className={'text-lg'}>
                            For 7 months, my struggle wasn&apos;t with full-body weight but specifically targeting belly fat
                            and thighs. Finally, it worked with your program. I thought it was an impossible journey.
                            However, your program, along with Coach Prajwal&apos;s guidance, surprised me. Thanks a ton for
                            not only transforming me physically but also for the positive impact it had on different
                            parts of my life.
                        </p>
                    </div>


                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-start py-3 px-5 flex flex-col space-y-3 pb-3 lg:h-[22rem] h-[28rem] rounded-bl-3xl">
                        <div className="flex flex-row items-center space-x-3">
                            <Image src={'/assets/testimonials/User1.png'} width={100} height={100}
                                   className={'rounded-full'}/>
                            <h1 className={'text-xl font-semibold'}>Kashvi Sharma</h1>
                        </div>
                        <p className={'text-lg'}>
                            For 7 months, my struggle wasn&apos;t with full-body weight but specifically targeting belly fat
                            and thighs. Finally, it worked with your program. I thought it was an impossible journey.
                            However, your program, along with Coach Prajwal&apos;s guidance, surprised me. Thanks a ton for
                            not only transforming me physically but also for the positive impact it had on different
                            parts of my life.
                        </p>
                    </div>

                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-start py-3 px-5 flex flex-col space-y-3 pb-3 lg:h-[22rem] h-[28rem] rounded-bl-3xl">
                        <div className="flex flex-row items-center space-x-3">
                            <Image src={'/assets/testimonials/User1.png'} width={100} height={100}
                                   className={'rounded-full'}/>
                            <h1 className={'text-xl font-semibold'}>Kashvi Sharma</h1>
                        </div>
                        <p className={'text-lg'}>
                            For 7 months, my struggle wasn&apos;t with full-body weight but specifically targeting belly fat
                            and thighs. Finally, it worked with your program. I thought it was an impossible journey.
                            However, your program, along with Coach Prajwal&apos;s guidance, surprised me. Thanks a ton for
                            not only transforming me physically but also for the positive impact it had on different
                            parts of my life.
                        </p>
                    </div>

                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-start py-3 px-5 flex flex-col space-y-3 pb-3 lg:h-[22rem] h-[28rem] rounded-bl-3xl">
                        <div className="flex flex-row items-center space-x-3">
                            <Image src={'/assets/testimonials/User1.png'} width={100} height={100}
                                   className={'rounded-full'}/>
                            <h1 className={'text-xl font-semibold'}>Kashvi Sharma</h1>
                        </div>
                        <p className={'text-lg'}>
                            For 7 months, my struggle wasn&apos;t with full-body weight but specifically targeting belly fat
                            and thighs. Finally, it worked with your program. I thought it was an impossible journey.
                            However, your program, along with Coach Prajwal&apos;s guidance, surprised me. Thanks a ton for
                            not only transforming me physically but also for the positive impact it had on different
                            parts of my life.
                        </p>
                    </div>

                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-start py-3 px-5 flex flex-col space-y-3 pb-3 lg:h-[22rem] h-[28rem] rounded-bl-3xl">
                        <div className="flex flex-row items-center space-x-3">
                            <Image src={'/assets/testimonials/User1.png'} width={100} height={100}
                                   className={'rounded-full'}/>
                            <h1 className={'text-xl font-semibold'}>Kashvi Sharma</h1>
                        </div>
                        <p className={'text-lg'}>
                            For 7 months, my struggle wasn&apos;t with full-body weight but specifically targeting belly fat
                            and thighs. Finally, it worked with your program. I thought it was an impossible journey.
                            However, your program, along with Coach Prajwal&apos;s guidance, surprised me. Thanks a ton for
                            not only transforming me physically but also for the positive impact it had on different
                            parts of my life.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimonials;
