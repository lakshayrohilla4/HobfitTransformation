import Image from "next/image";

const Stats = () => {
    return (
        <section className={'flex lg:w-1/2 flex-col items-center px-5 lg:px-0'}>
            <div className={'grid grid-cols-2 lg:gap-x-60 gap-x-20 gap-y-20 mt-20'}>
                <div className={'space-y-3'}>
                    <h3 className={'text-2xl font-semibold'}>5.5Lakh</h3>
                    <p className={'text-black font-semibold'}>Users Globally</p>
                </div>
                <div className={'space-y-3'}>
                    <h3 className={'text-2xl font-semibold'}>1000+</h3>
                    <p className={'text-black font-semibold'}>Coaches</p>
                </div>
                <div className={'space-y-3'}>
                    <h3 className={'text-2xl font-semibold'}>15+</h3>
                    <p className={'text-black font-semibold'}>Countries Serving</p>
                </div>
                <div className={'space-y-3'}>
                    <h3 className={'text-2xl font-semibold'}>50K+</h3>
                    <p className={'text-black font-semibold'}>Weight Loss(Kg)</p>
                </div>
            </div>
            <div className={'mt-10 items-center flex flex-col '}>
                <h1 className={'lg:text-5xl text-3xl font-bold text-black'}>
                    Featured In
                </h1>
                <div className={'flex lg:flex-row flex-col mt-2 lg:space-x-4 space-y-4 lg:space-y-0'}>
                    <Image
                        src={'/assets/FirstBrand.svg'}
                        alt={'The Print Business Standard'}
                        width={300}
                        height={300}
                    />
                    <Image
                        src={'/assets/SecondBrand.svg'}
                        alt={'The Print Business Standard'}
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </section>
    )
}

export default Stats;
