import React from "react";
import Breadcrumb from "./shared/Breadcrumb";

const PageHeader = ({ title, breadcrumb = null, description = null }) => (
    <div className="flex justify-center items-end">
        <div className="flex w-full container items-center px-4 lg:px-10 py-8" style={{ minHeight: '30vh' }}>
            <div>
                {breadcrumb?.length > 0 && (
                    <div className="w-full text-left mb-2">
                        <Breadcrumb items={breadcrumb}/>
                    </div>
                )}
                <h1 className="text-primary text-5xl font-semibold lg:text-6xl py-4">{title}</h1>
                {description?.length > 0 && (
                    <p className="opacity-75 text-sm md:text-base" style={{ maxWidth: '100%', width: '700px' }}>
                        {description}
                    </p>
                )}
            </div>
        </div>
    </div>
);

export default PageHeader;