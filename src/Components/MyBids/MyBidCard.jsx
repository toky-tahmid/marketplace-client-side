import React, { useState } from "react";

const MyBidCard = ({ bid }) => {
  const { _id, title, date, email } = bid;
  const [isApproved, setIsApproved] = useState(false);

  const handleApproveClick = () => {
    // Perform API call to update bid status to "Approved"
    setIsApproved(true);
  };

  return (
    <div className={`flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between border border-gray-100 hover:bg-[#19a4630c] px-10 py-5 duration-300 ${isApproved ? 'bg-green-100' : ''}`}>
      <h5 className="w-full mr-10">{title}</h5>
      <h5 className="w-full mr-10">{email}</h5>
      <h5 className="w-full mr-10">{date}</h5>
      {!isApproved && <button onClick={handleApproveClick}>Approve</button>}
      {isApproved && <p>Approved</p>}
    </div>
  );
};

export default MyBidCard;
