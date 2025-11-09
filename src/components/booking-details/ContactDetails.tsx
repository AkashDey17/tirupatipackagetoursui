// import { useEffect, useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import ReactCountryFlag from "react-country-flag";
// import logo from "@/assets/logo.png";
// import { toast } from "react-toastify";
// import { CheckCircle } from "lucide-react";
// import { Link } from "react-router-dom";

// const countries = [
//   { code: "IN", name: "India", dial_code: "+91" },
//   { code: "US", name: "United States", dial_code: "+1" },
//   { code: "GB", name: "United Kingdom", dial_code: "+44" },
//   { code: "CA", name: "Canada", dial_code: "+1" },
//   { code: "AU", name: "Australia", dial_code: "+61" },
//   { code: "SG", name: "Singapore", dial_code: "+65" },
//   { code: "JP", name: "Japan", dial_code: "+81" },
//   { code: "FR", name: "France", dial_code: "+33" },
//   { code: "DE", name: "Germany", dial_code: "+49" },
//   { code: "CN", name: "China", dial_code: "+86" },
//   { code: "BR", name: "Brazil", dial_code: "+55" },
//   { code: "ZA", name: "South Africa", dial_code: "+27" },
//   { code: "AE", name: "UAE", dial_code: "+971" },
//   { code: "SA", name: "Saudi Arabia", dial_code: "+966" },
//   { code: "PK", name: "Pakistan", dial_code: "+92" },
//   { code: "BD", name: "Bangladesh", dial_code: "+880" },
//   { code: "LK", name: "Sri Lanka", dial_code: "+94" },
//   { code: "NP", name: "Nepal", dial_code: "+977" },
//   { code: "TH", name: "Thailand", dial_code: "+66" },
// ];

// const ContactDetails = ({ setContactData }: { setContactData: any }) => {
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [isPrimary, setIsPrimary] = useState(false);
//   const [showVerifiedModal, setShowVerifiedModal] = useState(false);

//   const handleChange = () => {
//     setContactData({
//       Email: email,
//       ContactNo: mobileNumber,
//       Primary: isPrimary,
//     });
//   };

//   useEffect(() => {
//   setContactData((prev: any) => ({
//     ...prev,
//     Email: email,
//     ContactNo: mobileNumber,
//     Primary: isPrimary,
//   }));
// }, [email, mobileNumber, isPrimary]);
//   const handlePrimaryChange = (checked: boolean) => {
//     if (!email) {
//       toast.error("Email ID is required before setting as Primary");
//       return;
//     }

//     if (checked) {
//       setIsPrimary(true);
//       setContactData({
//         Email: email,
//         ContactNo: mobileNumber,
//         Primary: true,
//       });
//       setShowVerifiedModal(true);
//     } else {
//       setIsPrimary(false);
//       setContactData({
//         Email: email,
//         ContactNo: mobileNumber,
//         Primary: false,
//       });
//     }
//   };

//   return (
//     <div className="bg-[#4A4A4A]-card rounded-lg border border-[#4A4A4A]-light p-6">
//       <div className="mb-4">
//         <h2 className="text-xl text-[#3D85C6] font-bold">Contact Details</h2>
//         <p className="text-sm text-[#4A4A4A]">We'll send your ticket here</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <Label htmlFor="email" className="text-sm font-medium text-[#3D85C6]">
//             Email Id*
//           </Label>
//           <Input
//             id="email"
//             placeholder="Type here"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//              // handleChange();
//             }}
//             className="mt-1 border border-[#4A4A4A] focus:border-[#4A4A4A]"
//           />
//         </div>

//         <div>
//           <Label htmlFor="mobile" className="text-sm font-medium text-[#3D85C6]">
//             Mobile Number*
//           </Label>

//           <div className="flex mt-1 border border-[#4A4A4A] rounded">
//             <div
//               className="flex items-center pl-2 cursor-pointer"
//               onClick={() => setShowDropdown(!showDropdown)}
//             >
//               <ReactCountryFlag
//                 countryCode={selectedCountry.code}
//                 svg
//                 style={{ width: "1.5em", height: "1.5em" }}
//               />
//               <span className="ml-2">{selectedCountry.dial_code}</span>
//             </div>

//             {showDropdown && (
//               <select
//                 className="absolute ml-2 mt-1 bg-white border rounded z-50"
//                 value={selectedCountry.code}
//                 onChange={(e) => {
//                   setSelectedCountry(
//                     countries.find((c) => c.code === e.target.value) || countries[0]
//                   );
//                   setShowDropdown(false);
//                 }}
//               >
//                 {countries.map((country) => (
//                   <option key={country.code} value={country.code}>
//                     {country.name} ({country.dial_code})
//                   </option>
//                 ))}
//               </select>
//             )}

//             {/* <Input
//               id="mobile"
//               placeholder="Type here"
//               value={mobileNumber}
//               onChange={(e) => {
//                 setMobileNumber(e.target.value);
//                 handleChange();
//               }}
//               className="ml-2 flex-1 border-none focus:ring-0"
//             /> */}

//             <Input
//               id="mobile"
//               placeholder="Type here"
//               value={mobileNumber}
//               onChange={(e) => {
//                 setMobileNumber(e.target.value);
//                 setContactData({ Email: email, ContactNo: e.target.value, Primary: isPrimary });
//               }}
//               className="ml-2 flex-1 border-none focus:ring-0 focus:border-none"

//             />
//           </div>
//         </div>
//       </div>

//       <div className="mt-4 flex items-center gap-2">
//         <input
//           type="checkbox"
//           id="primary"
//           checked={isPrimary}
//           onChange={(e) => handlePrimaryChange(e.target.checked)}
//           className="w-4 h-4 accent-[#3D85C6] cursor-pointer"
//         />
//         <Label
//           htmlFor="primary"
//           className="text-sm font-medium text-[#3D85C6] cursor-pointer flex items-center gap-1"
//         >
//           Mark as Primary
//           {isPrimary && <CheckCircle className="w-4 h-4 text-green-600" />}
//         </Label>
//       </div>

//       {showVerifiedModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg w-[90%] max-w-md text-center">
//             <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
//             <h3 className="text-lg font-bold mb-2 text-[#3D85C6]">
//               Marked as Primary!
//             </h3>

//             <button
//               className="mt-4 px-4 py-2 bg-[#3D85C6] text-white rounded"
//               onClick={() => setShowVerifiedModal(false)}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactDetails;


import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ReactCountryFlag from "react-country-flag";
import { toast } from "react-toastify";
import { CheckCircle } from "lucide-react";

const countries = [
  { code: "IN", name: "India", dial_code: "+91" },
  { code: "US", name: "United States", dial_code: "+1" },
  { code: "GB", name: "United Kingdom", dial_code: "+44" },
  { code: "CA", name: "Canada", dial_code: "+1" },
  { code: "AU", name: "Australia", dial_code: "+61" },
  { code: "SG", name: "Singapore", dial_code: "+65" },
  { code: "JP", name: "Japan", dial_code: "+81" },
  { code: "FR", name: "France", dial_code: "+33" },
  { code: "DE", name: "Germany", dial_code: "+49" },
  { code: "CN", name: "China", dial_code: "+86" },
  { code: "BR", name: "Brazil", dial_code: "+55" },
  { code: "ZA", name: "South Africa", dial_code: "+27" },
  { code: "AE", name: "UAE", dial_code: "+971" },
  { code: "SA", name: "Saudi Arabia", dial_code: "+966" },
  { code: "PK", name: "Pakistan", dial_code: "+92" },
  { code: "BD", name: "Bangladesh", dial_code: "+880" },
  { code: "LK", name: "Sri Lanka", dial_code: "+94" },
  { code: "NP", name: "Nepal", dial_code: "+977" },
  { code: "TH", name: "Thailand", dial_code: "+66" },
];

const ContactDetails = ({ setContactData }: { setContactData: any }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPrimary, setIsPrimary] = useState(false);
  const [showVerifiedModal, setShowVerifiedModal] = useState(false);

  useEffect(() => {
    setContactData((prev: any) => ({
      ...prev,
      Email: email,
      ContactNo: mobileNumber,
      Primary: isPrimary,
    }));
  }, [email, mobileNumber, isPrimary]);

  const handlePrimaryChange = (checked: boolean) => {
    if (!email) {
      toast.error("Email ID is required before setting as Primary");
      return;
    }

    if (checked) {
      setIsPrimary(true);
      setContactData({
        Email: email,
        ContactNo: mobileNumber,
        Primary: true,
      });
      setShowVerifiedModal(true);
    } else {
      setIsPrimary(false);
      setContactData({
        Email: email,
        ContactNo: mobileNumber,
        Primary: false,
      });
    }
  };

  return (
    <div className=" rounded-lg border border-gray-300 p-6">
      <div className="mb-4">
        <h2 className="text-xl text-[#3D85C6] font-bold">Contact Details</h2>
        <p className="text-sm text-gray-600">We'll send your ticket here</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email Input */}
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-[#3D85C6]">
            Email Id*
          </Label>
          <Input
            id="email"
            placeholder="Type here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 border border-gray-400 focus:border-[#3D85C6]"
          />
        </div>

        {/* Mobile Number with Country Selector */}
        <div>
          <Label htmlFor="mobile" className="text-sm font-medium text-[#3D85C6]">
            Mobile Number*
          </Label>

          <div className="flex mt-1 border border-gray-400 rounded relative overflow-visible">
            {/* Country Selector */}
            <div className="relative">
              <div
                className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 cursor-pointer border-r border-gray-300"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <ReactCountryFlag
                  countryCode={selectedCountry.code}
                  svg
                  style={{ width: "1.5em", height: "1.5em" }}
                />
                <span className="text-sm font-medium text-gray-700">
                  {selectedCountry.name}
                </span>
                <span className="text-gray-500 text-sm">
                  {selectedCountry.dial_code}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Dropdown */}
              {showDropdown && (
                <div
                  className="absolute z-[9999] bg-white border border-gray-300 shadow-lg max-h-56 overflow-y-auto w-64 mt-1 rounded-md"
                >
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      className="flex items-center justify-between gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCountry(country);
                        setShowDropdown(false);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode={country.code}
                          svg
                          style={{ width: "1.3em", height: "1.3em" }}
                        />
                        <span className="text-sm">{country.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {country.dial_code}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Input */}
            <Input
              id="mobile"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
                setContactData({
                  Email: email,
                  ContactNo: e.target.value,
                  Primary: isPrimary,
                });
              }}
              className="flex-1 border-none focus:ring-0 focus:border-none px-3"
            />
          </div>
        </div>
      </div>

      {/* Mark as Primary */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          id="primary"
          checked={isPrimary}
          onChange={(e) => handlePrimaryChange(e.target.checked)}
          className="w-4 h-4 accent-[#3D85C6] cursor-pointer"
        />
        <Label
          htmlFor="primary"
          className="text-sm font-medium text-[#3D85C6] cursor-pointer flex items-center gap-1"
        >
          Mark as Primary
          {isPrimary && <CheckCircle className="w-4 h-4 text-green-600" />}
        </Label>
      </div>

      {/* Verified Modal */}
      {showVerifiedModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md text-center">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-[#3D85C6]">
              Marked as Primary!
            </h3>

            <button
              className="mt-4 px-4 py-2 bg-[#3D85C6] text-white rounded"
              onClick={() => setShowVerifiedModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;

