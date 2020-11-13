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
🗓 When? December 20, 2020
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
        <div className="row w-100 mx-0">
            <div className="col-md-6 p-1">
                <h2>Share with Your Friends!</h2>
                <p className="mb-2">
                    Invite your friends to InCTF Jr 2020
                </p>
                <div className="d-flex text-dark align-items-center my-2 justify-content-center justify-content-md-start">
                    <a className="plain-link px-3 py-2 btn text-dark btn-warning" style={{ fontSize: '20px' }}  href="/promote">
                        View & Share Promotional Materials
                    </a>
                </div>
            </div>
           <div className="col-md-6 d-flex align-items-center justify-content-md-end justify-content-center p-1">
               <a target="_blank" className="whatsapp_share_button" href={getWhatsAppLink()}>
                   <img alt="forward on whatsapp" src={require('../../assets/images/icons/whatsapp.png')} />
                   Forward on WhatsApp
               </a>
           </div>
        </div>
    </ShareCardContainer>

};

export default ShareCard;