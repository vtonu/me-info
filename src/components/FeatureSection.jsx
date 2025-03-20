import React from 'react';

const FeatureSection = () => {
  return (
    <div className="min-h-screen p-10 text-white bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="max-w-4xl p-8 mx-auto text-black bg-white rounded-lg shadow-lg">
        <h1 className="mb-8 text-4xl font-bold text-center">METER ELECTRIC LLC</h1>
        <div className="space-y-4">
          <p>
            <strong>EIN #:</strong> 99-0388124
          </p>
          <p>
            <strong>UBI #:</strong> 605-383-312
          </p>
          <p>
            <strong>Incorporation Date:</strong> December 21, 2023 (WASOS Certificate)
          </p>
          <h2 className="mt-6 text-2xl font-semibold">Business Licenses & Permits:</h2>
          <ul className="list-disc list-inside">
            <li>Lynnwood License #: 6053833120010001</li>
            <li>Seattle License #: 605383312</li>
            <li>Kirkland License #: 605383312</li>
            <li>Redmond License #: 605383312</li>
            <li>Everett License #: 67546</li>
            <li>Contractor License #: METEREL772R7</li>
            <li>Reseller Permit #: A57940926</li>
          </ul>
          <h2 className="mt-6 text-2xl font-semibold">Contact Information:</h2>
          <p>
            <strong>Email:</strong> meterelectrical@gmail.com
          </p>
          <p>
            <strong>Website:</strong>{' '}
            <a href="http://www.meterelectrical.com" className="text-blue-500">
              www.meterelectrical.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +1 (425) 561-9562
          </p>
          <h2 className="mt-6 text-2xl font-semibold">Important Websites:</h2>
          <ul className="list-disc list-inside">
            <li>
              <a href="https://dor.wa.gov" className="text-blue-500">
                Washington DOR - File taxes, manage business licenses
              </a>
            </li>
            <li>
              <a href="https://seattle.gov/light" className="text-blue-500">
                Seattle City Light - Official utility website
              </a>
            </li>
            <li>
              <a
                href="https://seattle.gov/light/electricservice/application.asp"
                className="text-blue-500">
                Electrical Service Application - Apply for new or upgraded service
              </a>
            </li>
            <li>
              <a
                href="https://seattle.gov/light/electricservice/permit.asp"
                className="text-blue-500">
                Electrical Permit Application - Apply for an electrical permit
              </a>
            </li>
            <li>
              <a href="https://secure.lni.wa.gov" className="text-blue-500">
                LN&I Licensing - Verify contractors, permits, and licenses
              </a>
            </li>
            <li>
              <a href="https://secure.dshs.wa.gov" className="text-blue-500">
                DSHS New Hire Reporting - Report new W2 employees
              </a>
            </li>
            <li>
              <a href="https://esd.wa.gov" className="text-blue-500">
                Employment Security Department - Unemployment, wages, and reporting
              </a>
            </li>
            <li>
              <a href="https://bxwa.com" className="text-blue-500">
                Builders Exchange of WA - Construction projects and bidding
              </a>
            </li>
            <li>
              <a href="https://gobonfire.com" className="text-blue-500">
                Bonfire Vendor Portal - Government project bidding
              </a>
            </li>
            <li>
              <a href="https://des.wa.gov" className="text-blue-500">
                Department of Enterprise Services - State contracting opportunities
              </a>
            </li>
            <li>
              <a href="https://pr-webs-vendor.des.wa.gov" className="text-blue-500">
                Washington WEBS - Vendor database for state contracts
              </a>
            </li>
            <li>
              <a href="https://mrscrosters.org" className="text-blue-500">
                MRSC Rosters - Connect with public agencies for small projects
              </a>
            </li>
            <li>
              <a href="https://hasco.org" className="text-blue-500">
                HASCO - Housing Authority of Snohomish County
              </a>
            </li>
            <li>
              <a href="https://quickbooks.intuit.com" className="text-blue-500">
                QuickBooks - Online accounting and business tools
              </a>
            </li>
            <li>
              <a href="https://planhub.com" className="text-blue-500">
                PlanHub - Commercial project leads and bid management
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
