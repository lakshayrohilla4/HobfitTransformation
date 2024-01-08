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
        <div className="bg-[#070B20] rounded-br-[150px] lg:rounded-br-[200px] lg:py-28 pt-28 pb-16 flex lg:flex-row flex-col flex-wrap lg:flex-nowrap lg:space-x-96">
            <div className="text-white lg:ml-20 lg:w-1/2 ml-5 lg:mt-16">
                <h1 className="lg:text-5xl text-3xl font-bold leading-snug">
                    Your JOURNEY to <br />
                    Transformation Starts <br /> HERE!
                </h1>
                <p className={'font-extralight mt-1 lg:text-xl tex-xs'}>
                    Join our global community of 500k+ People who
                    <br /> have already transformed themselves
                </p>
            </div>
            <div className={'lg:w-1/2 mt-5 lg:mt-0 ml-5 lg:ml-0'}>
                <video
                    ref={videoRef}
                    className="lg:h-[340px] lg:w-[340px] h-[340px] w-[340px] mr-40 rounded-3xl"
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
