import React, { useState } from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";

import faq from '../src/data/faq';
import QuestionCard from "../src/components/QuestionCard";
import Footer from "../src/components/shared/Footer";

const FAQSection = styled.section`
  width: 100%;
  overflow-y: hidden;
  color: #333;
  h1 {  
      font-weight: 900;
      font-size: 36px;
      text-transform: uppercase;
      text-align: center;
      margin-top: 10vh;
      margin-bottom: 10vh;
  }
`;

const FAQPage = () => {

    const [openQ, setOpen] = useState(0);
    const [search, setSearch] = useState('');

    return <Base meta={{ title: "Frequently Asked Questions (FAQ)" }}>
        <TopBar />
        <FAQSection>
            <h1 className="mx-2 top-0 sticky-top">
                <img alt="FAQ" className="inline mb-3" src={require('../src/assets/images/icons/faq.png')} />
                <div>Frequently Asked Questions</div>
            </h1>
            <div className="px-6 mx-auto" style={{ maxWidth: 800 }}>
                <div className="transition relative mx-4 mb-8">
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search..."
                        className="outline-none pl-4 pr-12 py-2 border rounded-lg shadow-inner focus:border-yellow-600 w-full"
                    />
                    <div
                        className="absolute right-0 mr-4 cursor-pointer"
                        style={{ top: '50%', transform: 'translateY(-50%)' }}
                    >
                        <i className="fas fa-search opacity-50" />
                    </div>
                </div>

                {faq.filter(f => f.question.toLowerCase().includes(search.toLowerCase())).map((q, i) =>
                    <Fade delay={i*50}>
                        <QuestionCard {...q} isOpen={i === openQ} onClick={() => setOpen(i !== openQ ? i : null)} />
                    </Fade>
                )}
                <div className="my-6 text-center">
                    <div style={{ color: '#111' }}>Did not find what you were looking for?</div>
                    <div style={{ color: '#222' }}>Write to us at <a href="mailto:contact@inctfj.in">contact@inctf.in</a></div>
                </div>
            </div>
        </FAQSection>
        <Footer />
    </Base>

};

export default FAQPage;