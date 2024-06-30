import { features } from '../constants';

const FeatureSection = () => {
  return (
    <div className="relative mt-10  min-h-[600px]">
      <h2 className="text-3xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        METER ELECTRIC<br></br>
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          BUSINESS INFO
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-2 pt-8 pb-8 pl-2 pr-2">
        {features.map((feature, index) => (
          <div key={index} className="w-full border rounded-md sm:w-1/2 lg:w-1/4">
            <div className="grid gap-4 justify-items-center">
              <div className="pt-8 hover:cursor-default">{feature.text}</div>
              <div className="flex items-center justify-center w-10 h-10 text-blue-700 rounded-md bg-neutral-100 hover:bg-neutral-200 hover:cursor-pointer">
                {feature.icon}
              </div>
              <p className="pb-2 mb-2 text-md text-amber-50">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
