import React, {useEffect, useRef, useState} from "react";
import StepProgressBar from "@/components/StepProgressBar";
import {Multiselect} from "multiselect-react-dropdown";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const formSubmitUrl = "https://asia-southeast1-hobitapp-22cb6.cloudfunctions.net/writeToSheetHobfitTransformation";
// const formSubmitUrl = "https://f00d-223-190-86-138.ngrok-free.app/hobitapp-22cb6/asia-southeast1/writeToSheetHobfitTransformation"

const NameField = ({name, setName}) => {
    return (
        <div className={'flex flex-col'}>
            <label className={' text-lg'}>
                Name
            </label>
            <div className={'bg-[#f2f0f0] mt-1 p-3 rounded-lg'}>
                <input
                    key={'name'}
                    id={'name'}
                    type="text"
                    placeholder="Enter your name"
                    className="bg-[#f2f0f0] text-black text-lg w-full"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

const CountryField = ({country, setCountry}) => {
    return (
        <div className={'flex flex-col'}>
            <label className={' text-lg'}>
                Country
            </label>
            <div
                className={'bg-[#f2f0f0] mt-1 lg:p-[0.17rem] p-3 rounded-lg'}>
                <select className="bg-[#f2f0f0] text-black text-lg rounded-lg p-3 w-full"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UAE">UAE</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value={"Qatar"}>Qatar</option>
                    <option value={"Malaysia"}>Malaysia</option>
                    <option value={"Hong Kong"}>Hong Kong</option>
                    <option value={"Canada"}>Canada</option>
                    <option value={"Singapore"}>Singapore</option>
                    <option value={"Bahrain"}>Bahrain</option>
                    <option value={"Australia"}>Australia</option>
                </select>
            </div>
        </div>
    )
}

const GenderField = ({gender, setGender}) => {
    return (
        <div className={'flex flex-col'}>
            <label className={' text-lg'}>
                Gender
            </label>
            <div className={'bg-[#f2f0f0] mt-1 p-3 lg:p-[0.17rem] rounded-lg'}>
                <select className="bg-[#f2f0f0] text-black text-lg rounded-lg p-3 w-full"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </div>
    )
}

const PhoneField = ({countryCode, phone, setPhone}) => {
    return (
        <div className={'flex flex-col'}>
            <label className={' text-lg'}>
                Phone Number
            </label>
            <div className={'bg-[#f2f0f0] mt-1 p-3 rounded-lg flex flex-row space-x-1'}>
                <p className={'text-black w-10 mt-[0.16rem]'}>
                    {countryCode ? countryCode : '+91'}
                </p>
                <input
                    id={'phone'}
                    key={'phone'}
                    type="number"
                    placeholder="Enter your phone"
                    className="bg-[#f2f0f0] text-black text-lg w-full"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
        </div>
    )
}

const AgeField = ({age, setAge}) => {
    return (
        <div className={'flex flex-col'}>
            <label className={' text-lg'}>
                Age
            </label>
            <div className={'bg-[#f2f0f0] mt-1 p-3 rounded-lg'}>
                <input
                    id={'age'}
                    key={'age'}
                    type="number"
                    placeholder="Enter your age"
                    className="bg-[#f2f0f0] text-black text-lg w-full"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
        </div>
    )

}

const Question1 = ({answer1, setAnswer1}) => {
    return (
        <div className={'flex flex-col'}>
            <label className={' text-lg'}>
                How serious are you to transform yourself?
            </label>
            <div className={'bg-[#f2f0f0] mt-1 p-3 lg:p-[0.17rem] rounded-lg'}>
                <select className="bg-[#f2f0f0] text-black text-lg rounded-lg p-3 w-full"
                        value={answer1}
                        onChange={(e) => setAnswer1(e.target.value)}
                >
                    <option value="">Select an option</option>
                    <option value="Very Serious">Very Serious</option>
                    <option value="Serious">Serious</option>
                    <option value="Not Serious">Not Serious</option>
                </select>
            </div>
        </div>
    )
}


const Question2 = ({ answer2, setAnswer2 }) => {

    const onSelect = (selectedList, selectedItem) => {
        setAnswer2([...selectedList]);
    };

    const onRemove = (selectedList, removedItem) => {
        setAnswer2([...selectedList]);
    };

    return (
        <div className={'flex flex-col'}>
            <label className={' text-lg'}>
                Do you have any of the following health conditions?
            </label>
            <input className={'w-0 h-0'}/>
            <div className={'bg-[#f2f0f0] text-black mt-1 p-[0.17rem] rounded-lg lg:w-full w-[22.2rem]'}>
                <Multiselect
                    options={[
                        {name: 'None', id: 1},
                        {name: 'Thyroid', id: 2},
                        {name: 'Diabetes/Pre-diabetes', id: 3},
                        {name: 'Cholesterol', id: 4},
                        {name: 'Fatty Liver', id: 5},
                        {name: 'PCOD/PCOS', id: 6},
                        {name: 'Hypertension', id: 7},
                        {name: 'Arthritis', id: 8},
                        {name: 'Other', id: 9},
                    ]}
                    style={{
                        borderRadius: '0.5rem',
                        chips: {
                            background: '#cb6ce4',
                            color: 'white',
                            fontSize: '1rem',
                            padding: '0.5rem',
                            margin: '0.2rem'
                        }
                    }}
                    // hideSelectedList={true}
                    showCheckbox={true}
                    avoidHighlightFirstOption={true}
                    closeOnSelect={true}
                    selectedValues={answer2}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue={'name'}
                    placeholder={'Select options'}
                    className={'bg-[#f2f0f0] text-lg rounded-lg p-3 border-0'}
                />
            </div>
        </div>
    );
};

const Question3 = ({answer3, setAnswer3}) => {

    const onSelect = (selectedList, selectedItem) => {
        setAnswer3([...selectedList]);
    }

    const onRemove = (selectedList, removedItem) => {
        setAnswer3([...selectedList]);
    }


    return (
        <div className={'flex flex-col'}>
            <label className={' text-lg'}>
                Have you attempted any of the following<br/>in the past to lose weight?
            </label>
            <input className={'w-0 h-0'}/>
            <div className={'bg-[#f2f0f0] text-black mt-1 p-[0.17rem] rounded-lg w-[22.2rem]'}>
                <Multiselect
                    options={[
                        {name: 'Never tried to lose earlier', id: 1},
                        {name: 'Paid diet plans', id: 2},
                        {name: 'Gym membership', id: 3},
                        {name: 'Slimming pills/Meal replacement kits/ Shakes', id: 4},
                        {name: 'Green tea', id: 5},
                        {name: 'Yoga/ Dance/ Aerobics', id: 6},
                        {name: 'Other', id: 7},
                    ]}
                    style={{
                        borderRadius: '0.5rem',
                        chips: {
                            background: '#cb6ce4',
                            color: 'white',
                            fontSize: '1rem',
                            padding: '0.5rem',
                            margin: '0.2rem'
                        }
                    }}
                    avoidHighlightFirstOption={true}
                    showCheckbox={true}
                    selectedValues={answer3}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue={'name'}
                    placeholder={'Select options'}
                    className={'bg-[#f2f0f0] text-lg rounded-lg p-3'}
                />
            </div>
        </div>
    )
}

const Question4 = ({answer4, setAnswer4}) => {
    const onSelect = (selectedList, selectedItem) => {
        setAnswer4([...selectedList]);
    }

    const onRemove = (selectedList, removedItem) => {
        setAnswer4([...selectedList]);
    }

    return (
        <div className={'flex flex-col'}>
            <label className={'text-lg'}>
                What led to your weight gain?
            </label>
            <input className={'w-0 h-0'}/>
            <div className={'bg-[#f2f0f0] text-black mt-1 p-[0.17rem] rounded-lg w-[22.2rem]'}>
                <Multiselect
                    options={[
                        {name: 'Busy work', id: 1},
                        {name: 'Covid lockdown', id: 2},
                        {name: 'Pregnancy', id: 3},
                        {name: 'Health conditions (PCOD/Thyroid etc.)', id: 4},
                        {name: 'Others', id: 5},
                    ]}
                    style={{
                        borderRadius: '0.5rem',
                        chips: {
                            background: '#cb6ce4',
                            color: 'white',
                            fontSize: '1rem',
                            padding: '0.5rem',
                            margin: '0.2rem'
                        }
                    }}
                    avoidHighlightFirstOption={true}
                    selectedValues={answer4}
                    showCheckbox={true}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue={'name'}
                    placeholder={'Select options'}
                    className={'bg-[#f2f0f0] text-lg rounded-lg p-3'}
                />
            </div>
        </div>
    )
}

// question 5 is how busy are you on an average day?

const Question5 = ({answer5, setAnswer5}) => {
    return (
        <div className={'flex flex-col'}>
            <label className={' text-lg'}>
                How busy are you on an average day?
            </label>
            <div className={'bg-[#f2f0f0] mt-1 p-3 lg:p-[0.17rem] rounded-lg'}>
                <select className="bg-[#f2f0f0] text-black text-lg rounded-lg p-3 w-full overflow-hidden"
                        value={answer5}
                        onChange={(e) => setAnswer5(e.target.value)}
                >
                    <option value="">Select an option</option>
                    <option
                        value="I barely have any time for myself">I barely have any time for myself</option>
                    <option value="I am busy but try to reserve some time each day to relax">I am busy but try to
                        reserve some time each day to relax
                    </option>
                    <option value="I am not too busy and keep time some time for different things">I am not too busy and
                        keep time some time for different things
                    </option>
                    <option value="My schedule is fairly open & flexible">My schedule is fairly open & flexible</option>
                </select>
            </div>
        </div>
    )
}

// question 6 is time frame in which we should call you, time frames are 9 to 12, 12 to 3, 3 to 6, 6 to 9

const Question6 = ({answer6, setAnswer6}) => {
    return (
        <div className={'flex flex-col'}>
            <label className={'text-lg'}>
                What is the best time to call you?
            </label>
            <div className={'bg-[#f2f0f0] mt-1 p-3 lg:p-[0.17rem] rounded-lg'}>
                <select className="bg-[#f2f0f0] text-black  text-lg rounded-lg p-3 w-full"
                        value={answer6}
                        onChange={(e) => setAnswer6(e.target.value)}
                >
                    <option value="">Select an option</option>
                    <option value="9AM to 12PM">9AM to 12PM</option>
                    <option value="12PM to 3PM">12PM to 3PM</option>
                    <option value="3PM to 6PM">3PM to 6PM</option>
                    <option value="6PM to 9PM">6PM to 9PM</option>
                </select>
            </div>
        </div>
    )
}

const Question7 = ({answer7, setAnswer7}) => {
    // question is Yes/No on Are you comfortable with paid plans
    return (
        <div className={'flex flex-col'}>
            <label className={' text-lg'}>
                Are you comfortable with paid plans?
            </label>
            <div className={'bg-[#f2f0f0] text-black mt-1 p-3 lg:p-[0.17rem] rounded-lg'}>
                <select className="bg-[#f2f0f0] text-lg rounded-lg p-3 w-full"
                        value={answer7}
                        onChange={(e) => setAnswer7(e.target.value)}
                >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        </div>
    )
}

const CountryCodesMap = {
    'India': '+91',
    'USA': '+1',
    'UAE': '+971',
    'Saudi Arabia': '+966',
    'Qatar': '+974',
    'Malaysia': '+60',
    'Hong Kong': '+852',
    'Canada': '+1',
}


const StateForm = (props) => {

    switch (props.page) {
        case 1:
            return (
                <div
                    className={'flex lg:flex-row flex-col lg:space-x-5 space-y-5 lg:space-y-0 w-11/12 lg:w-auto mt-10'}>
                    <div className={'space-y-5'}>
                        <NameField key={'name'} name={props.name} setName={props.setName}/>
                        <CountryField country={props.country} setCountry={props.setCountry}/>
                        <PhoneField countryCode={CountryCodesMap[props.country]} phone={props.phone} setPhone={props.setPhone}/>
                    </div>


                    <div className={'space-y-5'}>
                        <GenderField gender={props.gender} setGender={props.setGender}/>
                        <AgeField age={props.age} setAge={props.setAge}/>
                    </div>


                </div>
            )
        case 2:
            return (
                <div className={'flex flex-col space-y-5 mt-10 lg:w-auto w-11/12'}>
                    <Question1 answer1={props.answer1} setAnswer1={props.setAnswer1}/>
                    <Question2 answer2={props.answer2} setAnswer2={props.setAnswer2}/>
                </div>
            )
        case 3:
            return (
                <div className={'flex flex-col space-y-5 mt-10 lg:w-auto w-11/12'}>
                    <Question3 answer3={props.answer3} setAnswer3={props.setAnswer3}/>
                    <Question4 answer4={props.answer4} setAnswer4={props.setAnswer4}/>
                </div>
            )
        case 4:
            return (
                <div className={'flex flex-col space-y-5 mt-10 lg:w-auto w-11/12'}>
                    <Question5 answer5={props.answer5} setAnswer5={props.setAnswer5}/>
                    <Question6 answer6={props.answer6} setAnswer6={props.setAnswer6}/>
                    <Question7 answer7={props.answer7} setAnswer7={props.setAnswer7}/>
                </div>
            )
    }
}

const Form = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [page, setPage] = useState(1);
    const [error, setError] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState([]);
    const [answer3, setAnswer3] = useState([]);
    const [answer4, setAnswer4] = useState([]);
    const [answer5, setAnswer5] = useState('');
    const [answer6, setAnswer6] = useState('');
    const [answer7, setAnswer7] = useState('');
    const [loading, setLoading] = useState(false);
    const formTopRef = useRef(null);

    useEffect(() => {
        console.log('i am re rendering');
    }, []);




    const handleNext = () => {
        switch (page) {
            case 1:
                if (name === '') {
                    setError('Please enter your name');
                    return;
                } else if (phone === '') {
                    setError('Please enter your phone number');
                    return;
                } else if (country === '') {
                    setError('Please select your country');
                    return;
                } else if (gender === '') {
                    setError("Please select Gender");
                    return;
                } else if (age === '') {
                    setError("Please enter your age");
                    return;
                } else if (age < 18 || age > 100) {
                    setError("Please enter a valid age");
                    return;
                }
                else {
                    setError('');
                    setPage(page + 1);
                    // don't scroll for desktop
                    if (window.innerWidth < 1024)
                        formTopRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                }
                break;
            case 2:
                if (answer1 === '') {
                    setError('Please select an answer');
                    return;
                } else if (answer2.length === 0) {
                    setError('Please select an answer');
                    return;
                } else {
                    setError('');
                    setPage(page + 1);
                    if (window.innerWidth < 1024)
                        formTopRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                }
                break;
            case 3:
                if (answer3.length === 0) {
                    setError('Please select an answer');
                    return;
                } else if (answer4.length === 0) {
                    setError('Please select an answer');
                    return;
                } else {
                    setError('');
                    setPage(page + 1);
                    if (window.innerWidth < 1024)
                        formTopRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                }
                break;
            case 4:
                if (answer5 === '') {
                    setError('Please select an answer');
                    return;
                } else if (answer6 === '') {
                    setError('Please select an answer');
                    return;
                } else if (answer7 === '') {
                    setError('Please select an answer');
                    return;
                }
                else {
                    handleSubmit();
                }
                break;
        }
    }

    const handleSubmit = async () => {
        setLoading(true);
        // Prepare the form data
        const formData = {
            name,
            country,
            gender,
            phone: CountryCodesMap[country] + phone,
            age,
            answer1,
            answer2: answer2.map(item => item.name), // Convert objects to strings
            answer3: answer3.map(item => item.name), // Convert objects to strings
            answer4: answer4.map(item => item.name), // Convert objects to strings
            answer5,
            answer6,
            answer7,
        };

        try {
            if(typeof window !== 'undefined') {
                // const ReactPixel = require('react-facebook-pixel').default;
                // ReactPixel.init('3646692885588971');
                // ReactPixel.track('Purchase', {
                //     value: 0,
                //     currency: 'INR',
                // });
            }
            // Make a POST request to the backend
            const response = await axios.post(formSubmitUrl, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer acd4cfd7157c9af0922acf9a826591a16655ed43697cb016d0effbe5954d02ba'
                },
            });


            // Handle the response here. For example, you can set a success message or redirect the user.
            console.log(response.data);
            // redirect to thank you page
            window.location.href = '/thankyou';
        } catch (error) {
            // Handle the error here. For example, you can set an error message.
            console.error(error);
        } finally {
            setLoading(false);
        }
    }




    return (
        <section className={'bg-[#292e47] text-white items-center flex flex-wrap flex-col lg:w-1/2'}>
            <div className=" font-black lg:text-3xl text-2xl leading-snug text-center" ref={formTopRef}>
                Take your first step towards <br/> HEALTHIER YOU !!
            </div>
            <StepProgressBar step={page} totalSteps={4}/>
            <StateForm
                page={page}
                name={name}
                setName={setName}
                country={country}
                setCountry={setCountry}
                gender={gender}
                setGender={setGender}
                phone={phone}
                setPhone={setPhone}
                age={age}
                setAge={setAge}
                answer1={answer1}
                setAnswer1={setAnswer1}
                answer2={answer2}
                setAnswer2={setAnswer2}
                answer3={answer3}
                setAnswer3={setAnswer3}
                answer4={answer4}
                setAnswer4={setAnswer4}
                answer5={answer5}
                setAnswer5={setAnswer5}
                answer6={answer6}
                setAnswer6={setAnswer6}
                answer7={answer7}
                setAnswer7={setAnswer7}
            />
            {error && <p className={'text-red-500'}>{error}</p>}
            <div className={'lg:w-full mt-5 flex w-full'}>
                <button className={'bg-black font-black text-white py-5 ml-5 lg:mx-auto px-16 rounded-lg'}
                        onClick={handleNext}
                >
                    {loading ? <ClipLoader color={'white'} loading={loading} css={override} size={15}/> : page === 4 ? 'Submit' : 'Next'}
                    {/*{page === 4 ? 'Submit' : 'Next'}*/}
                </button>
            </div>
        </section>
    );
};

export default Form;
