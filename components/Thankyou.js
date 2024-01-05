import Image from "next/image";

const Thankyou = () => {
    return (
        <div className={'bg-[#070b20] lg:bg-white mb-40'}>
            <div className={'bg-[#070b20] lg:rounded-br-[200px] flex lg:flex-row flex-col lg:py-40 py-20'}>
                <div className={'lg:w-1/2 w-full flex flex-col lg:pl-40 pl-10'}>
                    <h1 className={'text-white font-bold lg:text-5xl text-3xl lg:leading-relaxed'}>
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
        </div>
    )
}

export default Thankyou
