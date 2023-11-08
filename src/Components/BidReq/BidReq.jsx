import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const BidRequests = () => {
  const [bidRequests, setBidRequests] = useState([]);
  const req = useLoaderData();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const filter = req.filter((item) => item.email !== user?.email);
    setBidRequests(
      filter.map((bid) => ({ ...bid, status: "Pending", buttonsVisible: true }))
    );
  }, []);
  const handleApprove = (bidId) => {
    fetch(`http://localhost:5000/status/${bidId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: true }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    setBidRequests((prevState) =>
      prevState.map((bid) =>
        bid._id === bidId
          ? { ...bid, status: "Approved", buttonsVisible: false }
          : bid
      )
    );
  };
  const handleReject = (bidId) => {
    fetch(`http://localhost:5000/status/${bidId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: false }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setBidRequests((prevState) =>
      prevState.map((bid) =>
        bid._id === bidId
          ? { ...bid, status: "Rejected", buttonsVisible: false }
          : bid
      )
    );
  };
  return (
    <div className="w-full -mt-24 mx-auto duration-300">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MarketPlace||Bid Req</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <body className="flex items-center justify-center">
        <div className="container duration-300">
          <div className="w-full mx-auto bg-white rounded-2xl overflow-hidden sm:shadow-lg my-5 duration-300">
            <div className="xl:block bg-[#19a4633a] duration-300">
              <div className="flex items-center justify-between font-semibold border border-gray-100 lg:px-10 px-4 py-5">
                <div className="flex justify-evenly w-full gap-40 mx-auto">
                  <h5>Job Name</h5>
                  <h5>Email</h5>
                  <h5>Date</h5>
                </div>
                <div className="flex items-center justify-around w-1/2 mx-auto">
                  <h5 className="">Status</h5>
                </div>
              </div>
            </div>
            <div className="flex-1 sm:flex-none">
              {bidRequests?.map((bidRequest) => (
                <div
                  key={bidRequest._id}
                  className={`flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-evenly border border-gray-100 px-10 py-5 duration-300`}
                  style={{
                    backgroundColor:
                      bidRequest.status === "Rejected" ? "#FF5733" : "#4CAF50",
                  }}
                >
                  <h5 className="w-full mr-10">{bidRequest.title}</h5>
                  <h5 className="w-full mr-10">{bidRequest.email}</h5>
                  <h5 className="w-full mr-10">{bidRequest.date}</h5>
                  {bidRequest.buttonsVisible && (
                    <button
                      className="btn"
                      onClick={() => handleApprove(bidRequest._id)}
                    >
                      Approve
                    </button>
                  )}
                  {bidRequest.buttonsVisible && (
                    <button
                      className="ml-5 btn"
                      onClick={() => handleReject(bidRequest._id)}
                    >
                      Reject
                    </button>
                  )}
                  <p>Status: {bidRequest.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default BidRequests;
