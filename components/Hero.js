
const Hero = () => {
    return (
        <div className="bg-[#070B20] rounded-br-[150px] lg:rounded-br-[200px] lg:py-40 pt-28 pb-16 flex lg:flex-row flex-col flex-wrap lg:flex-nowrap lg:space-x-96">
            <div className="text-white lg:ml-40 lg:w-1/2 ml-5 lg:mt-20">
                <h1 className="lg:text-6xl text-3xl font-bold leading-snug">
                    Your Journey to <br />
                    Transformation Starts <br /> here
                </h1>
                <p className={'font-extralight mt-1 lg:text-2xl tex-xs'}>
                    Join a global community of 100k+ People who
                    <br /> have already transformed themselves
                </p>
            </div>
            <div className={'lg:w-1/2 mt-5 lg:mt-0 ml-5 lg:ml-0'}>
                <video
                    className=" lg:h-[400px] lg:w-[400px] h-[340px] w-[340px] mr-40 rounded-3xl"
                    src="/video/teaser.mp4"
                    // cover
                    playsInline={true}
                    autoPlay
                    loop
                    controls={true}
                    muted={true}
                />
            </div>
        </div>
    );
};

export default Hero;
