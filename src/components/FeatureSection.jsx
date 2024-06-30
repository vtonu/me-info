import React, { useState } from 'react';
import { features } from '../constants';

const FeatureSection = () => {
  const [clickedStatus, setClickedStatus] = useState({});

  const handleClick = (index) => {
    setClickedStatus({ ...clickedStatus, [index]: true });
    setTimeout(() => {
      setClickedStatus({ ...clickedStatus, [index]: false });
    }, 500);
  };

  return (
    <div className="relative mt-10 min-h-[600px]">
      <h2 className="text-3xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        METER ELECTRIC
        <br />
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          BUSINESS INFO
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-2 pt-8 pb-8 pl-2 pr-2">
        {features.map((feature, index) => (
          <div key={index} className="w-full border rounded-md sm:w-1/2 lg:w-1/4">
            <div className="grid gap-4 justify-items-center">
              <div className="pt-8 hover:cursor-default">{feature.text}</div>
              <button
                className={`flex items-center justify-center w-10 h-10 text-blue-700 rounded-md bg-neutral-100 hover:bg-neutral-200 ${
                  clickedStatus[index] ? 'bg-neutral-300 border-2 text-blue-600' : ''
                }`}
                onClick={() => handleClick(index)}>
                {feature.icon}
              </button>
              <div className="pb-2 mb-2 text-md text-amber-50">{feature.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
