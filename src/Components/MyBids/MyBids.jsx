import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyBidCard from "./MyBidCard";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const url = `http://localhost:5000/myJobs?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);
  return (
    <div>
      <h2 className="text-5xl">Your bookings: {jobs.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <MyBidCard key={job._id}
              job={job}>
                
              </MyBidCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
