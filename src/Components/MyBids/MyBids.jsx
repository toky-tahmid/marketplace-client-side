import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [sortField, setSortField] = useState("date");

  const url = `https://server-site-theta-two.vercel.app/myJobs?email=${user?.email}&sort=${sortField}`;

  useEffect(() => {
    if (user?.email) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }
  }, [user?.email, sortField, url]);

  return (
    <div className="container mx-auto mt-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MarketPlace || My Bids</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">My Bids</h1>
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium">Sort By:</label>
          <select
            className="border rounded px-2 py-1"
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>
      <div className="w-full mx-auto duration-300">
        <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg my-5">
          <thead className="bg-[#19a4633a]">
            <tr className="text-left text-white font-semibold">
              <th className="py-3 px-6">Job Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map((bid) => (
              <tr
                key={bid._id}
                className="border-b border-gray-200 hover:bg-[#19a4630c]"
              >
                <td className="py-4 px-6">{bid.title}</td>
                <td className="py-4 px-6">{bid.buyerEmail}</td>
                <td className="py-4 px-6">{bid.date}</td>
                <td className="py-4 px-6">
                  {bid.status == true ? (
                    <div
                      aria-disabled
                      className="bg-green-500 font-primary font-semibold text-center text-white px-7 md:px-12 py-2 md:py-3 mt-7 w-44 rounded"
                    >
                      approved
                    </div>
                  ) : bid.status == false ? (
                    <div
                      className="bg-[#eb4444e8] hover:bg-red-500 font-primary font-semibold text-center text-white px-7 md:px-12 py-2 md:py-3 mt-7 w-44 rounded"
                    >
                      rejected
                    </div>
                  ) : (
                    <button className="bg-orange-400 hover:bg-orange-600 font-primary font-semibold text-center text-white px-7 md:px-12 py-2 md:py-3 mt-7 w-44 rounded">
                      pending
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
