import React, { useState } from "react";
import StepProgressBar from "@/components/StepProgressBar";
import {Multiselect} from "multiselect-react-dropdown";
import axios from "axios";

const formSubmitUrl = "https://asia-southeast1-hobitapp-22cb6.cloudfunctions.net/writeToSheetHobfitTransformation";

const NameField = ({name, setName}) => {
    return (
        <div className={'flex flex-col'}>
            <label className={'text-black text-lg'}>
                Name
            </label>
            <div className={'bg-[#f2f0f0] p-3 rounded-lg'}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-[#f2f0f0] text-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>
    );
};

const CountryField = ({country, setCountry}) => {
    return (
        <div className={'flex flex-col'}>
            <label className={'text-black text-lg'}>
                Country
            </label>
            <div
                className={'bg-[#f2f0f0] p-[0.17rem] rounded-lg'}>
                <select className="bg-[#f2f0f0] text-lg rounded-lg p-3"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UAE">UAE</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value={"Qatar"}>Qatar</option>
                    <option value={"Malaysia"}>Malaysia</option>
                    <option value={"Hong Kong"}>Hong Kong</option>
                    <option value={"Canada"}>Canada</option>
                </select>
            </div>
        </div>
    )
}

const GenderField = ({gender, setGender}) => {
    return (
        <div className={'flex flex-col'}>
            <label className={'text-black text-lg'}>
                Gender
            </label>
            <div className={'bg-[#f2f0f0] p-[0.17rem] rounded-lg'}>
                <select className="bg-[#f2f0f0] text-lg rounded-lg p-3"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
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
            <label className={'text-black text-lg'}>
                Phone Number
            </label>
            <div className={'bg-[#f2f0f0] p-3 rounded-lg flex flex-row space-x-1'}>
                <p className={'text-black w-10 mt-[0.16rem]'}>
                    {countryCode}
                </p>
                <input type="text" placeholder="Enter your phone"
                       className="bg-[#f2f0f0] text-lg "
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}
                />
            </div>
        </div>
    )
}

const Question1 = ({answer1, setAnswer1}) => {
    return (
            <div className={'flex flex-col'}>
                <label className={'text-black text-lg'}>
                    How serious are you to transform yourself?
                </label>
                <div className={'bg-[#f2f0f0] p-[0.17rem] rounded-lg'}>
                    <select className="bg-[#f2f0f0] text-lg rounded-lg p-3"
                            value={answer1}
                            onChange={(e) => setAnswer1(e.target.value)}
                    >
                        <option value="Very Serious">Very Serious</option>
                        <option value="Serious">Serious</option>
                        <option value="Not Serious">Not Serious</option>
                    </select>
                </div>
            </div>
    )
}


const Question2 = ({answer2, setAnswer2}) => {
    const onSelect = (selectedList, selectedItem) => {
        setAnswer2([...selectedList]);
    }

    const onRemove = (selectedList, removedItem) => {
        setAnswer2([...selectedList]);
    }


    return (
        <div className={'flex flex-col'}>
            <label className={'text-black text-lg'}>
                Do you have any of the following health conditions?
            </label>
            <div className={'bg-[#f2f0f0] p-[0.17rem] rounded-lg w-96'}>
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
                    selectedValues={answer2}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue={'name'}
                    placeholder={'None'}
                    className={'bg-[#f2f0f0] text-lg rounded-lg p-3'}
                />
            </div>
        </div>
    )
}

const Question3 = ({answer3, setAnswer3}) => {
    const onSelect = (selectedList, selectedItem) => {
        setAnswer3([...selectedList]);
    }

    const onRemove = (selectedList, removedItem) => {
        setAnswer3([...selectedList]);
    }


    return (
        <div className={'flex flex-col'}>
            <label className={'text-black text-lg'}>
                Have you attempted any of the following in the past to lose weight?
            </label>
            <div className={'bg-[#f2f0f0] p-[0.17rem] rounded-lg w-96'}>
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
                    selectedValues={answer3}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue={'name'}
                    placeholder={'None'}
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
            <label className={'text-black text-lg'}>
                What led to your weight gain?
            </label>
            <div className={'bg-[#f2f0f0] p-[0.17rem] rounded-lg w-96'}>
                <Multiselect
                    options={[
                        {name: 'Busy work', id: 1},
                        {name: 'Covid lockdown', id: 2},
                        {name: 'Pregnancy', id: 3},
                        {name: 'Health conditions (PCOD/Thyroid etc.)', id: 4},
                        {name: 'Others', id: 5},
                    ]}
                    selectedValues={answer4}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue={'name'}
                    placeholder={'None'}
                    className={'bg-[#f2f0f0] text-lg rounded-lg p-3'}
                />
            </div>
        </div>
    )
}

// question 5 is how busy are you on an average day?

const Question5 = ({answer5, setAnswer5}) => {
    const onSelect = (selectedList, selectedItem) => {
        setAnswer5([...selectedList]);
    }

    const onRemove = (selectedList, removedItem) => {
        setAnswer5([...selectedList]);
    }

    return (
        <div className={'flex flex-col'}>
            <label className={'text-black text-lg'}>
                How busy are you on an average day?
            </label>
            <div className={'bg-[#f2f0f0] p-[0.17rem] rounded-lg w-11/12'}>
                {/*<Multiselect*/}
                {/*    options={[*/}
                {/*        {name: 'I barely have any time for myself', id: 1},*/}
                {/*        {name: 'I am busy but try to reserve some time each day to relax', id: 2},*/}
                {/*        {name: 'I am not too busy and keep time some time for different things', id: 3},*/}
                {/*        {name: 'My schedule is fairly open & flexible', id: 4},*/}
                {/*    ]}*/}
                {/*    selectedValues={answer5}*/}
                {/*    onSelect={onSelect}*/}
                {/*    onRemove={onRemove}*/}
                {/*    displayValue={'name'}*/}
                {/*    placeholder={'None'}*/}
                {/*    className={'bg-[#f2f0f0] text-lg rounded-lg p-3'}*/}
                {/*/>*/}
                <select
                    className={'bg-[#f2f0f0] text-lg rounded-lg p-3 w-11/12'}
                    value={answer5}
                    onChange={(e) => setAnswer5(e.target.value)}
                >
                    <option value="I barely have any time for myself">I barely have any time for myself</option>
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

const Form = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('India');
    const [gender, setGender] = useState('Male');
    const [phone, setPhone] = useState('');
    const [page, setPage] = useState(1);
    const [error, setError] = useState('');
    const [answer1, setAnswer1] = useState('Very Serious');
    const [answer2, setAnswer2] = useState([]);
    const [answer3, setAnswer3] = useState([]);
    const [answer4, setAnswer4] = useState([]);
    const [answer5, setAnswer5] = useState([]);


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

    const handleNext = () => {
        switch (page) {
            case 1:
                if (name === '') {
                    setError('Please enter your name');
                    return;
                } else if (phone === '') {
                    setError('Please enter your phone number');
                    return;
                } else {
                    setError('');
                    setPage(page + 1);
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
                }
                break;
            case 4:
                if (answer5.length === 0) {
                    setError('Please select an answer');
                    return;
                } else {
                    handleSubmit();
                }
                break;
        }
    }

    const handleSubmit = () => {

    }

    const StateForm = ({page}) => {
        switch (page) {
            case 1:
                return (
                    <div
                        className={'flex lg:flex-row flex-col lg:space-x-5 space-y-5 lg:space-y-0 w-11/12 lg:w-auto mt-10'}>
                        <div className={'space-y-5'}>
                            <NameField name={name} setName={setName}/>
                            <CountryField country={country} setCountry={setCountry}/>
                        </div>


                        <div className={'space-y-5'}>
                            <GenderField gender={gender} setGender={setGender}/>
                            <PhoneField countryCode={CountryCodesMap[country]} phone={phone} setPhone={setPhone}/>
                        </div>

                    </div>
                )
            case 2:
                return (
                    <div className={'flex flex-col space-y-5 mt-10 lg:w-full w-11/12'}>
                        <Question1 answer1={answer1} setAnswer1={setAnswer1}/>
                        <Question2 answer2={answer2} setAnswer2={setAnswer2}/>
                    </div>
                )
            case 3:
                return (
                    <div className={'flex flex-col space-y-5 mt-10 lg:w-full w-11/12'}>
                        <Question3 answer3={answer3} setAnswer3={setAnswer3}/>
                        <Question4 answer4={answer4} setAnswer4={setAnswer4}/>
                    </div>
                )
            case 4:
                return (
                    <div className={'flex flex-col space-y-5 mt-10 lg:w-full w-11/12'}>
                        <Question5 answer5={answer5} setAnswer5={setAnswer5}/>
                    </div>
                )
        }
    }


    return (
        <section className={'items-center flex flex-wrap flex-col lg:w-1/2'}>
            <div className="text-black font-black lg:text-4xl text-2xl leading-relaxed">
                TAKE YOUR FIRST STEP <br/> TOWARDS CHANGE!!
            </div>
            <StepProgressBar step={page} totalSteps={4}/>
            <StateForm page={page}/>
            {error && <p className={'text-red-500'}>{error}</p>}
            <div className={'lg:w-1/2 mt-5 '}>
                <button className={'bg-black text-white py-5 px-10 rounded-lg'}
                        onClick={handleNext}
                >
                    {page === 4 ? 'Submit' : 'Next'}
                </button>
                </div>
            </section>
        );
};

export default Form;
