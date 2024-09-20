import React, { useState } from 'react';

const websites = [
  {
    name: 'DOR',
    link: 'https://dor.wa.gov/',
    description:
      "Washington State Department of Revenue's website. File quarterly taxes, sales tax, business licenses, governor update & more.",
  },
  {
    name: 'Seattle City Light',
    link: 'https://seattle.gov/city-light',
    description: 'Seattle City Light Official Website.',
  },
  {
    name: 'Seattle City Light - Electrical Service Application',
    link: 'https://seattle.gov/city-light/construction-services/apply-for-new-or-upgraded-service',
    description: 'Apply for New or Upgraded Electric Service.',
  },
  {
    name: 'Seattle City Light - Electrical Permit Application',
    link: 'https://www.seattle.gov/sdci/permits/permits-we-issue-(a-z)/electrical-permit',
    description: 'Apply for an Electrical Permit Online.',
  },
  {
    name: 'LN&I - Licensing & Permits',
    link: 'https://www.lni.wa.gov/licensing-permits/',
    description: 'Verify a contractor, permits, licenses, and more.',
  },
  {
    name: 'DSHS - New Hire Reporting',
    link: 'https://www.dshs.wa.gov/esa/division-child-support/new-hire-reporting',
    description: 'Report a new W2 employee to the Department of Social and Health Services.',
  },
  {
    name: 'ESD WA',
    link: 'https://secure.esd.wa.gov/home/',
    description:
      'Employment Security Department of Washington State. Unemployment, Wages & Quarterly Reporting.',
  },
  {
    name: 'Builders Exchange of Washington, Inc.',
    link: 'http://www.bxwa.com/',
    description: 'Find construction projects, bid on projects, and more.',
  },
  {
    name: 'Bonfire Vendor Portal',
    link: 'https://vendor.bonfirehub.com/',
    description:
      'Bonfire Premium Vendor is an easy to use bidding portal that helps your business find and bid on thousand of government projects.',
  },
  {
    name: 'DES',
    link: 'https://des.wa.gov/sell/how-work-state',
    description:
      'Department of Enterprise Services - Find existing contracting opportunities you can bid on and view all upcoming contracting opportunities for vendors who want to work with the state.',
  },
  {
    name: 'WEBS',
    link: 'https://pr-webs-vendor.des.wa.gov/',
    description:
      'Washington’s Electronic Business Solution (WEBS) provides an on-line database of vendors interested in doing business with state agencies and institutions.',
  },
  {
    name: 'MRSC Rosters',
    link: 'https://mrscrosters.org/',
    description:
      'MRSC Rosters connects businesses with public agencies in Washington State for small public works projects, consulting opportunities, and goods and services.',
  },
  {
    name: 'HASCO',
    link: 'https://hasco.org/contact-us/service-contracts-info/',
    description: 'Housing Authority of Snohomish County.',
  },
  {
    name: 'QuickBooks',
    link: 'https://quickbooks.intuit.com/login/',
    description: 'QuickBooks Online Login.',
  },
  {
    name: 'PlanHub',
    link: 'https://planhub.com/',
    description:
      'Commercial project leads, networking, bid management, takeoff, estimation, and insights.',
  },
];

const UsefulWebsite = () => {
  const [clickedStatus, setClickedStatus] = useState({});

  const copyText = (text) => {
    navigator.clipboard.writeText(text).then(
      () => console.log('Copied to clipboard successfully!'),
      (err) => console.error('Failed to copy to clipboard', err),
    );
  };

  const handleClick = (index, textToCopy) => {
    setClickedStatus({ ...clickedStatus, [index]: true });
    copyText(textToCopy);

    setTimeout(() => {
      setClickedStatus((prevState) => ({ ...prevState, [index]: false }));
    }, 1500);
  };

  return (
    <div className="relative mt-10 min-h-[600px]">
      <h2 className="text-3xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        IMPORTANT
        <br />
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          WEBSITES
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-2 pt-8 pb-8">
        {websites.map((website, index) => (
          <div key={index} className="w-1/4 border rounded-md ">
            <div className="grid gap-4 p-4 justify-items-center">
              <div className="pt-8 text-center hover:cursor-default">{website.name}</div>
              <div className="text-sm text-center text-gray-600">{website.description}</div>
              <a
                href={website.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-auto h-10 px-2 text-blue-700 rounded-md bg-neutral-100 hover:bg-neutral-200">
                VISIT SITE
              </a>
              <button
                className={`flex items-center justify-center w-auto h-10 text-blue-700 rounded-md bg-neutral-100 hover:bg-neutral-200 px-2  ${
                  clickedStatus[index] ? 'bg-neutral-300 border-2 text-blue-600' : ''
                }`}
                onClick={() => handleClick(index, website.link)}>
                <span>{clickedStatus[index] ? 'Copied!' : 'COPY LINK'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsefulWebsite;
