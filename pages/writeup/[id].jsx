import React from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Base from "../../src/components/shared/Base";
import TopBar from "../../src/components/shared/TopBar";

import Footer from "../../src/components/shared/Footer";

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
            <div className="container px-6 py-12 mx-auto">
                <div className="mb-4 py-2">
                    <div>
                        <div className="font-semibold opacity-75 text-base mb-2">
                            <span><i className="far fa-fire"/> {data?.difficulty} </span>
                            <span className="ml-2"><i className="far fa-album-collection"/> {data?.category}</span>
                        </div>
                        <div className="pb-3" style={{ maxWidth: '900px' }}>
                            <h1>{data.title}</h1>
                        </div>
                        <div className="mt-4">
                            <a
                                href={`https://app.traboda.com/contest/inctfj-21-lr/challenge/${data?.id}`}
                                className="bg-blue-900 px-4 py-3 text-white rounded-lg"
                            >
                                Open Challenge <i className="fa fa-external-link ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="py-4" style={{ minHeight: '70vh', maxWidth: '900px' }}>
                    <div>
                        <ReactMarkdown plugins={[remarkGfm]} children={data?.content} />
                    </div>
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