
const Hero = () => {
    return (
        <div className="bg-[#070B20] rounded-br-[150px] lg:rounded-br-[200px] py-40 flex lg:flex-row flex-col flex-wrap lg:flex-nowrap lg:space-x-96">
            <div className="text-white lg:ml-40 lg:w-1/2 ml-5 lg:mt-20">
                <h1 className="lg:text-6xl text-3xl font-bold leading-snug">
                    Your Journey to <br />
                    Transformation Starts <br /> here
                </h1>
                <p className={'font-extralight mt-5 lg:text-2xl tex-sm'}>
                    Join a global community of 100k+ People who
                    <br /> have already transformed themselves
                </p>
            </div>
            <div className={'lg:w-1/2 mt-10 lg:mt-0 ml-10 lg:ml-0'}>
                <video
                    className=" lg:h-[400px] lg:w-[400px] h-[300px] w-[300px] mr-40"
                    src="/video/teaser.mp4"
                    autoPlay
                    loop
                    controls={true}
                />
            </div>
        </div>
    );
};

export default Hero;
