import React from "react";
import Breadcrumb from "./shared/Breadcrumbs";

const PageHeader = ({ title, breadcrumb = null, description = null }) => (
    <div className="px-4 py-8 flex items-end justify-center">
        <div style={{ width: '1000px', maxWidth: '100%'  }}>
            <div className="flex items-center py-5" style={{ minHeight: '30vh' }}>
                <div className="w-full">
                    {breadcrumb?.length > 0 && (
                        <div className="w-full text-left mb-2">
                            <Breadcrumb items={breadcrumb}/>
                        </div>
                    )}
                    <h1 className="text-primary text-5xl lg:text-6xl py-4">{title}</h1>
                    {description?.length > 0 && (
                        <p className="opacity-75 text-sm md:text-base" style={{ maxWidth: '100%', width: '700px' }}>
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    </div>
);

export default PageHeader;