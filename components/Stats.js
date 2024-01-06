import Image from "next/image";

const Stats = () => {
    return (
        <section className={'flex lg:w-1/2 flex-col items-center px-10 lg:px-0'}>
            <div className={'grid grid-cols-2 lg:gap-x-60 gap-x-20 gap-y-10 mt-20 lg:mt-0'}>
                <div className={'space-y-2'}>
                    <h3 className={'text-4xl font-semibold'}>5.5lakh</h3>
                    <p className={'text-black text-xl w-40 font-semibold'}>Users Globally</p>
                </div>
                <div className={'space-y-2'}>
                    <h3 className={'text-4xl font-semibold'}>1000+</h3>
                    <p className={'text-black text-xl font-semibold'}>Coaches</p>
                </div>
                <div className={'space-y-2'}>
                    <h3 className={'text-4xl font-semibold'}>15+</h3>
                    <p className={'text-black text-xl font-semibold'}>Countries Serving</p>
                </div>
                <div className={'space-y-2'}>
                    <h3 className={'text-4xl font-semibold'}>50K+</h3>
                    <p className={'text-black text-xl font-semibold'}>Weight Loss(Kg)</p>
                </div>
            </div>
            <div className={'mt-10 lg:mt-20 items-center flex flex-col '}>
                <h1 className={'lg:text-5xl text-3xl font-bold text-black'}>
                    Featured IN
                </h1>
                <div className={'flex lg:flex-row flex-col mt-4 lg:space-x-4 space-y-6 lg:space-y-0'}>
                    <Image
                        src={'/assets/FirstBrand.svg'}
                        alt={'The Print Business Standard'}
                        width={400}
                        height={400}
                        className={'lg:w-[16rem]'}
                    />
                    <Image
                        src={'/assets/SecondBrand.svg'}
                        alt={'The Print Business Standard'}
                        width={300}
                        height={300}
                        className={'lg:w-[16rem]'}
                    />
                </div>
            </div>
        </section>
    )
}

export default Stats;
