// "use client"; // only if using app router

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface Country {
//   name: string;
//   flag: string;
//   abbr: string;
// }

// const HomePage = () => {
//   const [countries, setCountries] = useState<Country[]>([]);

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get(
//           "https://xcountries-backend.azurewebsites.net/all"
//         );
//         setCountries(response.data);
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error("Error fetching data: ", error.message);
//         } else {
//           console.error("Error fetching data: ", error);
//         }
//       }
//     };

//     fetchCountries();
//   }, []);

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {countries.map((country) => (
//         <div
//           key={country.abbr}
//           className="w-[300px] h-[300px] border rounded-lg shadow-md overflow-hidden flex flex-col"
//         >
//           <div className="h-[60%]">
//             <img
//               src={country.flag}
//               alt={`Flag of ${country.name}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="h-[40%] flex items-center justify-center bg-gray-100">
//             <h2 className="text-lg font-semibold">{country.name}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HomePage;

"use client"; // if using App Router

import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "@/Components/Generic/CountryCard";

interface Country {
  name: string;
  flag: string;
  abbr: string;
}

const HomePage = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        setCountries(response.data);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching data: ", error.message);
        } else {
          console.error("Error fetching data: ", error);
        }
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
      {countries.map((country) => (
        <CountryCard
          key={country.abbr}
          name={country.name}
          flag={country.flag}
        />
      ))}
    </div>
  );
};

export default HomePage;
