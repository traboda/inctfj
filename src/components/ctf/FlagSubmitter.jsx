import React, {useState} from 'react';
import styled from "@emotion/styled";
import Bounce from "react-reveal/Bounce";
import {APIFetch} from "../../utils/APIFetch";
import {SubmitFlagMutation} from "../../graphql/ctf";

const FlagContainer = styled.div`
    position: fixed;
    left: 40%;
    top: 0;
    min-width: 360px;
    max-height: 200px;
    background: rgba(0,0,0,0.8);
    border-left: 2px solid #fc0;
    border-right: 2px solid #fc0;
    border-top: 2px solid #fc0;
    overflow: auto;
    input {
        background: rgba(120,130,80,0.3);
        border: none;
        color: white;
        padding: 5px 10px;
        width: 100%;
    }
`;

const TopBar = styled.div`
    background: #fc0;
    padding: 0 5px;
    font-size: 13px;
    text-transform: uppercase;
    color: black;
    display: flex;
    justify-content: flex-end;
    position: relative;
    button {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 8px 18px;
      border: none;
      background: #fc0;
      font-size: 18px;
      line-height: 1;
      clip-path: polygon(37px -19px, 156px 0px, 101.38% 17px, 104.14% 102.94%, 1px 105.88%, 20px -1px, 146px -8.82%, 22px -9px, 139px -20px, 10px -117.35%);
      &:hover {
          background: #AA00FF;
          color: white;
      }
      &:disabled{
        background: #fc0!important;
        color: black!important;
      }
    }
`;

const FlagSubmitter = ({ onAccept = () => {} }) => {

    const [flag, setFlag] = useState('');
    const [isSubmitting, setSubmitting] = useState(false)
    const [successful, setSuccessful] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(null);
        setSubmitting(true);
        APIFetch({ query: SubmitFlagMutation, variables: { flag }}).then(({ success, data, errors}) => {
            if(success) {
                setSubmitting(false);
                if(data.flag_submit === "Congratulations on the solve"){
                    onAccept();
                    setSuccessful(true);
                } else { setSuccessful(false) };
            }
        })
    };

    return <Bounce top>
        <FlagContainer className="font-punk">
            <form onSubmit={handleSubmit}>
                <div className="p-3">
                    {successful !== null && ( successful ? <div className="pb-2 px-2 text-success">Flag was accepted</div> : <div className="pb-2 px-2 text-danger">Flag Rejected</div>)}
                    <input
                        placeholder="Enter Your Flag"
                        value={flag}
                        onChange={(e) => setFlag(e.currentTarget.value)}
                    />
                </div>
                <TopBar>
                    {!isSubmitting ?
                        <button type="submit">
                        // Submit A Flag
                    </button> :
                    <button type="button" disabled>
                        // Submitting
                    </button>}
                    <div style={{ height: '18px' }} />
                </TopBar>
            </form>
        </FlagContainer>
    </Bounce>
   ;

};

export default FlagSubmitter;