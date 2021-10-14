import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";

import faq from '../src/data/faq';
import QuestionCard from "../src/components/faq/QuestionCard";
import Footer from "../src/components/shared/Footer";
import FAQFilter from "../src/components/faq/Filter";
import { filteredFAQ } from "../src/components/faq/filterUtils";
import { Waypoint } from "react-waypoint";

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

const FAQPage = () => {

    const [totalVisible, setTotalVisible] = useState(10);
    const [openQ, setOpen] = useState(0);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState(new Set());

    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;
        const { q } = router.query;
        setSearch(q ?? '');
    }, [router.isReady]);

    useEffect(() => {
        setOpen(0);
    }, [search, tags]);

    const updateTotalVisible = (value) =>
        setTotalVisible(Math.max(10, Math.min(value, filteredFAQ(search, tags).length)));

    const renderFAQ = () => {
        const items = filteredFAQ(search, tags, totalVisible);
        return items?.length > 0 ? (
            items.map((q, i) =>
                <QuestionCard
                    search={search}
                    {...q}
                    isOpen={i === openQ}
                    onClick={() => setOpen(i !== openQ ? i : null)}
                    key={i}
                />
            )
        ) : (
            <div className="py-5 text-center">
                <h4 className="text-3xl mb-4">No Answers Found 😔</h4>
                <p className="text-dark ">
                    Your question in not one among our frequently asked questions.
                    You could try rephrasing the question in a different way, or
                    can join our <a href="/discord" target="_blank" className="hover:text-blue-600">discord community <i className="fa fa-external-link mr-1" /> </a> to ask us directly.
                </p>
            </div>
        );
    }

    return <Base meta={{ title: "Frequently Asked Questions (FAQ)" }}>
        <TopBar/>
        <FAQSection>
            <h1 className="mx-2 top-0 sticky-top">
                <img alt="FAQ" className="inline mb-3" src={require('../src/assets/images/icons/faq.png')}/>
                <div>Frequently Asked Questions</div>
            </h1>
            <div className="px-6 mx-auto" style={{ maxWidth: 800 }}>
                <FAQFilter
                    search={search}
                    setSearch={setSearch}
                    tags={tags}
                    setTags={setTags}
                    totalTags={totalTags}
                />
                {renderFAQ()}
                <Waypoint onEnter={() => updateTotalVisible(totalVisible + 4)}>
                    <div className="my-6 text-center">
                        <div style={{ color: '#111' }}>Did not find what you were looking for?</div>
                        <div style={{ color: '#222' }}>
                            Write to us at <a href="mailto:inctfj@am.amrita.edu">inctfj@am.amrita.edu</a>
                        </div>
                    </div>
                </Waypoint>
            </div>
        </FAQSection>
        <Footer/>
    </Base>

};

export default FAQPage;