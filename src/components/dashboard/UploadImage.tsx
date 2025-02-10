// "use client";
// import React, { useState } from "react";

// const UploadImage = () => {
//   const [image, setImage] = useState([]);
//   const [_, setUrl] = useState(null);

//   const uploadImage = (e: any) => {
//     const url = URL.createObjectURL(e.target.files[0]);
//     setUrl(url);
//     setImage([...image, url]);
//   };

//   const deleteImage = () => {
//     setImage([]);
//   };

//   return (
//     <div className="p-10">
//       <h2 className="pb-5 text-2xl font-inter font-semibold">Add Your image{" "}</h2>
//       <input multiple onChange={uploadImage} hidden type="file" id="connect" />
//       <label htmlFor="connect" className="bg-blue py-[10px] px-[20px] rounded text-white cursor-pointer">+
//       </label>
//       <div className="flex gap-5 flex-wrap items-center mb-5">
//         {image.map((item, index) => {
//           return (
//             <div className="w-max overflow-hidden group max-w-[500px] justify-center" key={index}>
//               <img className="max-w-100% w-full object-cover group-hover:scale-110 transition-all duration-300" src={item} alt="image"/>
//             </div>
//           );
//         })}
//       </div>
//       {image.length === 0 ? (
//         <p>No data found</p>
//       ) : (
//         <button onClick={deleteImage} className="bg-red-500 py-[10px] px-[20px] rounded text-white cursor-pointer"> Delete</button>
//       )}
//     </div>
//   );
// };

// export default UploadImage;
