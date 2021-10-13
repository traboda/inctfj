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
            <div className="container px-3 py-5">
                <div className="lg:px-8 md:px-6 px-3 mb-8 py-2">
                    <div>
                        <div>
                            {data?.difficulty}  | {data?.category}
                        </div>
                        <div className="py-3" style={{ maxWidth: '900px' }}>
                            <h1>{data.title}</h1>
                        </div>
                        <div>
                            <a
                                href={`https://app.traboda.com/contest/inctfj-21-lr/challenge/${data?.id}`}
                                className="bg-blue-900 px-4 py-4 text-white rounded-lg"
                            >
                                Open Challenge <i className="fa fa-external-link ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="py-4 lg:px-8 md:px-6 px-3" style={{ minHeight: '70vh', maxWidth: '900px' }}>
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