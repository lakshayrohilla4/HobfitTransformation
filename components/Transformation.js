import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Transformation = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <section className={'bg-white flex flex-col'}>
            <h1 className={'text-black text-5xl font-semibold mx-auto'}>
                Transformation
            </h1>

            <div className="embla mt-10" ref={emblaRef}>
                <div className="embla__container flex flex-row space-x-5">
                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-center flex flex-col space-y-3 pb-3 lg:h-[18rem] h-[15rem]">
                        <Image src={'/assets/Veena.png'} width={500} height={500}/>
                        <h1 className={'text-xl'}>
                            Lose 17Kgs in 3 Months
                        </h1>
                        <h1 className={''}>
                            - Veena
                        </h1>
                    </div>


                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-center flex flex-col space-y-3 pb-3 lg:h-[18rem] h-[15rem]">
                        <Image src={'/assets/Gauri.png'} width={500} height={500}/>
                        <h1 className={'text-xl'}>
                            Lose 10Kgs in 6 Months
                        </h1>
                        <h1 className={''}>
                            - Gauri
                        </h1>
                    </div>


                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-center flex flex-col space-y-3 pb-3 lg:h-[18rem] h-[15rem]">
                        <Image src={'/assets/Simran.png'} width={500} height={500}/>
                        <h1 className={'text-xl'}>
                            Lose 5Kgs in 3 Months
                        </h1>
                        <h1 className={''}>
                            - Simran
                        </h1>
                    </div>

                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-center flex flex-col space-y-3 pb-3 lg:h-[18rem] h-[15rem]">
                        <Image src={'/assets/Tamanna.png'} width={500} height={500}/>
                        <h1 className={'text-xl'}>
                            Gain 4Kgs in 3 Months
                        </h1>
                        <h1 className={''}>
                            - Tamanna
                        </h1>
                    </div>

                    <div
                        className="embla__slide bg-[#212538] rounded-lg text-white items-center flex flex-col space-y-3 pb-3 lg:h-[18rem] h-[15rem]">
                        <Image src={'/assets/Komal.png'} width={500} height={500}/>
                        <h1 className={'text-xl'}>
                            Lose 7Kgs in 6 Months
                        </h1>
                        <h1 className={''}>
                            - Komal
                        </h1>
                    </div>


                </div>
            </div>
        </section>

    )
}

export default Transformation;
