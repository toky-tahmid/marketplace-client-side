/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

const TabsData = ({ newJobs }) => {
  let tabs = [
    { id: "Web Development", label: "Web Development" },
    { id: "Digital Marketing", label: "Digital Marketing" },
    { id: "Graphics Design", label: "Graphics Design" },
  ];

  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const CurrentTab = newJobs.filter((job) => job.category === activeTab);
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex space-x-1 mb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            className={`${activeTab === tab.id ? "" : "hover:text-[#91C96F]"}
                            relative rounded-full px-3 py-1.5 text-base font-medium black outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-green-400 mix-blend-multiply"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.1, duration: 0.8 }}
              />
            )}
            {tab.label}
          </button>
        ))}{" "}
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 ">
        {CurrentTab.map((job, index) => (
          <div key={index}>
            <div key={job._id}>
              <div className="relative  flex flex-col mt-6 text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="p-6">
                  <h5 className="block mb-2 text-xl antialiased font-bold leading-snug tracking-normal text-gray-900">
                    {job.title}
                  </h5>
                  <h5 className="text-xl antialiased font-semibold">
                    Date : {job.deadline}
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {job.description}
                  </p>
                </div>

                <button className="rounded-b-lg bg-purple-300 py-3 px-6 text-white text-sm font-bold uppercase hover:bg-purple-500 focus:outline-none focus:ring focus:ring-pink-200 transition duration-300">
                  Bid Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsData;

//   return (
//     <div className="flex flex-col items-center justify-center py-10">
//       <div className="flex space-x-1 mb-2">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => {
//               setActiveTab(tab.id);
//             }}
//             className={`${activeTab === tab.id ? "" : "hover:text-[#91C96F]"}
//                             relative rounded-full px-3 py-1.5 text-base font-medium black outline-sky-400 transition focus-visible:outline-2`}
//             style={{
//               WebkitTapHighlightColor: "transparent",
//             }}
//           >
//             {activeTab === tab.id && (
//               <motion.span
//                 layoutId="bubble"
//                 className="absolute inset-0 z-10 bg-[#ea35b4] mix-blend-multiply"
//                 style={{ borderRadius: 9999 }}
//                 transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//               />
//             )}
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
//         {jobsCurrentTab.map((job, index) => (
//           <div key={index}>
//             <div key={job._id}>
//               <div className="  ">
//                 <div>
//                   <div className="card w-74 h-[300px] bg-base-100 shadow-xl">
//                     <div className="card-body">
//                       <h2 className="card-title truncate text-2xl font-bold text-fuchsia-600 ">
//                         {job.title}
//                       </h2>
//                       <div className=" ">
//                         <h1 className="text-lg font-semibold ">
//                           {" "}
//
//                         </h1>
//                       </div>
//                       <div>
//                         <p className=" text-[16px]"> {job.description} </p>
//                       </div>
//                       <div className=" justify-end">
//                         <div className=" flex ">
//                           <p className="text-xl font-bold ">
//                             {" "}
//                              / Month{" "}
//                           </p>
//                           <button className="badge badge-outline px-6 py-4 font-bold text-lg ">
//                             {" "}
//                             Bid Now{" "}
//                           </button>{" "}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TabJobs;
