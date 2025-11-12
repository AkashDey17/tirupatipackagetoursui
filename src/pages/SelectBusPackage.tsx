// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { format } from "date-fns";
// import CalendarComp from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { Calendar, ChevronDown } from "lucide-react";

// const SelectBusPackage = () => {
//   const navigate = useNavigate();
//   const [selectedDate, setSelectedDate] = useState<Date>(new Date());
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);


//   const packages = [
//     { id: 2, name: "Tirupati 1 Day 1 Night Dharma Darshan Package" },
//     { id: 3, name: "Tirupati Srikalahasti 2 Nights 2 Days Dharma Darshan Package" },
//   ];

//   const handleSubmit = () => {
//     if (!selectedPackage) {
//       alert("Please select a package before continuing!");
//       return;
//     }

//     const selectedPkg = packages.find((p) => p.id === selectedPackage);
//     navigate("/new-bus-booking", {
//       state: {
//         selectedDate: format(selectedDate, "yyyy-MM-dd"),
//         from: selectedPkg?.name,
//         packageId: selectedPkg?.id,
//       },
//     });
//   };

//   return (
//     <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-w-lg mx-auto mt-[20px]">
//       <h2 className="text-2xl font-bold text-[#020e68] text-center mb-5">
//         Select Your Tirupati Package
//       </h2>

     

// <div className="mb-5">
//   <label className="block text-sm font-medium text-gray-600 mb-2">
//     Choose a Package
//   </label>
//   <div className="relative">
//     <select
//       value={selectedPackage || ""}
//       onChange={(e) => setSelectedPackage(Number(e.target.value))}
//       onFocus={() => setIsDropdownOpen(true)}
//       onBlur={() => setIsDropdownOpen(false)}
//       onClick={() => setShowCalendar(false)} // close calendar if open
//       className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#020e68] bg-gray-50 
//         font-medium focus:ring-2 focus:ring-[#020e68] focus:border-[#020e68] 
//         transition-all duration-200 cursor-pointer hover:bg-gray-100 appearance-none"
//     >
//       <option value="" disabled>
//         Select a Tirupati Package
//       </option>
//       {packages.map((pkg) => (
//         <option key={pkg.id} value={pkg.id}>
//           {pkg.name}
//         </option>
//       ))}
//     </select>

//     <ChevronDown
//       className={`absolute right-4 top-1/2 -translate-y-1/2 text-[#020e68] pointer-events-none 
//         transition-transform duration-300 ${
//           isDropdownOpen ? "rotate-180" : "rotate-0"
//         }`}
//       size={20}
//     />
//   </div>
// </div>



//       {/* Date Picker */}
//       <div className="mb-6 relative">
//         <label className="block text-sm font-medium text-gray-600 mb-1">
//           Date of Journey
//         </label>
//         <div
//           onClick={() => setShowCalendar(!showCalendar)}
//           className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-3 cursor-pointer 
//           bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:border-[#020e68]"
//         >
//           <span className="text-[#020e68] font-medium">
//             {format(selectedDate, "dd MMM yyyy")}
//           </span>
//           <Calendar className="text-[#020e68]" size={20} />
//         </div>

//         {showCalendar && (
//           <div className="absolute z-50 mt-2 bg-white shadow-2xl rounded-2xl border p-3">
//             <CalendarComp
//               onChange={(date) => {
//                 setSelectedDate(date as Date);
//                 setShowCalendar(false);
//               }}
//               value={selectedDate}
//               minDate={new Date()}
//               maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
//             />
//           </div>
//         )}
//       </div>

//       {/* Submit Button */}
//       <button
//         onClick={handleSubmit}
//         className="w-full bg-[#020e68] hover:bg-[#031273] text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
//       >
//         Search Buses
//       </button>
//     </div>
//   );
// };

// export default SelectBusPackage;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import CalendarComp from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Calendar, ChevronDown, MapPin } from "lucide-react";

const SelectBusPackage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const packages = [
    { id: 2, name: "Tirupati 1 Day 1 Night Dharma Darshan Package" },
    { id: 3, name: "Tirupati Srikalahasti 2 Nights 2 Days Dharma Darshan Package" },
  ];

  const handleSubmit = () => {
    if (!selectedPackage) {
      alert("Please select a package before continuing!");
      return;
    }

    const selectedPkg = packages.find((p) => p.id === selectedPackage);
    navigate("/new-bus-booking", {
      state: {
        selectedDate: format(selectedDate, "yyyy-MM-dd"),
        from: selectedPkg?.name,
        packageId: selectedPkg?.id,
      },
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm max-w-6xl mx-auto mt-[20px]">
      <h2 className="text-2xl font-bold text-[#020e68] text-center mb-6">
        Select Your Tirupati Package
      </h2>

      {/* Search bar row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        {/* From Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            From
          </label>
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 bg-gray-50">
            <MapPin className="text-[#020e68] mr-2" size={18} />
            <span className="text-[#020e68] font-medium">Bengaluru</span>
          </div>
        </div>

        {/* To Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            To
          </label>
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 bg-gray-50">
            <MapPin className="text-[#020e68] mr-2" size={18} />
            <span className="text-[#020e68] font-medium">Tirupati Package</span>
          </div>
        </div>

        {/* Package Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Package
          </label>
          <div className="relative">
            <select
              value={selectedPackage || ""}
              onChange={(e) => setSelectedPackage(Number(e.target.value))}
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={() => setIsDropdownOpen(false)}
              onClick={() => setShowCalendar(false)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#020e68] bg-gray-50 
                font-medium focus:ring-2 focus:ring-[#020e68] focus:border-[#020e68] 
                transition-all duration-200 cursor-pointer hover:bg-gray-100 appearance-none"
            >
              <option value="" disabled>
                Select Package
              </option>
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name}
                </option>
              ))}
            </select>

            <ChevronDown
              className={`absolute right-4 top-1/2 -translate-y-1/2 text-[#020e68] pointer-events-none 
                transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              size={20}
            />
          </div>
        </div>

        {/* Date Picker */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Date
          </label>
          <div
            onClick={() => setShowCalendar(!showCalendar)}
            className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-3 cursor-pointer 
            bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:border-[#020e68]"
          >
            <span className="text-[#020e68] font-medium">
              {format(selectedDate, "dd MMM yyyy")}
            </span>
            <Calendar className="text-[#020e68]" size={20} />
          </div>

          {showCalendar && (
            <div className="absolute z-50 mt-2 bg-white shadow-2xl rounded-2xl border p-3">
              <CalendarComp
                onChange={(date) => {
                  setSelectedDate(date as Date);
                  setShowCalendar(false);
                }}
                value={selectedDate}
                minDate={new Date()}
                maxDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
              />
            </div>
          )}
        </div>

        {/* Search Button in same row */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="w-full md:w-auto bg-[#020e68] hover:bg-[#031273] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Search Buses
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectBusPackage;
