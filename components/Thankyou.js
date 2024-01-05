import Image from "next/image";
import Link from "next/link";

const Thankyou = () => {
    return (
        <div className={'bg-[#070b20] lg:bg-white mb-40'}>
            <div className={'bg-[#070b20] lg:rounded-br-[200px] flex lg:flex-row flex-col lg:py-40 py-10'}>
                <div className={'lg:w-1/2 w-full flex flex-col lg:pl-40 pl-10'}>
                    <Link href={'/'}>
                        <div className={'flex flex-row items-center cursor-pointer text-white space-x-2'}>
                            <Image src={'/assets/BackIcon.svg'} alt={'Back Icon'} width={30} height={30} style={'mr-5'} />
                            <span className={'flex flex-row items-center cursor-pointer text-white space-x-2'}>
                                Back to Home
                            </span>
                        </div>
                    </Link>
                    <h1 className={'text-white font-bold lg:text-5xl text-3xl lg:leading-relaxed mt-5'}>
                        Thanks! You are about <br/>
                        to transform yourself <br />
                        for good.
                    </h1>
                    <h6 className={'text-white font-extralight mt-5 lg:text-2xl text-sm'}>
                        We will contact you shortly.
                    </h6>
                    <h7 className={'text-black rounded-3xl text-center font-extralight mt-5 lg:text-2xl text-sm bg-[#f8ac18] p-3 w-72'}>
                        Submission Successful
                    </h7>
                </div>

                <div className={'lg:w-1/2 w-full flex flex-col lg:pl-40 lg:absolute z-50 -right-20 top-10'}>
                    <Image src={'/assets/Mockup.png'} alt={'Hobfit Mockup'} width={400} height={400} />
                </div>

            </div>
            <div className={'flex flex-col w-full items-center lg:mt-20 mt-0 pb-20'}>
                <h1 className={'lg:text-black text-white lg:text-5xl text-3xl uppercase '}>
                    Download the app
                </h1>
                <div className={'flex flex-row items-center mt-10 lg:space-x-10'}>
                    <Link href={'https://apps.apple.com/us/app/hobit/id1536252998'} className={'cursor-pointer'} target={'_blank'}>
                        <Image src={'/assets/AppStore.svg'} alt={'App Store'} width={200} height={60} />
                    </Link>
                    <Link href={'https://play.google.com/store/apps/details?id=com.hobitb2c'} className={'cursor-pointer'} target={'_blank'}>
                        <Image src={'/assets/PlayStore.svg'} alt={'Play Store'} width={200} height={60} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Thankyou
