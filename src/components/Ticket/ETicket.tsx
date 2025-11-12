// import React, { useRef, useEffect } from "react";
// import luggageImg from "@/assets/luggage.jpg";
// import busImg from "@/assets/bus1.jpg";
// import dndImg from "@/assets/dnd.jpg";
// import hazardousImg from "@/assets/danger.jpg";
// import ticketImg from "@/assets/ticket.jpg";
// import alcoholImg from "@/assets/alchohol.png";
// import logoImg from "@/assets/logo.png";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const ETicket = ({ travellerData, contactData, gstData, totalPrice, tripData, packageId, from }) => {
//   const {
//     boardingPoint = {},
//     droppingPoint = {},
//     travelDate = "",
//     departureTime = "",
//     arrivalTime = "",
//     coachType = "",
//     busNumber = "",
//     operator = "",
//     duration,
//     selectedSeats,
//     busType
//   } = tripData || {};

//   const ticketRef = useRef(null);
//   const navigate = useNavigate();
//   const passenger = travellerData?.[0] || {};
//   const passengerName = `${passenger.FirstName || ""} ${passenger.LastName || ""}`.trim() || "Passenger";

//   const formattedDate = travelDate
//     ? new Date(travelDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
//     : "";

//   useEffect(() => {
//     console.log("🎫 E-Ticket Mounted");
//     console.log("📦 Package ID:", packageId);
//     console.log("📦 from ID:", from);
//     return () => localStorage.removeItem("tripData");
//   }, [packageId]);

//   const handleDownloadPDF = async () => {
//     if (!ticketRef.current) return;
//     const element = ticketRef.current;
//     const images = element.querySelectorAll("img");

//     await Promise.all(
//       Array.from(images).map(img => new Promise(resolve => {
//         if (img.complete) resolve(true);
//         else img.onload = img.onerror = () => resolve(true);
//       }))
//     );

//     await new Promise(r => setTimeout(r, 500));

//     const canvas = await html2canvas(element, {
//       scale: 3,
//       useCORS: true,
//       windowWidth: element.scrollWidth,
//       windowHeight: element.scrollHeight
//     });

//     const imgData = canvas.toDataURL("image/png");
//     const pdfWidth = 210;
//     const imgHeight = (canvas.height * pdfWidth) / canvas.width;
//     const pdf = new jsPDF("p", "mm", [imgHeight + 10, pdfWidth]); // ✅ Fix blank space

//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
//     pdf.setPage(1);
//     pdf.save(`${passengerName.replace(/\s+/g, "_")}_ticket.pdf`);
//   };
// const handleEmailTicket = async () => {
//     try {
//       const response = await fetch("https://api.tirupatipackagetours.com/api/send-ticket", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           travellerData,
//           contactData,
//           gstData,
//           totalPrice,
//           tripData,
//         }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert("✅ Ticket has been emailed successfully!");
//       } else {
//         alert("❌ Failed to send ticket email. Please try again.");
//       }
//     } catch (error) {
//       console.error("Email sending error:", error);
//       alert("Error sending ticket email.");
//     }
//   };
//   return (
//     <>
//       <style>{`
//   /* Base ticket styles */
//   .eticket-container { max-width: 900px; margin: 0 auto; background-color: #ffffff; border: 1px solid #d0d0d0; font-family: Arial, sans-serif; line-height: 1.3; }
//   .eticket-header-notice { font-size: 14px; color: #dc2626; padding: 12px 20px; border-bottom: 1px solid #d0d0d0; text-align: left; }
//   .eticket-main-header { display: flex; justify-content: space-between; align-items: flex-start; padding: 20px; border-bottom: 1px solid #d0d0d0; flex-wrap: wrap; }
//   .eticket-title { font-size: 28px; font-weight: bold; color: #000000; margin: 0; line-height: 1; }
//   .eticket-help-section { text-align: right; font-size: 14px; margin-top: 10px; }
//   .eticket-trip-header { display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid #d0d0d0; flex-wrap: wrap; }
//   .eticket-trip-title { font-size: 18px; font-weight: bold; margin: 0 0 8px 0; }
//   .eticket-ticket-number { font-size: 14px; text-align: right; }
//   .eticket-journey-details { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; padding: 20px; border-bottom: 1px solid #d0d0d0; }
//   .eticket-detail-label { font-weight: bold; margin: 0 0 4px 0; }
//   .eticket-detail-value { margin: 0; }

//   .eticket-boarding-section, .eticket-dropping-section { display: grid; grid-template-columns: 1fr; gap: 10px; padding: 20px; border-bottom: 1px solid #d0d0d0; }
//   .eticket-section-title { font-weight: bold; margin: 0; }
//   .eticket-location-name { font-weight: bold; margin: 0 0 4px 0; }
//   .eticket-location-text, .eticket-address-text { margin: 0; }

//   .eticket-passenger-payment { display: grid; grid-template-columns: 1fr; gap: 15px; padding: 20px; border-bottom: 1px solid #d0d0d0; }
//   .eticket-passenger-name { font-weight: bold; margin: 0 0 6px 0; }
//   .eticket-passenger-info { margin: 0 0 6px 0; }

//   .eticket-guidelines { padding: 20px; }
//   .eticket-guidelines-title { font-size: 20px; font-weight: bold; text-align: center; margin: 0 0 20px 0; }
//   .eticket-restrictions-title { font-weight: bold; margin: 0 0 12px 0; text-decoration: underline; text-align: center; }
//   .eticket-restrictions-grid { display: grid; grid-template-columns: 1fr; gap: 15px; margin-bottom: 20px; }
//   .eticket-restriction-item { text-align: center; display: flex; flex-direction: column; align-items: center; background-color: #f6f6ee; padding: 12px; border-radius: 10px; }
//   .eticket-restriction-img { width: 100px; height: 100px; object-fit: contain; margin-bottom: 10px; }
//   .eticket-restriction-text { text-align: center; margin: 0; line-height: 1.3; font-size: 14px; }
//   .eticket-restriction-bold { font-weight: bold; }

//   .eticket-terms-title { font-weight: bold; margin: 20px 0 12px 0; text-decoration: underline; }
//   .eticket-terms-list { padding-left: 20px; margin: 0; }
//   .eticket-terms-item { margin-bottom: 6px; line-height: 1.4; font-size: 14px; }

//   /* ✅ Responsive adjustments */
//   @media (max-width: 639px) {
//     .eticket-container { margin-top: 70px; } /* Prevent overlap with Back button */
//     .back-button-container {
//       position: fixed !important;
//       top: 10px !important;
//       left: 10px !important;
//       z-index: 9999;
//     }
//   }

//   @media (min-width: 640px) {
//     .eticket-journey-details { grid-template-columns: repeat(2, 1fr); }
//     .eticket-restrictions-grid { grid-template-columns: repeat(2, 1fr); }
//     .eticket-passenger-payment { grid-template-columns: repeat(2, 1fr); }
//   }
//   @media (min-width: 1024px) {
//     .eticket-journey-details { grid-template-columns: repeat(4, 1fr); }
//     .eticket-restrictions-grid { grid-template-columns: repeat(3, 1fr); }
//     .eticket-passenger-payment { grid-template-columns: repeat(2, 1fr); }
//   }
// `}</style>

//       {/* ✅ Back Button */}
//       <div className="back-button-container" style={{ position: "fixed", top: 20, left: 20, zIndex: 9999 }}>
//         <button
//           onClick={() =>
//             navigate("/new-bus-booking", {
//               state: { from, packageId },
//             })
//           }
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "8px",
//             backgroundColor: "#3D85C6",
//             color: "#fff",
//             border: "none",
//             padding: "8px 14px",
//             borderRadius: "8px",
//             fontSize: "14px",
//             cursor: "pointer",
//           }}
//         >
//           <ArrowLeft size={18} /> Back to Bus Booking
//         </button>
//       </div>

//       {/* Ticket */}
//       <div className="eticket-container" ref={ticketRef}>
//         <div className="eticket-header-notice">
//           Cancellation and refund are not applicable for Tirupati trips/packages.
//         </div>

//         <div className="eticket-main-header">
//           <div>
//             <h1 className="eticket-title">eTICKET</h1>
//             <img src={logoImg} alt="Logo" style={{ height: "150px", marginBottom: "6px" }} />
//           </div>
//           <div className="eticket-help-section">
//             <p className="eticket-help-title">Need help with your trip?</p>
//             <p className="eticket-help-phone">Ph. No.: +91 9731312275,<br /> +91 8197882511</p>
//             <p className="eticket-help-link">Write to us here</p>
//           </div>
//         </div>

//         {/* Trip Header */}
//         <div className="eticket-trip-header">
//           <h2 className="eticket-trip-title">{operator || "Bus"} → Trip on {formattedDate}</h2>
//           <div className="eticket-ticket-number">
//             Ticket no: <strong>TM{Math.floor(Math.random() * 9999999999)}</strong>
//           </div>
//         </div>

//         {/* Journey Details */}
//         <div className="eticket-journey-details">
//           <div>
//             <p className="eticket-detail-label">Coach Type</p>
//             <p className="eticket-detail-value">{busType}</p>
//           </div>
//           <div>
//             <p className="eticket-detail-label">Reporting time</p>
//             <p className="eticket-detail-value">{departureTime}</p>
//           </div>
//           <div>
//             <p className="eticket-detail-label">Departure time</p>
//             <p className="eticket-detail-value">{departureTime}</p>
//           </div>
//           <div>
//             <p className="eticket-detail-label">Passengers</p>
//             <p className="eticket-detail-value">{travellerData?.length}</p>
//           </div>
//         </div>

//         {/* Boarding */}
//         <div className="eticket-boarding-section">
//           <p className="eticket-section-title">Boarding Point</p>
//           <p className="eticket-location-name">{boardingPoint?.PointName}</p>
//           <p className="eticket-location-text">{boardingPoint?.Landmark}</p>
//           <p className="eticket-address-text">{boardingPoint?.Address}</p>
//         </div>

//         {/* Dropping */}
//         <div className="eticket-dropping-section">
//           <p className="eticket-section-title">Dropping Point</p>
//           <p className="eticket-location-name">{droppingPoint?.PointName}</p>
//           <p className="eticket-location-text">{droppingPoint?.Landmark}</p>
//           <p className="eticket-address-text">{droppingPoint?.Address}</p>
//         </div>

//         {/* Passenger & Payment */}
//         <div className="eticket-passenger-payment">
//           {travellerData?.map((p, index) => {
//             const name = `${p.FirstName || ""} ${p.LastName || ""}`.trim() || "Passenger";
//             return (
//               <div key={index}>
//                 <p className="eticket-passenger-name">{name}</p>
//                 <p className="eticket-passenger-info">Age: {p.Age || ""}</p>
//                 <p className="eticket-passenger-info">Gender: {p.Gender || "N/A"}</p>
//                 <p className="eticket-passenger-info">
//                   Seat No: <strong>{p.SeatNo || p.SeatNumber || "N/A"}</strong>
//                 </p>
//               </div>
//             );
//           })}
//           <div>
//             <p className="eticket-passenger-info">Email: {contactData?.Email}</p>
//             <p className="eticket-passenger-info">Phone: {contactData?.ContactNo}</p>
//             <p className="eticket-payment-title">Payment Details</p>
//             <p>Amount Paid: Rs. {totalPrice}</p>
//           </div>
//         </div>

//         {/* Guidelines */}
//         <div className="eticket-guidelines">
//           <h3 className="eticket-guidelines-title">Passenger Guidelines</h3>
//           <h4 className="eticket-restrictions-title">
//             Travel Restrictions - Important Don'ts During Travel
//           </h4>

//           {/* First row */}
//           <div className="eticket-restrictions-grid">
//             <div className="eticket-restriction-item">
//               <img src={ticketImg} alt="Ticket" className="eticket-restriction-img" />
//               <p className="eticket-restriction-text">
//                 Don't board without a <span className="eticket-restriction-bold">valid ticket and ID</span> proof.
//               </p>
//             </div>
//             <div className="eticket-restriction-item">
//               <img src={hazardousImg} alt="Hazardous" className="eticket-restriction-img" />
//               <p className="eticket-restriction-text">
//                 Don't carry hazardous, <span className="eticket-restriction-bold">illegal, or flammable</span> items.
//               </p>
//             </div>
//             <div className="eticket-restriction-item">
//               <img src={alcoholImg} alt="Alcohol" className="eticket-restriction-img" />
//               <p className="eticket-restriction-text">
//                 Don't smoke, <span className="eticket-restriction-bold">consume alcohol</span> or use drugs on board.
//               </p>
//             </div>
//           </div>

//           {/* Second row */}
//           <div className="eticket-restrictions-grid">
//             <div className="eticket-restriction-item">
//               <img src={dndImg} alt="Do Not Disturb" className="eticket-restriction-img" />
//               <p className="eticket-restriction-text">
//                 Don't cause disturbance <span className="eticket-restriction-bold">or inconvenience</span> to fellow passengers.
//               </p>
//             </div>
//             <div className="eticket-restriction-item">
//               <img src={luggageImg} alt="Luggage" className="eticket-restriction-img" />
//               <p className="eticket-restriction-text">
//                 Don't leave valuables <span className="eticket-restriction-bold">unattended or in luggage</span> storage.
//               </p>
//             </div>
//             <div className="eticket-restriction-item">
//               <img src={busImg} alt="Bus" className="eticket-restriction-img" />
//               <p className="eticket-restriction-text">
//                 Don't damage bus <span className="eticket-restriction-bold">property or package</span> facilities.
//               </p>
//             </div>
//           </div>

//           {/* Terms */}
//           <h4 className="eticket-terms-title">Terms and Conditions</h4>
//           <ul className="eticket-terms-list">
//             <li className="eticket-terms-item">• Passenger must carry a valid government photo ID matching the ticket name.</li>
//             <li className="eticket-terms-item">• Report at the boarding point at least 30 minutes before departure. Late arrival may lead to seat cancellation without refund.</li>
//             <li className="eticket-terms-item">• Ticket is valid only for the passenger, date, and time mentioned. Non-transferable.</li>
//             <li className="eticket-terms-item">• Cancellations and refunds are as per operator policy. Eligible refunds will be processed within 7–10 working days.</li>
//             <li className="eticket-terms-item">• Rescheduling is subject to availability and fare difference, if any.</li>
//             <li className="eticket-terms-item">• Passenger must follow all safety protocols while on board.</li>
//             <li className="eticket-terms-item">• All personal belongings are the responsibility of the passenger. The operator is not liable for lost items.</li>
//             <li className="eticket-terms-item">• In case of delays due to weather, traffic, or other unavoidable circumstances, the operator’s decision is final.</li>
//             <li className="eticket-terms-item">• Children below 5 years may require a separate ticket depending on seat allocation.</li>
//             <li className="eticket-terms-item">• Passengers are expected to maintain decorum and follow instructions by staff during the journey.</li>
//           </ul>

//         </div>
//       </div>

//       {/* Download Button */}
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button
//           onClick={handleDownloadPDF}
//           style={{
//             backgroundColor: "#3D85C6",
//             color: "#fff",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: "8px",
//             fontSize: "16px",
//             cursor: "pointer",
//           }}
//         >
//           Download Ticket PDF
//         </button>
//         <button
//           onClick={handleEmailTicket}
//           style={{
//             backgroundColor: "#22c55e",
//             color: "#fff",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: "8px",
//             fontSize: "16px",
//             cursor: "pointer",
//             marginLeft: "10px"
//           }}
//         >
//           Email Ticket
//         </button>
//       </div>
//     </>
//   );
// };

// export default ETicket;



import React, { useRef, useEffect } from "react";
import luggageImg from "@/assets/luggage.jpg";
import busImg from "@/assets/bus1.jpg";
import dndImg from "@/assets/dnd.jpg";
import hazardousImg from "@/assets/danger.jpg";
import ticketImg from "@/assets/ticket.jpg";
import alcoholImg from "@/assets/alchohol.png";
import logoImg from "@/assets/logo.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ETicket = ({ travellerData, contactData, gstData, totalPrice, tripData, packageId, from }) => {
  const {
    boardingPoint = {},
    droppingPoint = {},
    travelDate = "",
    departureTime = "",
    arrivalTime = "",
    coachType = "",
    busNumber = "",
    operator = "",
    duration,
    selectedSeats,
    busType
  } = tripData || {};

  const ticketRef = useRef(null);
  const navigate = useNavigate();
  const passenger = travellerData?.[0] || {};
  const passengerName = `${passenger.FirstName || ""} ${passenger.LastName || ""}`.trim() || "Passenger";

  const formattedDate = travelDate
    ? new Date(travelDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
    : "";
  const handleEmailTicket = async () => {
    try {
      const response = await fetch("https://api.tirupatipackagetours.com/api/send-ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          travellerData,
          contactData,
          gstData,
          totalPrice,
          tripData,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("✅ Ticket has been emailed successfully!");
      } else {
        alert("❌ Failed to send ticket email. Please try again.");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Error sending ticket email.");
    }
  };
  useEffect(() => {
    console.log("🎫 E-Ticket Mounted");
    console.log("📦 Package ID:", packageId);
    console.log("📦 from ID:", from);
    return () => {
      localStorage.removeItem("tripData");
    };
  }, [packageId, from]);

  const handleDownloadPDF = async () => {
    if (!ticketRef.current) return;
    const element = ticketRef.current;
    const images = element.querySelectorAll("img");
    await Promise.all(
      Array.from(images).map(img => new Promise(resolve => {
        if (img.complete) resolve(true);
        else img.onload = img.onerror = () => resolve(true);
      }))
    );
    await new Promise(r => setTimeout(r, 500));
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight
    });
    const imgData = canvas.toDataURL("image/png");
    const pdfWidth = 210;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;
    const pdf = new jsPDF("p", "mm", [imgHeight + 10, pdfWidth]);
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
    pdf.setPage(1);
    pdf.save(`${passengerName.replace(/\s+/g, "_")}_ticket.pdf`);
  };

  return (
    <>
      <style>{`
        .eticket-container {
          max-width: 900px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 1px solid #d0d0d0;
          font-family: Arial, sans-serif;
          line-height: 1.3;
        }
        .eticket-header-notice {
          font-size: 14px;
          color: #dc2626;
          padding: 12px 20px;
          border-bottom: 1px solid #d0d0d0;
          text-align: left;
        }
        .eticket-main-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid #d0d0d0;
          flex-wrap: wrap;
           padding: 15px
        }
        .eticket-title {
          font-size: 28px;
          font-weight: bold;
          color: #000000;
          margin: 0;
          line-height: 1;
        }
        .eticket-help-section {
          text-align: right;
          font-size: 14px;
          margin-top: 10px;
        }
        .eticket-trip-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #d0d0d0;
          flex-wrap: wrap;
        }
        .eticket-trip-title {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 8px 0;
        }
        .eticket-ticket-number {
          font-size: 14px;
          text-align: right;
        }
        .eticket-journey-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          padding: 20px;
          border-bottom: 1px solid #d0d0d0;
        }
        .eticket-detail-label {
          font-weight: bold;
          margin: 0 0 4px 0;
        }
        .eticket-detail-value {
          margin: 0;
        }

        /* Boarding & Dropping aligned in one row */
        .eticket-boarding-dropping {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px;
          border-bottom: 1px solid #d0d0d0;
          gap: 50px;
        }
        .eticket-point {
          flex: 1;
        }
        .eticket-section-title {
          font-weight: bold;
          margin: 0 0 6px 0;
          
        }
        .eticket-location-name,
        .eticket-location-text,
        .eticket-address-text {
          margin: 2px 0;
        }

        /* Passenger Details Table with only underline per row */
        .passenger-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 15px;
        }
        .passenger-table th {
          padding: 8px 10px;
          text-align: center;
          font-size: 14px;
          background-color: #f2f2f2;
          font-weight: bold;
          border: none;
        }
        .passenger-table td {
          padding: 8px 10px;
          text-align: center;
          font-size: 14px;
          border: none;
          border-bottom: 1px solid #d0d0d0;
        }
        .passenger-table tbody tr:last-child td {
          border-bottom: none;
        }

        .contact-payment {
        display: flex;
    justify-content: center;
    font-size: 14px;
    margin-top: 10px;
    border-top: 1px solid #d0d0d0;
    padding-top: 10px;
    /* align-items: center; */
        gap: 100px;
        border-bottom: 1px solid lightgrey;
         padding: 20px;
        }

        .eticket-guidelines {
          padding: 20px;
        }
        .eticket-guidelines-title {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin: 0 0 20px 0;
        }
        .eticket-restrictions-title {
          font-weight: bold;
          margin: 0 0 12px 0;
          text-decoration: underline;
          text-align: center;
        }
        .eticket-restrictions-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
          margin-bottom: 20px;
        }
        .eticket-restriction-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f6f6ee;
          padding: 12px;
          border-radius: 10px;
        }
        .eticket-restriction-img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          margin-bottom: 10px;
        }
        .eticket-restriction-text {
          text-align: center;
          margin: 0;
          line-height: 1.3;
          font-size: 14px;
        }
        .eticket-restriction-bold {
          font-weight: bold;
        }
        .eticket-terms-title {
          font-weight: bold;
          margin: 20px 0 12px 0;
          text-decoration: underline;
        }
        .eticket-terms-list {
          padding-left: 20px;
          margin: 0;
        }
        .eticket-terms-item {
          margin-bottom: 6px;
          line-height: 1.4;
          font-size: 14px;
          
        }

        .eticket-main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
     padding: 15px
  border-bottom: 1px solid #d0d0d0;
}

.logo-and-title {
  display: flex;
  align-items: center;
  gap: 12px;  /* space between logo & title */
}

.eticket-logo {
  height: 100px;  /* adjust size as needed */
  /* optional: width auto, margin, etc */
  border-right: 1px solid black;
}

.eticket-title {
  font-size: 28px;
  font-weight: bold;
  margin: 0;
}




        .eticket-passenger-payment h4 {
  margin-left: 10px;
    padding: 10px;
}
        @media (min-width: 640px) {
          .eticket-journey-details { grid-template-columns: repeat(2, 1fr); }
          .eticket-restrictions-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .eticket-journey-details { grid-template-columns: repeat(4, 1fr); }
          .eticket-restrictions-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* MOBILE SPECIFIC STYLES */

        .eticket-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px; /* 👈 adds space between buttons */
  margin-top: 20px;
}

.ticket-btn {
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.download-btn {
  background-color: #3D85C6;
}

.email-btn {
  background-color: #22c55e;
}

.ticket-btn:hover {
  opacity: 0.9;
}
@media (max-width: 639px) {
  .eticket-container {
    padding: 10px;
    font-size: 14px;
     padding-bottom: 100px; /* Add breathing room for buttons */
    overflow: visible !important;
  }

.eticket-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px 10px;
  }

  .eticket-buttons button {
    width: 100%;
    font-size: 15px;
    padding: 12px;
  }
  .payment-details {
    font-size: 15px; /* smaller for mobile */
    font-weight: bold;
  }

    body, html {
    overflow-y: auto !important;
  }

  .payment-details strong {
    font-size: 16px;
    
  }

  .eticket-header-notice {
    font-size: 10px;
      }
  .eticket-main-header {
    align-items: flex-start;
    gap: 10px;
  }

  .logo-and-title {
    gap: 6px;
    margin-left: -24px;
  }

  .eticket-logo {
    height: 80px; 
           border-right: 1px solid lightgray;
  }

  .eticket-title {
    font-size: 22px;
    text-align: center;
  }

  .eticket-help-section {
    text-align: right;
        font-size: 12px;
  }

  .eticket-trip-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 10px;
  }

  .eticket-ticket-number {
    text-align: left;
    font-size: 12px;
  }

  .eticket-journey-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    padding: 10px;
  }

  .eticket-boarding-dropping {
    gap: 10px;
    padding: 10px;
  }

  .eticket-passenger-payment h4 {
    font-size: 16px;
    margin-left: 10px;
    padding: 5px 0;
  }

  .passenger-table th,
  .passenger-table td {
    font-size: 12px;
    padding: 6px 4px;
  }

.contact-payment {
    display: flex;
    flex-direction: column; /* stack vertically */
    align-items: flex-start;
    gap: 6px; /* reduce space between lines */
    padding: 10px;
    border-bottom: 1px solid lightgrey;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

    .contact-payment > div {
    width: 100%; /* each section takes full width */
    max-width: 100%;
    white-space: normal; /* allow wrapping */
    word-break: break-word; /* breaks long emails */
  }

  .eticket-guidelines {
    padding: 10px;
    
  }

  .eticket-guidelines-title {
    font-size: 18px;
     margin-top: 10px;
    
  }

  .eticket-restrictions-title {
    font-size: 16px;
    
  }

.eticket-restrictions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 boxes per row */
  gap: 10px;                             /* spacing between boxes */
  padding: 5px 0;
}
.eticket-restriction-item {
  width: 100%;          /* take full width of grid cell */
  padding: 10px;
}
 .eticket-restriction-img {
  width: 70px;          /* adjust image size for mobile */
  height: 70px;
  object-fit: contain;
  margin-bottom: 6px;
}



.eticket-restriction-text {
  font-size: 12px;      /* adjust text size */
}

  .eticket-terms-title {
    font-size: 14px;
  }

  .eticket-terms-item {
    font-size: 12px;
  }

  button {
    width: 100%;
    padding: 10px;
    font-size: 14px;
  }
}

      `}</style>

      {/* Back Button */}
      <div style={{ position: "fixed", top: 20, left: 20, zIndex: 9999 }}>
        <button
          onClick={() => navigate("/new-bus-booking", { state: { from, packageId } })}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#3D85C6",
            color: "#fff",
            border: "none",
            padding: "8px 14px",
            borderRadius: "8px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={18} /> Back to Bus Booking
        </button>
      </div>

      <div className="eticket-container" ref={ticketRef}>
        <div className="eticket-header-notice">
          Cancellation and refund are not applicable for Tirupati trips/packages.
        </div>

        

        <div className="eticket-main-header">
          <div className="logo-and-title">
            <img src={logoImg} alt="Logo" className="eticket-logo" />
            <h1 className="eticket-title">eTICKET</h1>
          </div>

          <div className="eticket-help-section">
            <p>Need help with your trip?</p>
            <p>Ph. No.: +91 9731312275,<br />+91 8197882511</p>
            <p>Write to us here</p>
          </div>
        </div>


        <div className="eticket-trip-header">
          <h2 className="eticket-trip-title">{operator || "Bus"} → Trip on {formattedDate}</h2>
          <div className="eticket-ticket-number">
            Ticket no: <strong>TM{Math.floor(Math.random() * 9999999999)}</strong>
          </div>
        </div>

        <div className="eticket-journey-details">
          <div>
            <p className="eticket-detail-label">Coach Type</p>
            <p className="eticket-detail-value">{busType}</p>
          </div>
          <div>
            <p className="eticket-detail-label">Reporting time</p>
            <p className="eticket-detail-value">{departureTime}</p>
          </div>
          <div>
            <p className="eticket-detail-label">Departure time</p>
            <p className="eticket-detail-value">{departureTime}</p>
          </div>
          <div>
            <p className="eticket-detail-label">Passengers</p>
            <p className="eticket-detail-value">{travellerData?.length}</p>
          </div>
        </div>

        <div className="eticket-boarding-dropping">
          <div className="eticket-point">
            <p className="eticket-section-title">Boarding Point</p>
            <p className="eticket-location-name">{boardingPoint?.PointName}</p>
            <p className="eticket-location-text">{boardingPoint?.Landmark}</p>
            <p className="eticket-address-text">{boardingPoint?.Address}</p>
          </div>
          <div className="eticket-point">
            <p className="eticket-section-title">Dropping Point</p>
            <p className="eticket-location-name">{droppingPoint?.PointName}</p>
            <p className="eticket-location-text">{droppingPoint?.Landmark}</p>
            <p className="eticket-address-text">{droppingPoint?.Address}</p>
          </div>
        </div>

        <div className="eticket-passenger-payment">
          <h4>Passenger Details</h4>
          <table className="passenger-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Seat No</th>
              </tr>
            </thead>
            <tbody>
              {travellerData?.map((p, idx) => (
                <tr key={idx}>
                  <td>{`${p.FirstName || ""} ${p.LastName || ""}`.trim()}</td>
                  <td>{p.Age || ""}</td>
                  <td>{p.Gender || ""}</td>
                  <td><strong>{p.SeatNo || p.SeatNumber || ""}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="contact-payment">
            <div><b>Email:</b> {contactData?.Email}</div>
            <div><b>Phone:</b> {contactData?.ContactNo}</div>
            { }
            <div className="payment-details">
              Payment Details:{" "}
              <strong style={{ color: "green" }}>
                Amount Paid: Rs. {totalPrice}
              </strong>
            </div>


          </div>
        </div>

        <div className="eticket-guidelines">
          <h3 className="eticket-guidelines-title">Passenger Guidelines</h3>
          <h4 className="eticket-restrictions-title">Travel Restrictions - Important Don’ts During Travel</h4>
          <div className="eticket-restrictions-grid">
            <div className="eticket-restriction-item">
              <img src={ticketImg} alt="Ticket" className="eticket-restriction-img" />
              <p className="eticket-restriction-text">
                Don’t board without a <span className="eticket-restriction-bold">valid ticket and ID</span> proof.
              </p>
            </div>
            <div className="eticket-restriction-item">
              <img src={hazardousImg} alt="Hazardous" className="eticket-restriction-img" />
              <p className="eticket-restriction-text">
                Don’t carry hazardous, <span className="eticket-restriction-bold">illegal, or flammable</span> items.
              </p>
            </div>
            <div className="eticket-restriction-item">
              <img src={alcoholImg} alt="Alcohol" className="eticket-restriction-img" />
              <p className="eticket-restriction-text">
                Don’t smoke, <span className="eticket-restriction-bold">consume alcohol</span> or use drugs on board.
              </p>
            </div>
            <div className="eticket-restriction-item">
              <img src={dndImg} alt="Do Not Disturb" className="eticket-restriction-img" />
              <p className="eticket-restriction-text">
                Don’t cause disturbance <span className="eticket-restriction-bold">or inconvenience</span> to fellow passengers.
              </p>
            </div>
            <div className="eticket-restriction-item">
              <img src={luggageImg} alt="Luggage" className="eticket-restriction-img" />
              <p className="eticket-restriction-text">
                Don’t leave valuables <span className="eticket-restriction-bold">unattended or in luggage</span> storage.
              </p>
            </div>
            <div className="eticket-restriction-item">
              <img src={busImg} alt="Bus" className="eticket-restriction-img" />
              <p className="eticket-restriction-text">
                Don’t damage bus <span className="eticket-restriction-bold">property or package</span> facilities.
              </p>
            </div>
          </div>          <h4 className="eticket-terms-title">Terms and Conditions</h4>
          <ul className="eticket-terms-list">
            <li className="eticket-terms-item">• Passenger must carry a valid government photo ID matching the ticket name.</li>
            <li className="eticket-terms-item">• Report at the boarding point at least 30 minutes before departure. Late arrival may lead to seat cancellation without refund.</li>
            <li className="eticket-terms-item">• Ticket is valid only for the passenger, date, and time mentioned. Non-transferable.</li>
            <li className="eticket-terms-item">• Cancellations and refunds are as per operator policy. Eligible refunds will be processed within 7-10 working days.</li>
            <li className="eticket-terms-item">• Rescheduling is subject to availability and fare difference, if any.</li>
            {/* <li className="eticket-terms-item">• Passenger must follow all safety protocols while on board.</li>
            <li className="eticket-terms-item">• All personal belongings are the responsibility of the passenger. The operator is not liable for lost items.</li>
            <li className="eticket-terms-item">• In case of delays due to weather, traffic, or other unavoidable circumstances, the operator’s decision is final.</li>
            <li className="eticket-terms-item">• Children below 5 years may require a separate ticket depending on seat allocation.</li>
            <li className="eticket-terms-item">• Passengers are expected to maintain decorum and follow instructions by staff during the journey.</li> */}
          </ul>
        </div>
      </div>

<div className="eticket-buttons" style={{ textAlign: "center", marginTop: "20px" }}>
  <button
    onClick={handleDownloadPDF}
    className="ticket-btn download-btn"
  >
    Download Ticket PDF
  </button>

  <button
    onClick={handleEmailTicket}
    className="ticket-btn email-btn"
  >
    Email Ticket
  </button>
</div>

    </>
  );
};

export default ETicket;