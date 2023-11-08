import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
const MyBids = () => {
  const { user } = useContext(AuthContext);

  const [jobs, setJobs] = useState([]);
  const url = `https://server-site-theta-two.vercel.app/myJobs?email=${user?.email}`;
  useEffect(() => {
    if(
      user?.email
    )
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user?.email,url]);
  console.log(jobs);

  return (
    <div className=" w-full -mt-24 mx-auto duration-300">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MarketPlace||My Bids</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <body className="flex items-center justify-center">
        <div className="container duration-300">
          <div className="w-full mx-auto bg-white rounded-2xl overflow-hidden sm:shadow-lg my-5 duration-300">
            <div className=" xl:block bg-[#19a4633a] duration-300">
              <div className="flex  items-center justify-between font-semibold border border-gray-100 lg:px-10 px-4 py-5">
                <div className=" flex  justify-around w-1/2 mx-auto ">
                  <h5 className=" ">Job Name</h5>
                  <h5 className=" ">Email</h5>
                </div>
                <div className=" flex items-center justify-around  w-1/2 mx-auto  ">
                  <h5 className="ml-20">Date </h5>
                  <h5 className=""> Status </h5>
                </div>
              </div>
            </div>
            <div className="flex-1 sm:flex-none">
              {jobs?.map((bid) => (
                <div
                  key={bid._id}
                  className={`flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between border border-gray-100 hover:bg-[#19a4630c] px-10 py-5 duration-300 `}
                >
                  <h5 className="w-full mr-10">{bid.title}</h5>
                  <h5 className="w-full mr-10">{bid.buyerEmail}</h5>
                  <h5 className="w-full mr-10">{bid.date}</h5>

                  <div>
                    {bid.status == true ? (
                      <div
                        aria-disabled
                        className="bg-[#19a463] hover:bg-green-600   font-semibold text-center text-white px-7 md:px-12 py-2 md:py-3 mt-7 w-full rounded"
                      >
                        approved
                      </div>
                    ) : bid.status == false ? (
                      <div className="bg-[#eb4444e8]  hover:bg-red-600 font-semibold text-center text-white px-7 md:px-12 py-2 md:py-3 mt-7 w-full rounded">
                        rejected
                      </div>
                    ) : (
                      <button className="bg-orange-400  hover:bg-orange-600  font-semibold text-center text-white px-7 md:px-12 py-2 md:py-3 mt-7 w-full rounded">
                        pending
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default MyBids;
