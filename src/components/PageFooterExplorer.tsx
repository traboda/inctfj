import React from "react";

type PageFooterExplorer = {
    items: {
        title: string,
        text: string,
        link: string
    }[]
}

const PageFooterExplorer = ({ items }: PageFooterExplorer) => (
    <div className="flex justify-center bg-gray-100 py-12 items-center">
        <div className="container py-8 px-4 lg:px-8">
            <div className="flex flex-wrap justify-center items-center">
                {items.map((i) => (
                    <div className="w-full h-full md:w-1/3 lg:w-1/4 p-2">
                        <a href={i.link} className="flex h-full bg-white shadow-xl hover:shadow transition-all flex-wrap p-3 rounded-lg">
                            <div className="w-4/5 p-2">
                                <div className="text-primary text-lg">
                                    {i.title}
                                </div>
                                <p className="text-sm opacity-80">{i.text}</p>
                            </div>
                            <div className="w-1/5 flex text-xl items-center min-h-full justify-end px-1">
                                <i className="fa text-primary fa-chevron-right" />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default PageFooterExplorer;