/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const TabsData = ({ newJobs }) => {
  console.log(newJobs);
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
                  <h5 className="block mb-2 text-xl antialiased font-bold leading-snug tracking-normal text-gray-900 bg-gradient-to-r from-purple-500 to-red-400 text-transparent bg-clip-text">
                    {job.title}
                  </h5>
                  <h5 className="text-xl antialiased font-semibold">
                    DeadLine:{job?.deadline}
                  </h5>
                  <h5 className="text-xl antialiased font-semibold">
                    Price-Range : <span>{job?.minimumPrice}</span> -{" "}
                    <span>{job?.maximumPrice}</span>
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {job.description}
                  </p>
                </div>

                <Link to={`/jobs/${job._id}`}>
                  <button className="rounded-b-lg w-full bg-purple-300 py-3 px-6 text-white text-sm font-bold uppercase hover:bg-purple-500 focus:outline-none focus:ring focus:ring-pink-200 transition duration-300">
                    Bid Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsData;
