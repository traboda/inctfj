import React from 'react';
import styled from "@emotion/styled";

const ShareCardContainer = styled.div`
    background: #4A148C;
    padding: 1rem;
    color: white;
    font-size: 120%;
    h2 {
        margin-bottom: 2px;
    } 
    .whatsapp_share_button{
        border: 2px solid;
        padding: 5px 10px;
        font-size: 25px;
        display: inline-flex;
        align-items: center;
        background: #008b00!important;
        color: white!important;
        text-decoration: none!important;
        img {
          width: 28px;
          margin-right: 5px;
        }
    }
`;

const ShareCard = () => {

    const isMobile = () => /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);

const message = `Hey! 
I am participating in InCTF Jr. this year, I think you should too! 

Amrita InCTF Jr. is an annual national-level cybersecurity contest exclusively for school students in India, conducted by India's No.1 ranked CTF & CyberSecurity team - team bi0s. 

When started in 2015, with a vision to introduce students to cybersecurity right from school level, it was the first Capture The Flag (CTF) contest to be organized in India exclusively for school students. 
Even today, InCTF Jr continues to be the ONLY CTF contest held exclusively for school students, and it's gamified learning approach has quickly made it favorite among 1000 of students participating every year.

💡 Learn -  👨🏽‍💻 Hack - 🏆 Win
🌐 This time it's completely online.
🐣 No prior knowledge required! (gamified learning)
🆓 No registration fee
📜 Certificates for all ( + exciting prizes for winners!)

🤔 What? Learn & Hack Capture The Flag Contest
🗓 When? December 28, 2020
🤷🏻‍♀️For Whom? School Students (Grade 8-12)

https://www.youtube.com/watch?v=AO4p6M4l-VA

Young Hackers are born here, become the next Cyber Security Warrior! This is your perfect opportunity to kickstart your cyber security career before even before you're at college.

Learn more about CTF's & CyberSec. from the bi0s wiki - https://wiki.bi0s.in
For more information & registrations, visit https://junior.inctf.in

📌 **Register Today** 📌 
`;

    const getWhatsAppLink = () => {
        return `https://${isMobile() ? 'api' : 'web'}.whatsapp.com/send?text=${encodeURIComponent(String(message))}`;
    };

    return <ShareCardContainer>
        <div className="flex flex-wrap  w-full mx-0">
            <div className="md:w-1/2 pr-4 pl-4 p-1">
                <h2>Share with Your Friends!</h2>
                <p className="mb-2">
                    Invite your friends to InCTF Jr 2020
                </p>
                <div className="flex text-gray-900 items-center my-2 justify-center md:justify-start">
                    <a className="plain-link px-3 py-2 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-gray-900 bg-orange-400 text-black hover:bg-orange-500" style={{ fontSize: '20px' }}  href="/promote">
                        View & Share Promotional Materials
                    </a>
                </div>
            </div>
           <div className="md:w-1/2 pr-4 pl-4 flex items-center md:justify-end justify-center p-1">
               <a target="_blank" className="whatsapp_share_button" href={getWhatsAppLink()}>
                   <img alt="forward on whatsapp" src={require('../../assets/images/icons/whatsapp.png')} />
                   Forward on WhatsApp
               </a>
           </div>
        </div>
    </ShareCardContainer>

};

export default ShareCard;