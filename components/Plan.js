import Image from "next/image";

const Plan = () => {
    return (
        <div className={'bg-[#070B20] mt-20 flex flex-wrap items-center flex-col py-10 lg:py-20'}>
            <h1 className={'lg:text-5xl text-2xl text-white font-black '}>
                YOUR HOBFIT PLAN
            </h1>
            <div className={'grid lg:grid-cols-3 grid-cols-2 px-20 gap-x-8 gap-y-10 lg:gap-y-20 mt-10'}>
                <div className={'flex flex-col items-center'}>
                    <Image src={'/assets/ProCoaches.png'} alt={'Pro Coaches'} height={200} width={200}/>
                    <h1 className={'lg:text-md text-xs mt-3 text-center text-white font-medium'}>
                        PRO COACHES
                    </h1>
                </div>
                <div className={'flex flex-col items-center'}>
                    <Image src={'/assets/FIVE.png'} alt={'Pro Coaches'} height={200} width={200}/>
                    <h1 className={'lg:text-md text-xs mt-3 text-center text-white font-medium'}>
                        FIVE DIFFERENT WORKOUTS
                    </h1>
                </div>
                <div className={'flex flex-col items-center'}>
                    <Image src={'/assets/CLINICAL.png'} alt={'Pro Coaches'} height={200} width={200}/>
                    <h1 className={'lg:text-md text-xs mt-3 text-center text-white font-medium'}>
                        CLINICAL NUTRITIONIST
                    </h1>
                </div>
                <div className={'flex flex-col items-center'}>
                    <Image src={'/assets/AI.png'} alt={'Pro Coaches'} height={200} width={200}/>
                    <h1 className={'lg:text-md text-xs mt-3 text-center text-white font-medium'}>
                        AI GENERATED REPORTS
                    </h1>
                </div>
                <div className={'flex flex-col items-center'}>
                    <Image src={'/assets/EVERYDAY.png'} alt={'Pro Coaches'} height={200} width={200}/>
                    <h1 className={'lg:text-md text-xs mt-3 text-center text-white font-medium'}>
                        EVERYDAY RECIPES
                    </h1>
                </div>
                <div className={'flex flex-col items-center'}>
                    <Image src={'/assets/Flexible.png'} alt={'Pro Coaches'} height={200} width={200}
                           className={'lg:h-[10.9rem] h-[5rem]'}
                    />
                    <h1 className={'lg:text-md text-xs mt-3 text-center text-white font-medium'}>
                        FLEXIBLE TIMING
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Plan;
