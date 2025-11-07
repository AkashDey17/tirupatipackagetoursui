// import { ETicket } from "@/components/Ticket/ETicket";

// const Ticket = () => {
//   return (
//     <div style={{minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px'}}>
//       <ETicket />
//     </div>
//   );
// };

// export default Ticket;

import { useLocation } from "react-router-dom";
import  ETicket  from "@/components/Ticket/ETicket";

const Ticket = () => {
  const { state } = useLocation();
  // const {
  //   totalPrice = 0,
  //   travellerData = [],
  //   contactData = {},
  //   gstData = {},
  //   tripData = {}
  // } = state || {};
  const { travellerData, contactData, gstData, totalPrice, tripData,travelDate,boardingPoint,
    droppingPoint,
    departureTime,
    arrivalTime, selectedSeats, duration, busType } = state || {};


  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", padding: "20px" }}>
      <ETicket
        totalPrice={totalPrice}
        travellerData={travellerData}
        contactData={contactData}
        gstData={gstData}
        
         tripData={{
         
          boardingPoint,
          droppingPoint,
          departureTime,
          arrivalTime,
           busType,
          duration,
          travelDate,
         
          selectedSeats,
        }}
      />
    </div>
  );
};

export default Ticket;
