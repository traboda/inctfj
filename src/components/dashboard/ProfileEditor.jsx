import React, { useState } from 'react';
import styled from "@emotion/styled";
import Select from "react-select";

import {APIFetch} from "../../utils/APIFetch";
import {updateProfileMutation} from "../../graphql/profile";

const ProfileEditorContainer = styled.div`
    background-color: rgba(50, 50, 50, 0.3);
    background-image: ${() => `url(${require('../../assets/images/backgrounds/cyber_window.png')})`};
    background-size: cover;
    background-position: center;
    box-shadow: 2px 4px 8px rgba(0,0,0,0.5);
    color: #bbb;
    width: 100%;
    position: relative;
    .editor-container {
      background: rgba(0, 20, 0, 0.8);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      padding: 1rem;
    }
    p {
        font-size: 20px;
        line-height: 1;
    }
    h4 {
       font-weight: 900;
       text-transform: uppercase;
       margin-bottom: 0;
       font-size: 32px;
    }
    h5 {
      font-size: 26px;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    button {
       width: 100%;
       color: #00C853;
       background: none!important;
       border: 2px solid #00C853;
       padding: 0.25rem;
       font-size: 16px;
       max-width: 60px;
        &:hover, &:focus {
            border-color: #1B5E20;
            background: #1B5E20!important;
            color: white;
            outline: none!important;
        }
    }
    .action-button {
      padding: 0.5rem;
      font-size: 22px;
      max-width: 100%;
    }
`;

const SavingCard = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 6000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const TextInputEditor = styled.div`
     margin: 1.2rem 0;
     label {
        display: block;
        font-size: 18px;
        margin-bottom: 0;
        line-height: 1;
     }
     input {
        background: rgba(255,255,255,0.05);
        padding: 5px 12px;
        font-size: 23px;
        box-shadow: 3px 5px 5px rgba(0,0,0,0.25);
        border: 2px solid #00BFA5!important;
        color: #00C853;
        width: 100%;
        margin-top: 0.25rem;
        &:focus, &:hover {
          outline: none!important;
        }
        &:disabled {
          background: none!important;
          border: none!important;
          padding: 0!important;
          box-shadow: none!important;
        }
     }
     .profile-editor-selector {
        color: white;
        margin-top: 0.25rem;
        padding: 0!important;
        background: none!important;
        .profile-editor__control {
            background: none!important;
            border: 2px solid #00BFA5;
            border-radius: 0;
        }
        .profile-editor__single-value {
            color: #00C853!important;
        }
        input {
            border: none!important;
            box-shadow: none!important;          
            color: #00C853!important;
        }
        .profile-editor__menu {
             background: rgb(0,0,0);
             color: #00C853;
             outline: none!important;
             .profile-editor__option{
                &:hover {
                    background: #004D40;
                    color: white;
                }
             }
        }
     }
`;


const IndianStates =
[{"value":"IN-AN","label":"Andaman and Nicobar Islands"},{"value":"IN-AP","label":"Andhra Pradesh"},{"value":"IN-AR","label":"Arunachal Pradesh"},{"value":"IN-AS","label":"Assam"},{"value":"IN-BR","label":"Bihar"},{"value":"IN-CH","label":"Chandigarh"},{"value":"IN-CT","label":"Chhattisgarh"},{"value":"IN-DN","label":"Dadra and Nagar Haveli"},{"value":"IN-DD","label":"Daman and Diu"},{"value":"IN-DL","label":"Delhi"},{"value":"IN-GA","label":"Goa"},{"value":"IN-GJ","label":"Gujarat"},{"value":"IN-HR","label":"Haryana"},{"value":"IN-HP","label":"Himachal Pradesh"},{"value":"IN-JK","label":"Jammu and Kashmir"},{"value":"IN-JH","label":"Jharkhand"},{"value":"IN-KA","label":"Karnataka"},{"value":"IN-KL","label":"Kerala"},{"value":"IN-LA","label":"Ladakh"},{"value":"IN-LD","label":"Lakshadweep"},{"value":"IN-MP","label":"Madhya Pradesh"},{"value":"IN-MH","label":"Maharashtra"},{"value":"IN-MN","label":"Manipur"},{"value":"IN-ML","label":"Meghalaya"},{"value":"IN-MZ","label":"Mizoram"},{"value":"IN-NL","label":"Nagaland"},{"value":"IN-OR","label":"Odisha"},{"value":"IN-PY","label":"Puducherry"},{"value":"IN-PB","label":"Punjab"},{"value":"IN-RJ","label":"Rajasthan"},{"value":"IN-SK","label":"Sikkim"},{"value":"IN-TN","label":"Tamil Nadu"},{"value":"IN-TG","label":"Telangana"},{"value":"IN-TR","label":"Tripura"},{"value":"IN-UT","label":"Uttarakhand"},{"value":"IN-UP","label":"Uttar Pradesh"},{"value":"IN-WB","label":"West Bengal"}]

const Genders =
[ { "value": "Male", "label": "Male" }, { "value": "Female", "label": "Female" }, { "value": "Other", "label": "Other" },]


const TextInput = ({ type, placeholder, label, value, onChange, disabled, pattern }) =>
<input
    aria-label={label} disabled={disabled} placeholder={!disabled ? placeholder : "-"}
    autoComplete="false" type={type} pattern={pattern}
    value={value} onChange={(e) => onChange(e.currentTarget.value)}
/>


const ProfileEditor = ({ me }) => {

    const [username, setUsername] = useState(me.username);
    const [fullName, setFullName] = useState(me.fullname);
    const [age, setAge] = useState(me.age);
    const [gender, setGender] = useState(me.gender);
    const [contact, setContact] = useState(me.contact);

    const [institution, setInstitution] = useState(me.institution);
    const [place, setPlace] = useState(me.place);
    const [state, setState] = useState(me.state);

    const [isEditing, setEditing] = useState(false);
    const [isSaving, setSaving] = useState(false);
    const [error, setError] = useState(false);

    const updateProfile = () => {
        setSaving(true);
        const input = { username, fullname: fullName, age, gender, place, institution, state, contact };
        APIFetch({
            query: updateProfileMutation, variables: { input }
        }).then(({ success, data }) => {
            setSaving(false);
            if(success) {
                if(data.updateUser === "OK") {
                    setEditing(false);
                } else {
                    setError(data.updateUser);
                }
            }
        })
    };

    const getStateObj = () => {
        let s = IndianStates.find((s) => s.value === state)
        if(s) {
            return s;
        } else {
            return null;
        }
    };

    const isProfileComplete = (() => {
        let isComplete = true;
        if(fullName === "") { isComplete = false; }
        if(age === "") { isComplete = false; }
        if(gender === "") { isComplete = false; }
        if(state === "") { isComplete = false; }
        if(place === "") { isComplete = false; }
        if(institution === "") { isComplete = false; }
        return isComplete;
    })();

    return <ProfileEditorContainer>
        {isSaving && <SavingCard>
            <h1>Saving</h1>
        </SavingCard>}
        {error && <SavingCard>
            <div>
                <h2>Failed to Save</h2>
                <p>{error}</p>
                <button className="action-button" onClick={() => setError(false)}>Try Again</button>
            </div>
        </SavingCard>}
        <div className="editor-container">
            <div className="row py-2 mx-0">
                <div className="col-9 d-flex align-items-center px-0">
                    <div>
                        <h4>{isEditing && 'Edit '} My Profile</h4>
                        {(!isEditing) && ( !isProfileComplete ?
                            <div className="text-danger">
                                <p>Your profile is seems to be incomplete, please fill up your profile to complete your registration.</p>
                            </div> :
                            <div className="text-success" style={{ maxWidth: '450px' }}>
                                <p>Your profile is complete! You can still make changes, please be sure you provide us the right information.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-3 d-flex align-items-start justify-content-end px-1">
                    {!isEditing ?
                        <button onClick={() => setEditing(true)}>Edit</button> :
                        <button onClick={updateProfile}>Save</button>
                    }
                </div>
            </div>
            <div className="row mx-0">
                <div className="col-md-6 col-lg-4 py-1 px-2">
                    <h5>Basic Information</h5>
                    <TextInputEditor>
                        <label>> Username</label>
                        <TextInput onChange={setUsername} disabled={!isEditing} value={username} label="username" />
                    </TextInputEditor>
                    <TextInputEditor>
                        <label className={fullName==="" ? 'text-danger' : null}>> Full Name</label>
                        <TextInput placeholder="Your Full Name" onChange={setFullName} disabled={!isEditing} value={fullName} label="full name" />
                    </TextInputEditor>
                    <TextInputEditor>
                        <label className={age==="" ? 'text-danger' : null}>> Age</label>
                        <TextInput type="number" placeholder="Your age" onChange={setAge} disabled={!isEditing} value={age} label="age" />
                    </TextInputEditor>
                    <TextInputEditor>
                        <label className={gender==="" ? 'text-danger' : null}>> Gender</label>
                        {isEditing ? <Select
                            aria-label="gender"
                            name="gender"
                            className="profile-editor-selector"
                            classNamePrefix="profile-editor"
                            isDisabled={!isEditing}
                            options={Genders}
                            menuPlacement="auto"
                            placeholder="Gender"
                            noOptionsMessage={() => <div>That couldn't be found. Select Other</div>}
                            onChange={(s) => setGender(s['value'])}
                            value={Genders.find((s) => s.value === gender)}
                        /> : <TextInput value={gender} disabled />}
                    </TextInputEditor>
                </div>
                <div className="col-md-6 col-lg-4 py-1 px-2">
                    <h5>School & Region</h5>
                    <TextInputEditor>
                        <label className={institution==="" ? 'text-danger' : null}>> School / Institution</label>
                        <TextInput placeholder="Name of your School" onChange={setInstitution} disabled={!isEditing} value={institution} label="school/institution" />
                    </TextInputEditor>
                    <TextInputEditor>
                        <label className={place==="" ? 'text-danger' : null}>> City / Town</label>
                        <TextInput placeholder="eg. Kochi" onChange={setPlace} disabled={!isEditing} value={place} label="city/town" />
                    </TextInputEditor>
                    <TextInputEditor>
                        <label className={state==="" ? 'text-danger' : null}>> State / UT</label>
                        {isEditing ? <Select
                            aria-label="user-state-selector"
                            name="state"
                            className="profile-editor-selector"
                            classNamePrefix="profile-editor"
                            isDisabled={!isEditing}
                            options={IndianStates}
                            menuPlacement="auto"
                            placeholder="State / UT of Residence"
                            noOptionsMessage={() => <div>No States/Provinces/UT could be found</div>}
                            onChange={(s) => setState(s['value'])}
                            value={getStateObj()}
                        /> : <TextInput value={state && getStateObj() ?  getStateObj().label : " - "} disabled />}
                    </TextInputEditor>
                </div>
                <div className="col-md-6 col-lg-4 py-1 px-2">
                    <h5>Contact Information</h5>
                    <TextInputEditor>
                        <label className={contact==="" ? 'text-danger' : null}>> Mobile Number</label>
                        <TextInput placeholder="Your Mobile Number" onChange={setContact} disabled={!isEditing} value={contact} label="mobile number" />
                    </TextInputEditor>
                    <TextInputEditor>
                        <label>$ Email Address</label>
                        <TextInput placeholder="Your Email" onChange={() => {}} disabled value={me.email} label="email" />
                    </TextInputEditor>
                </div>
            </div>
            <div className="row mx-0">
                <div className="col-md-6 p-2">
                    {!isEditing ?
                        <button className="action-button" onClick={() => setEditing(true)}>Edit Profile</button> :
                        <button className="action-button" onClick={updateProfile}>Save</button>
                    }
                </div>
                <div className="col-md-6 p-2">

                </div>
            </div>
        </div>
    </ProfileEditorContainer>

};

export default ProfileEditor;