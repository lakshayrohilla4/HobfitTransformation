const StepProgressBar = ({step, totalSteps}) => {
    const progressPercentage = (step / totalSteps) * 100;

    return (
        <div className="w-[96%] h-2 bg-gray-300 rounded-full mt-5">
            <div
                style={{width: `${progressPercentage}%`}}
                className="h-full text-center text-xs text-white bg-[#cb6ce4] rounded-full"
            >
                {/*{step}*/}
            </div>
        </div>
    )
}

export default StepProgressBar;
