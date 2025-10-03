// import React from "react";
// import tirupatiVideo from "@/assets/tirupati.mp4";
// import natGeoLogo from "@/assets/nat-geo.png"; // import your Nat Geo logo

// const ScrollVideo: React.FC = () => {
//   return (
//     <div
//       style={{
//         padding: "20px", // padding around container
//         display: "flex",
//         flexDirection: "column", // stack video and text vertically
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           width: "90%",
//           height: "500px", // you can adjust height
//           borderRadius: "20px", // rounded corners
//           overflow: "hidden", // important to apply radius to video
//           boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // optional shadow
//         }}
//       >
//         <video
//           src={tirupatiVideo}
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//         />
//       </div>

//       {/* Courtesy Text with Logo */}
//       <h3
//         style={{
//           marginTop: "12px",
//           fontSize: "16px",
//           fontWeight: "500",
//           color: "#4a4a4a",
//           fontFamily: "Inter, sans-serif",
//           display: "flex",
//           alignItems: "center",
//           gap: "6px", // space between logo and text
//         }}
//       >
//         Courtesy:
//         <span
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "4px",
//             fontSize: "16px",
//             fontWeight: "500",
//             color: "#000",
//           }}
//         >
//           <img
//             src={natGeoLogo}
//             alt="Nat Geo"
//             style={{
//               width: "12em", // same size as text
//               height: "12em",
//               objectFit: "contain",
//             }}
//           />
        
//         </span>
//       </h3>
//     </div>
//   );
// };

// export default ScrollVideo;



import React from "react";
import natGeoLogo from "@/assets/nat-geo.png"; // import your Nat Geo logo

const ScrollVideo: React.FC = () => {
  return (
    <div
      style={{
        padding: "20px", // padding around container
        display: "flex",
        flexDirection: "column", // stack video and text vertically
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "500px", // you can adjust height
          borderRadius: "20px", // rounded corners
          overflow: "hidden", // important to apply radius to video
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // optional shadow
        }}
      >
        {/* YouTube Embed */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Brv9gRYyJCA?autoplay=1&mute=1&loop=1&playlist=Brv9gRYyJCA"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Courtesy Text with Logo */}
      <h3
        style={{
          marginTop: "12px",
          fontSize: "16px",
          fontWeight: "500",
          color: "#4a4a4a",
          fontFamily: "Inter, sans-serif",
          display: "flex",
          alignItems: "center",
          gap: "6px", // space between logo and text
        }}
      >
        Courtesy:
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#000",
          }}
        >
          <img
            src={natGeoLogo}
            alt="Nat Geo"
            style={{
              width: "12em", // same size as text
              height: "12em",
              objectFit: "contain",
            }}
          />
        </span>
      </h3>
    </div>
  );
};

export default ScrollVideo;
