import React, { useState } from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";

import faq from '../src/data/faq';
import QuestionCard from "../src/components/QuestionCard";

const FAQSection = styled.section`
  width: 100%;
  min-height: 50vh;
  overflow-y: hidden;
  background-color: #eee;
  h1 {  
      font-weight: 900;
      font-size: 36px;
      text-transform: uppercase;
      text-align: center;
      margin-top: 20vh;
      margin-bottom: 10vh;
  }
`;

const FAQPage = () => {

    const [openQ, setOpen] = useState(0);

    return <Base meta={{ title: "Frequently Asked Questions (FAQ)" }}>
        <TopBar darkenOnSidebar includeSpace={false} />
        <FAQSection>
            <h1 className="mx-2 top-0 sticky-top">
                <img src={require('../src/assets/images/icons/faq.png')} />
                <div>Frequently Asked Questions</div>
            </h1>
            <div className="container px-1">
                {faq.map((q, i) =>
                    <Fade delay={i*100}>
                        <QuestionCard {...q} isOpen={i===openQ} onClick={() => setOpen(i!==openQ ? i : null)} />
                    </Fade>
                )}
                <div className="my-5 text-center">
                    <div className="text-dark">Did not find what you were looking for?</div>
                    <div>Write to us at <a href="mailto:contact@inctfj.in">contact@inctf.in</a></div>
                </div>
            </div>
        </FAQSection>
    </Base>

};

export default FAQPage;