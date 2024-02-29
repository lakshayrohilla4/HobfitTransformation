import {useRef, useState, useEffect} from "react";

const Hero = () => {
    const videoRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);

    return (
        <div className="bg-[#292e47]  lg:py-28 pt-16 lg:pb-16 pb-8 flex lg:flex-row flex-col flex-wrap lg:flex-nowrap lg:space-x-96">
            <div className="text-white lg:ml-20 lg:w-[60%] ml-5 lg:mt-16">
                <h1 className="lg:text-5xl text-2xl font-bold ">
                    <span className="text-[#CB6CE4] font-semibold uppercase">Fitness with Fun</span> <br/>
                    No Fancy Food. No <br/>
                    Supplements. No Boring <br/>
                    Workouts.
                </h1>
                <p className={'font-extralight mt-1 lg:text-2xl text-sm'}>
                    <span className="text-[#CB6CE4] font-semibold">2,00,000+</span> Transformed Clients
                </p>
            </div>
            <div className={'lg:w-1/2 mt-5 lg:mt-0 ml-5 lg:ml-0 w-auto justify-center'}>
                <video
                    ref={videoRef}
                    className="lg:h-[340px] lg:w-[340px] h-[240px] w-[240px] lg:mr-40 rounded-3xl mx-auto"
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
