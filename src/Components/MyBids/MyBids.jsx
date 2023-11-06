import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

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
      <h1> my bids{jobs.length}</h1>
    </div>
  );
};

export default MyBids;
