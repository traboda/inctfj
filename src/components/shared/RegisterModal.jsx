import React from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";

const CloseButton = styled.button`
  background: none !important;
  top: 1rem;
  right: 1rem;
  position: absolute;
  padding: 0 !important;

  img {
    width: 32px;
  }
`;

const RegistrationModal = ({ isOpen, onClose }) => (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
            overlay: {
                zIndex: 9000, background: 'rgba(0,0,0,0.5)',
                height: '100vh', width: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            },
            content: {
                position: 'unset', top: 0, left: 0, right: 0, padding: 0,
                border: 'none', background: 'none', width: '500px', maxWidth: '100vw'
            }
        }}
    >
        <CloseButton
            className="px-4 border-0 rounded"
            onClick={onClose}
        >
            <img alt="close" src={require('../../assets/images/icons/close.png')}/>
        </CloseButton>
        {isOpen &&
        <div className="text-center bg-white px-3 md:p-4 py-6 items-end rounded-2xl justify-center">
            <div className="text-center mb-3 text-3xl">
                Please Select for Finals
            </div>
            <div className="flex flex-wrap">
                <div className="md:w-1/2 mb-4 md:mb-0 p-3">
                    <a
                        href={`https://app.traboda.com/contest/inctf-pro-21-finals`}
                        className="block bg-blue-100 hover:bg-blue-200 shadow-xl hover:shadow-lg p-3 rounded-2xl"
                    >
                        <div className="flex flex-wrap md:block items-center justify-center">
                            <div className="flex md:block items-center justify-center">
                                <div className="flex justify-center">
                                    <img
                                        src={require('../../assets/images/icons/professional.png')}
                                        alt="professional" draggable="false" style={{ maxHeight: '180px' }}
                                    />
                                </div>
                                <div>
                                    <div className="text-3xl mt-3 font-semibold">Professional</div>
                                    <div className="md:text-center text-blue-600 font-semibold inline-block bg-white py-2 px-4 mt-2 rounded-xl">InCTF 21 Pro</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="md:w-1/2 h-full p-2">
                    <a
                        href={`https://app.traboda.com/contest/inctf-21-finals`}
                        className="block bg-red-100 hover:bg-red-200 h-full shadow-xl hover:shadow-lg p-3 rounded-2xl"
                    >
                        <div className="flex flex-wrap md:block items-center justify-center">
                            <div className="flex md:block items-center justify-center">
                                <div className="flex justify-center">
                                    <img
                                        src={require('../../assets/images/icons/student.png')}
                                        alt="student" draggable="false" style={{ maxHeight: '180px' }}
                                    />
                                </div>
                                <div>
                                    <div className="text-3xl mt-3 font-semibold">Student</div>
                                    <div className="md:text-center text-red-600 font-semibold inline-block bg-white py-2 px-4 mt-2 rounded-xl">InCTF 21 Nationals</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>}
    </Modal>
);

export default RegistrationModal;