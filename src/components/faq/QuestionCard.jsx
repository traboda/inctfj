import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import reactStringReplace from 'react-string-replace';
import Tooltip from 'rc-tooltip';

import 'rc-tooltip/assets/bootstrap_white.css';

const QuestionContainer = styled.div`
  padding: 0.75rem 1rem;
  width: 100%;
  background: white;
  color: #222;
  margin-bottom: 0.5rem;
  font-size: 17px;

  p {
    margin-top: 8px;
    margin-bottom: 0;
  }

  button {
    display: flex;
    align-items: baseline;
    padding: 0;
    text-align: left;
    background: none !important;
    border: none;
    font-size: 22px;
    line-height: 1.5;

    i {
      color: #fd7e14;
      font-size: 22px;
      margin-right: 8px;
      transition: transform 250ms ease-in;

      &.flip {
        transform: rotate(180deg);
      }
    }

    &:focus, &:hover {
      outline: none !important;
    }
  }

  li {
    margin: 5px 0;
  }
`;

const QuestionCard = ({ question, answer, isOpen, onClick = () => {}, search }) => {

  const [isCopied, setIsCopied] = useState(false);
  const copy = event => {
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard.writeText(encodeURI(`${location.origin}/faq?q=${question}`));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (<QuestionContainer>
    <button onClick={onClick} className="font-semibold w-full justify-between">
      <div className="flex items-baseline">
        <i className={`fa fa-chevron-up ${isOpen ? 'flip' : ''}`} />
        <div>
          {reactStringReplace(question, search, match => (
            <span style={{ background: 'yellow' }}>{match}</span>
          ))}
        </div>
      </div>

      <Tooltip overlay={isCopied ? 'copied!' : 'Click to copy link to the question'} placement="bottom">
        <a href="#" onClick={copy}>
          <i className="fas fa-share-alt opacity-75 text-sm" />
        </a>
      </Tooltip>
    </button>
    <AnimatePresence>
      {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
      >
        <div className="px-2 pt-3 pb-1" style={{ marginLeft: 19 }}>
          {answer}
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  </QuestionContainer>);

};

export default QuestionCard;