import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";

import faq from '../src/data/faq';
import QuestionCard from "../src/components/faq/QuestionCard";
import Footer from "../src/components/shared/Footer";
import FAQFilter from "../src/components/faq/Filter";

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

const totalTags = [...faq.reduce((acc, f) => {
    const _acc = new Set([...acc]);
    f.tags.forEach(tag => _acc.add(tag));
    return _acc;
}, new Set)].map(faq => ({ value: faq, label: faq }));

const intersection = (set1, set2) => new Set([...set1].filter(x => set2.has(x)))

const FAQPage = () => {

    const [openQ, setOpen] = useState(0);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState(new Set());

    useEffect(() => {
        setOpen(0);
    }, [search, tags]);

    const filteredFAQ = () => {
        return faq.filter(f => {
            return f.question.toLowerCase().includes(search.toLowerCase()) &&
                (tags.size > 0 ? intersection(f.tags, tags).size > 0 : true)
        });
    }

    return <Base meta={{ title: "Frequently Asked Questions (FAQ)" }}>
        <TopBar/>
        <FAQSection>
            <h1 className="mx-2 top-0 sticky-top">
                <img alt="FAQ" className="inline mb-3" src={require('../src/assets/images/icons/faq.png')}/>
                <div>Frequently Asked Questions</div>
            </h1>
            <div className="px-6 mx-auto" style={{ maxWidth: 800 }}>
                <FAQFilter search={search} setSearch={setSearch} tags={tags} setTags={setTags} totalTags={totalTags}/>

                {filteredFAQ().map((q, i) =>
                    <Fade delay={i * 50}>
                        <QuestionCard search={search} {...q} isOpen={i === openQ}
                                      onClick={() => setOpen(i !== openQ ? i : null)}/>
                    </Fade>
                )}
                <div className="my-6 text-center">
                    <div style={{ color: '#111' }}>Did not find what you were looking for?</div>
                    <div style={{ color: '#222' }}>Write to us at <a
                        href="mailto:contact@inctfj.in">contact@inctf.in</a></div>
                </div>
            </div>
        </FAQSection>
        <Footer/>
    </Base>

};

export default FAQPage;