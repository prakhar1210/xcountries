import React from "react";

interface CountryCardProps {
  name: string;
  flag: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, flag }) => {
  return (
    <div className="w-[200px] h-[200px] border rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="h-[60%]">
        <img
          src={flag}
          alt={`Flag of ${name}`}
          className="w-full h-full object-cover p-4 bg-amber-50"
        />
      </div>
      <div className="h-[40%] flex items-center justify-center bg-gray-100">
        <h2 className="text-lg font-semibold text-black">{name}</h2>
      </div>
    </div>
  );
};

export default CountryCard;
