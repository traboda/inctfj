import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-awesome-reveal';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const HowItWorksSection = styled.section`
  text-align: center;
  img {
     max-width: 100%;
     width: 150px;
     box-shadow: none!important;
     padding: 0;
     margin-bottom: 10px;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
    }
  h3 {
      text-transform: uppercase;
      font-weight: 900;
      img {
        box-shadow: none!important;
      }
  }
  p {
    font-size: 14px;
  } 
  a {
      text-decoration: none!important;
      display: inline-flex;
      align-items: center;
      line-height: 1;
      background: #eee;
      border-radius: 5px;
      padding: 4px 10px;
      img {
        margin-bottom: 0;
        max-height: 28px;
        margin-right: 8px;
      }
  }
`;


const LandingHowItWorks = () => {

    const steps = [
        ...data.Captions.map((caption, index) => {
            return {
                "title": caption.title, "icon": '/assets/images/icons/' + caption.icon,
                "delay": (index + 1) * 100, "left": true,
                "content": <>
                    {caption.content}
                </>,
                "links": [
                    ...caption.links.map((link) => {
                        return {
                            "title": link.title, "url": link.url
                        }
                    })
                ]
            }
        })
    ]

    return (
        <HowItWorksSection className="motto-cards flex flex-wrap py-5 container mx-auto px-4">
            <div className="w-full flex justify-center p-0 mb-12">
                <h2 className="py-2 rounded-r mt-4 mb-2 md:flex inline-block items-center font-bold text-center">
                    <img
                        draggable="false"
                        alt="How it Works?"
                        src={'/assets/images/icons/thinking.png'}
                        className="mr-2 my-0 p-0 shadow-none inline-block"
                        style={{ width: '64px' }}
                    />
                    How Does it Work?
                </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                {steps.map((s) =>
                    <Fade left={s.left} right={s.right} top={s.top} delay={s.delay}>
                        <div className="flex flex-wrap">
                            <div className="md:w-full pr-4 pl-4 flex items-center justify-center w-1/4 p-1 md:p-0">
                                <img draggable="false" alt={s.title} src={s.icon} />
                            </div>
                            <div className="md:w-full pr-4 pl-4 w-3/4 text-left md:text-center p-2 md:p-0">
                                <h3>{s.title}</h3>
                            </div>
                            <div className="w-full text-left md:text-center">
                                <p>{s.content}</p>
                                {(s.links && s.links.length > 0) &&
                                    <div className="w-full mt-3 mb-4">{s.links.map((l) =>
                                        <a className="inline-block mx-2 py-2 px-3 mb-2" target="_blank" href={l.url}>
                                            <i className="fa fa-external-link mr-2" />
                                            {l.title}
                                        </a>
                                    )}</div>}
                            </div>
                        </div>
                    </Fade>
                )}
            </div>
        </HowItWorksSection>
    )

};

export default LandingHowItWorks;