import React from 'react';
import Breadcrumb from './shared/Breadcrumb';

const PageHeader = ({ title, breadcrumb = null, description = null }) => (
  <div className="flex justify-center items-end w-full">
    <div className="flex w-full container items-center px-2 sm:px-4 lg:px-10 py-4 sm:py-6 lg:py-8" style={{ minHeight: '25vh' }}>
      <div className="w-full">
        {breadcrumb?.length > 0 && (
        <div className="w-full text-left mb-1 sm:mb-2">
          <Breadcrumb items={breadcrumb} />
        </div>
        )}
        <h1 className="text-primary text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold py-2 sm:py-4 break-words">{title}</h1>
        {description?.length > 0 && (
        <p className="opacity-75 text-xs sm:text-sm md:text-base break-words" style={{ maxWidth: '100%' }}>
          {description}
        </p>
        )}
      </div>
    </div>
  </div>
);

export default PageHeader;