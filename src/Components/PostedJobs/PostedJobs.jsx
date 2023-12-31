import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const PostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [postedJobs, setPostedJobs] = useState([]);

  const fetchJobs = () => {
    fetch(`https://server-site-theta-two.vercel.app/jobs?email=${user?.email}`,{Credential:'include'})
      .then((res) => res.json())
      .then((data) => setPostedJobs(data));
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-site-theta-two.vercel.app/jobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Job has been deleted.", "success");
              fetchJobs();
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MarketPlace||Posted Jobs</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="grid-col-1 lg:grid grid-cols-2 gap-3 ml-20">
        {postedJobs.map((postedJob) => (
          <div key={postedJob._id} className="mb-8">
            <div className="relative flex justify-evenly max-w-xl flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="p-6">
                <h5 className="block mb-2 text-2xl text-center antialiased font-bold leading-snug tracking-normal text-gray-900 bg-gradient-to-r from-purple-500 to-red-400 text-transparent bg-clip-text">
                  Title: 
                  {postedJob.title}
                </h5>
                <h5 className="text-xl text-center antialiased font-semibold">
                  DeadLine:{postedJob.deadline}
                </h5>
                <h5 className="text-xl  text-center antialiased font-semibold">
                  Price-Range : <span>{postedJob.minimumPrice}</span> -{" "}
                  <span>{postedJob.maximumPrice}</span>
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {postedJob.description}
                </p>
              </div>
              <div className="flex my-auto">
                <Link to={`/postUpdated/${postedJob._id}`}>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 mr-2 rounded focus:outline-none focus:ring h-12 focus:border-blue-300">
                    Update
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(postedJob._id)}
                  className="bg-red-200 hover:bg-red-400 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring h-12 focus:border-blue-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostedJobs;
