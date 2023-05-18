import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

const ocean = require('react-syntax-highlighter/dist/esm/styles/hljs/ocean');

const CodeBlock = ({ language = null, value }) => (
  <SyntaxHighlighter
    language={language}
    style={ocean.default}
    wrapLines={true}
    wrapLongLines="pre-wrap"
  >
    {value || ''}
  </SyntaxHighlighter>
);

export default CodeBlock;