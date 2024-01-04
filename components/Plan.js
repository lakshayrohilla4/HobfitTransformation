import Image from "next/image";

const Plan = () => {
    return (
        <div className={'bg-[#070B20] mt-20 flex flex-wrap items-center flex-col py-20'}>
            <h1 className={'lg:text-5xl text-3xl text-white font-bold '}>
                YOUR HOBFIT PLAN
            </h1>
            <div className={'grid lg:grid-cols-3 grid-cols-2 px-4 gap-x-8 gap-y-10 lg:gap-y-20 mt-10'}>
                <div className={'flex flex-col items-center'}>
                    <Image src={'/assets/ProCoaches.png'} alt={'Pro Coaches'} height={200} width={200}/>
                    <h1 className={'text-md text-white font-light'}>
                        PRO COACHES
                    </h1>
                </div>
                <div className={'flex flex-col items-center'}>
                    <Image src={'/assets/FIVE.png'} alt={'Pro Coaches'} height={200} width={200}/>
                    <h1 className={'text-md text-white font-light'}>
                        FIVE DIFFERENT WORKOUTS
                    </h1>
                </div>
                <div className={'flex flex-col items-center'}>
                    <Image src={'/assets/CLINICAL.png'} alt={'Pro Coaches'} height={200} width={200}/>
                    <h1 className={'text-md text-white font-light'}>
                        CLINICAL NUTRITIONIST
                    </h1>
                </div>
                <div className={'flex flex-col items-center'}>
                    <Image src={'/assets/AI.png'} alt={'Pro Coaches'} height={200} width={200}/>
                    <h1 className={'text-md text-white font-light'}>
                        AI GENERATED REPORTS
                    </h1>
                </div>
                <div className={'flex flex-col items-center'}>
                    <Image src={'/assets/EVERYDAY.png'} alt={'Pro Coaches'} height={200} width={200}/>
                    <h1 className={'text-md text-white font-light'}>
                        EVERYDAY RECIPES
                    </h1>
                </div>
                <div className={'flex flex-col items-center'}>
                    <Image src={'/assets/FLEXIBLE.png'} alt={'Pro Coaches'} height={200} width={200}/>
                    <h1 className={'text-md text-white font-light'}>
                        FLEXIBLE TIMING
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Plan;
