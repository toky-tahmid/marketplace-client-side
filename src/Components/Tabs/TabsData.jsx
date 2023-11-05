/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "Web Development", label: "Web Development" },
  { id: "Digital Marketing", label: "Digital Marketing" },
  { id: "Graphics Design", label: "Graphics Design" },
];

const TabJobs = ({ newJobs }) => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  const jobsCurrentTab = newJobs.filter((job) => job.category === activeTab);

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
                className="absolute inset-0 z-10 bg-[#ea35b4] mix-blend-multiply"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
        {jobsCurrentTab.map((job, index) => (
          <div key={index}>
            <div key={job._id}>
              <div className="  ">
                <div>
                  <div className="card w-74 h-[300px] bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title truncate text-2xl font-bold text-fuchsia-600 ">
                        {job.title}
                      </h2>
                      <div className=" ">
                        <h1 className="text-lg font-semibold ">
                          {" "}
                          Date : {job.deadline}
                        </h1>
                      </div>
                      <div>
                        <p className=" text-[16px]"> {job.description} </p>
                      </div>
                      <div className=" justify-end">
                        <div className=" flex ">
                          <p className="text-xl font-bold ">
                            {" "}
                             / Month{" "}
                          </p>
                          <button className="badge badge-outline px-6 py-4 font-bold text-lg ">
                            {" "}
                            Bid Now{" "}
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TabJobs;
