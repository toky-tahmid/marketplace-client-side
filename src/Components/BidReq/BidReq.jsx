import React, { useEffect, useState } from "react";

const BidReq = () => {
  const [bidRequests, setBidRequests] = useState([]);

  useEffect(() => {
    // Fetch bid requests from your API endpoint
    fetch("http://localhost:5000/bidRequests")
      .then((res) => res.json())
      .then((data) => setBidRequests(data));
  }, []);

  const handleAccept = (bidRequestId) => {
    // Perform API call to update bid request status to "Accepted"
    fetch(`http://localhost:5000/bidRequests/${bidRequestId}/accept`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        // Update bid request status locally
        setBidRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === bidRequestId ? { ...request, status: "Accepted" } : request
          )
        );
      });
  };

  const handleReject = (bidRequestId) => {
    // Perform API call to update bid request status to "Rejected"
    fetch(`http://localhost:5000/bidRequests/${bidRequestId}/reject`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        // Update bid request status locally
        setBidRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === bidRequestId ? { ...request, status: "Rejected" } : request
          )
        );
      });
  };

  return (
    <div>
      <h2>Bid Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Email</th>
            <th>Deadline</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bidRequests.map((request) => (
            <tr key={request._id}>
              <td>{request.title}</td>
              <td>{request.email}</td>
              <td>{request.deadline}</td>
              <td>{request.price}</td>
              <td>{request.status}</td>
              <td>
                {request.status === "Pending" && (
                  <>
                    <button onClick={() => handleAccept(request._id)}>Accept</button>
                    <button onClick={() => handleReject(request._id)}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidReq;
