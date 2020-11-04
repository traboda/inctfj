import React from 'react';
import styled from "@emotion/styled";

const QuestionContainer = styled.div`
    padding: 0.75rem 1rem;
    width: 100%;
    background: white;
    box-shadow: 2px 3px 8px rgba(0,0,0,0.25);
    border-radius: 5px;
    margin-bottom: 0.75rem;
    h5 { margin-bottom: 0; font-size: 18px; }
    p {
      font-size: 14px;
      margin-bottom: 8px;
    }
    button {
      display: flex;
      align-items: center;
      padding: 0;
      text-align: left;
      background: none!important;
      border: none;
      img {
         width: 28px;
         margin-right: 5px;
      }
      &:focus, &:hover {
        outline: none!important;
      }
    }
    li {
      margin: 5px 0;
    }
`;

const Plus =
<img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDEyIDIgQyA2LjQ4ODk5NzEgMiAyIDYuNDg4OTk3MSAyIDEyIEMgMiAxNy41MTEwMDMgNi40ODg5OTcxIDIyIDEyIDIyIEMgMTcuNTExMDAzIDIyIDIyIDE3LjUxMTAwMyAyMiAxMiBDIDIyIDYuNDg4OTk3MSAxNy41MTEwMDMgMiAxMiAyIHogTSAxMiA0IEMgMTYuNDMwMTIzIDQgMjAgNy41Njk4Nzc0IDIwIDEyIEMgMjAgMTYuNDMwMTIzIDE2LjQzMDEyMyAyMCAxMiAyMCBDIDcuNTY5ODc3NCAyMCA0IDE2LjQzMDEyMyA0IDEyIEMgNCA3LjU2OTg3NzQgNy41Njk4Nzc0IDQgMTIgNCB6IE0gMTEgNyBMIDExIDExIEwgNyAxMSBMIDcgMTMgTCAxMSAxMyBMIDExIDE3IEwgMTMgMTcgTCAxMyAxMyBMIDE3IDEzIEwgMTcgMTEgTCAxMyAxMSBMIDEzIDcgTCAxMSA3IHoiPjwvcGF0aD48L3N2Zz4="/>

const Minus =
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABbElEQVRIid3UvU4bURAF4E8G/A4RiIdA1EhpMDRAEPIT8C4hifgrKahAmDxFpJTIiI6ghBSRkkAPtZfizkor42V37QqOdIs7c+bnzs4e3jra6OIMN3iMcxO2bnDGwiZ+I8MdetiN0wtbhlt8aJK4hc8R3Mdy2EbxOrgM7qcS3jN8iYAjTNfgT2EnYnaqyJtB3KvTyRD2I3ajjNCWZt6PrppiShrXL8yMInSjg+UxkufoRI6tUc4e7tX8UCVoSdt1WjTkWMA3DCYoMMB3LOaG4pa8w7+hgGPMVyT9g+3C/S9W80vVOLIKfyWKL7jD7JB/W3PM4X9+Kb6gj/cm/8hLuBjlzNe0M0GBFS+saVsSrkv1JGIY07jCTyU/GkkVMxyMUeBQWtO1KmKupEcvdVJAUew+1umkJUlvJo2ro1yuV6SxDKJIowXZkIQrkyTkXFLZPXwNWybNfL1J4iJmpI04xQ88xLnGSfjqjPEV4wkKlFSgjpUpTAAAAABJRU5ErkJggg=="/>

const QuestionCard = ({ question, answer, isOpen, onClick = () => {} }) => {

    return <QuestionContainer>
        <button onClick={onClick}>
            {isOpen ? Minus : Plus}
            <h5>{question}</h5>
        </button>
        {isOpen && <div className="mx-2 my-3">{answer}</div>}
    </QuestionContainer>

};

export default QuestionCard;