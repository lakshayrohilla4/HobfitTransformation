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
        <div className={'flex flex-col w-80 mt-2'}>
            <label className={'text-black text-lg font-bold'}>
                Name*
            </label>
            <div className={'bg-[#f2f0f0] mt-1 p-3 rounded-lg'}>
                <input
                    key={'name'}
                    id={'name'}
                    type="text"
                    placeholder="Enter your name"
                    className="bg-[#f2f0f0] text-lg w-full"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

const AgeField = ({age, setAge}) => {
    return (
        <div className={'flex flex-col w-80 mt-2'}>
            <label className={'text-black text-lg font-bold'}>
                Age *
            </label>
            <div className={'bg-[#f2f0f0] mt-1 p-3 rounded-lg'}>
                <input
                    key={'age'}
                    id={'age'}
                    type="number"
                    placeholder="Enter your age"
                    className="bg-[#f2f0f0] text-lg w-full"
                    value={age}
                    onChange={(e) => {
                        setAge(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}

const PhoneField = ({countryCode, phone, setPhone, setCountryCode}) => {
    return (
        <div className={'flex flex-col w-80 mt-2'}>
            <label className={'text-black text-lg font-bold'}>
                Phone Number *
            </label>
            <div className={'bg-[#f2f0f0] mt-1 p-3 rounded-lg flex flex-row space-x-1'}>
                {/*<p className={'text-black w-10 mt-[0.16rem] cursor-pointer'}>*/}
                {/*    {countryCode}*/}
                {/*</p>*/}
                <select
                    id={'countryCode'}
                    key={'countryCode'}
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-[#f2f0f0] text-lg w-20"
                >
                    <option value={'+91'}>+91</option>
                    <option value={'+1'}>+1</option>
                    <option value={'+971'}>+971</option>
                    <option value={'+966'}>+966</option>
                    <option value={'+60'}>+60</option>
                    <option value={'+852'}>+852</option>
                    <option value={'+974'}>+974</option>
                </select>
                <input
                    id={'phone'}
                    key={'phone'}
                    type="number"
                    placeholder="Enter your phone"
                    className="bg-[#f2f0f0] text-lg w-full"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
        </div>
    )
}


const DiseaseQuestion = ({ answer2, setAnswer2 }) => {
    const labelRef = useRef(null);

    const onSelect = (selectedList, selectedItem) => {
        setAnswer2([...selectedList]);
        if (labelRef.current) {
            labelRef.current.focus();
            console.log(labelRef.current);
        }
    };

    const onRemove = (selectedList, removedItem) => {
        setAnswer2([...selectedList]);
        if (labelRef.current) {
            labelRef.current.focus();
        }
    };

    return (
        <div className={'flex flex-col w-80 mt-2'}>
            <label className={'text-black text-lg'}>
                Do you have any of the following health conditions?
            </label>
            <input ref={labelRef} className={'w-0 h-0'}/>
            <div className={'bg-[#f2f0f0] mt-1 p-[0.17rem] rounded-lg lg:w-full'}>
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
                    }}
                    showCheckbox={true}
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

const Form = () => {
    const [name, setName] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [disease, setDisease] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const formTopRef = useRef(null);

    const onSubmit = async () => {
        if (name === '' || phone === '' || age === '' || disease === '') {
            setError('All fields are mandatory');
            return;
        }
        setLoading(true);
        const data = {
            name,
            phone: countryCode + phone,
            age,
            disease: disease.map((d) => d.name).join(', '),
        };
        try {
            const response = await axios.post(formSubmitUrl, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer acd4cfd7157c9af0922acf9a826591a16655ed43697cb016d0effbe5954d02ba'
                },

            });
            if (response.status === 200) {
                window.location.href = '/thankyou';
            }
        } catch (e) {
            setError('Something went wrong. Please try again');
        }
        setLoading(false);
    }


    return (
        <section className={'items-center flex flex-wrap flex-col lg:w-1/2 px-4'}>
            <div className="text-black font-black lg:text-3xl text-2xl leading-snug text-center" ref={formTopRef}>
                TAKE YOUR FIRST STEP <br/> TOWARDS CHANGE!!
            </div>
            <NameField name={name} setName={setName}/>
            <AgeField age={age} setAge={setAge}/>
            <PhoneField phone={phone} setPhone={setPhone} countryCode={countryCode} setCountryCode={setCountryCode}/>
            <DiseaseQuestion answer2={disease} setAnswer2={setDisease}/>
            {error && <p className={'text-red-500'}>{error}</p>}
            <div className={'lg:w-full mt-5 flex w-full'}>
                <button className={'bg-black font-black text-white py-5 ml-5 lg:mx-auto px-16 rounded-lg'}
                        onClick={onSubmit}
                >
                    {loading ? <ClipLoader color={'white'} loading={loading} css={override} size={15}/> : 'Submit'}
                </button>
                </div>
            </section>
        );
};

export default Form;
