const StepProgressBar = ({step, totalSteps}) => {
    return (
        <div className="flex flex-row mt-5">
            {Array.from({ length: totalSteps }, (_, i) => (
                <>
                    <div
                        key={i}
                        className={`rounded-full flex  w-10 h-10  border-2 border-black ${step >= i+1 ? 'bg-black' : 'bg-white'}`}
                    >
                        <span className={` my-auto mx-auto ${step >= i+1 ? 'text-white' : 'text-black'}`}>
                            {i+1}
                        </span>
                    </div>
                    {/*Black Line after circle except for last circle*/}
                    {i !== totalSteps-1 && <div className={`w-10 h-1 bg-black my-auto mx-auto ${step === i+1 ? 'bg-black' : 'bg-black'}`}></div>}
                </>
            ))}
        </div>
    )
}

export default StepProgressBar;
