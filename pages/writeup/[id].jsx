import React from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Base from "../../src/components/shared/Base";
import TopBar from "../../src/components/shared/TopBar";

import Footer from "../../src/components/shared/Footer";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import Breadcrumb from "../../src/components/shared/Breadcrumb";

const CodeBlock = dynamic(() => import("../../src/components/CodeBlock"), { ssr: false });

const Markdown = styled.div`
  overflow-wrap: anywhere;
  
  p { margin-bottom: 1rem; }

  a {
    color: #F13F17;

    &:hover {
      text-decoration: underline;
    }
  }

  ol, ul {
    list-style: revert;
    margin: revert;
    padding: revert;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.75rem !important;
  }

  h1, .modest-h1 {
    font-size: 3rem;
  }

  h2, .modest-h2 {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }

  h3, .modest-h3 {
    font-size: 1.6rem;
  }

  h4, .modest-h4 {
    font-size: 1.414rem;
  }

  h5, .modest-h5 {
    font-size: 1.121rem;
  }

  h6, .modest-h6 {
    font-size: .88rem;
  }

  p:last-child {
    margin-bottom: 0;
  }

  pre {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 7px;
  }

  p > code {
    padding: 2px 6px;
    background: rgb(206, 198, 198);
    border-radius: 7px;
  }

  blockquote {
    border-left: 8px solid #fafafa;
    padding: 1rem;
    font-style: italic;
    background: rgb(75, 85, 99);
    border-radius: 7px;
    margin-bottom: 1rem;

    & > blockquote {
      margin-top: 1rem;
    }
  }

  table {
    width: 100%;
    border-radius: 7px;
    border-style: hidden;
    text-align: left;
    color: #333;
    overflow: hidden;

    thead th, thead td {
      padding: 8px 12px;
      background: #dedee6;
    }

    tbody th, tbody td {
      border: 1px solid #dedee6;
      padding: 8px 12px;
      background: white;
    }
  }
`;

const WriteUpPage = ({ id }) => {
    const data = (() => {
        try {
            return require(`../../src/data/writeups/${id}.yaml`);
        } catch (e) {
            return null;
        }
    })();

    return data ?
        <Base meta={{ title: `${data.title} - ${data?.category} Challenge Solution`}}>
            <TopBar darkenOnSidebar />
            <div className="px-4 py-8 flex items-end justify-center" style={{ minHeight: '30vh' }}>
                <div style={{ width: '1000px', maxWidth: '100%'  }}>
                    <div className="mb-6">
                        <Breadcrumb
                            items={[
                                {
                                    link: '/writeups',
                                    title: 'Writeups'
                                }
                            ]}
                        />
                    </div>
                    <h1 className="text-primary mb-2 text-3xl lg:text-6xl">{data.title}</h1>
                    <div className="font-semibold opacity-75 text-base pb-6 pt-2">
                        <span><i className="far fa-fire"/> {data?.difficulty} </span>
                        <span className="ml-2"><i className="far fa-album-collection"/> {data?.category}</span>
                    </div>
                    <div className="mt-4">
                        <a
                            href={`https://app.traboda.com/contest/inctfj-21-lr/challenge/${data?.id}`}
                            className="bg-blue-900 hover:bg-primary px-4 py-3 text-white rounded-lg"
                        >
                            Open Challenge <i className="fa fa-external-link ml-1" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-4 flex justify-center bg-gray-50">
                <div className="p-3" style={{ minHeight: '70vh', width: '1000px', maxWidth: '100%' }}>
                    <Markdown className="leading-relaxed">
                        <ReactMarkdown
                            plugins={[remarkGfm]}
                            children={data?.content}
                            renderers={{
                                code: CodeBlock
                            }}
                        />
                    </Markdown>
                </div>
            </div>
            <Footer />
        </Base> :
        <Base meta={{ title: `WriteUp Not Found` }}>
            <TopBar darkenOnSidebar />
            <h1>Writeup not found</h1>
            <Footer />
        </Base>
}

WriteUpPage.getInitialProps = async ({ query }) => {
    const id = query.id;
    return { id }
};


export default WriteUpPage;