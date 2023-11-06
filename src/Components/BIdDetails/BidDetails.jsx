import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const BidDetails = () => {
    const data = useLoaderData();
    const {email} = data
    console.log(data);
  const { user } = useContext(AuthContext);
  console.log(user);
  const userEmail = user.email;
  console.log(userEmail);
  const handleAddJob = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyerEmail = form.buyerEmail.value;
    const email = form.email.value;
    const date = form.date.value;
    const title = form.title.value;
    const minimum = form.minimum.value;
    const newJobs = {
      buyerEmail,
      email,
      date,
      title,
      minimum,
    };
    console.log(newJobs);
    fetch("http://localhost:5000/myJobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJobs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Job Post Added Successfully",
          });
        }
      });
  };

 
  return (
    <>
      {/* card */}
      <div className="relative mx-auto flex flex-col -mt-20 text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="p-6">
          <h5 className="block mb-2 text-2xl text-center antialiased font-bold leading-snug tracking-normal text-gray-900 bg-gradient-to-r from-purple-500 to-red-400 text-transparent bg-clip-text">
            {data.title}
          </h5>
          <h5 className="text-xl text-center antialiased font-semibold">
            DeadLine:{data.deadline}
          </h5>
          <h5 className="text-xl  text-center antialiased font-semibold">
            Price-Range : <span>{data.minimumPrice}</span> -{" "}
            <span>{data.maximumPrice}</span>
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {data.description}
          </p>
        </div>
      </div>

      {/* formData */}

      <div className=" min-h-screen mt-5 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4 text-green-400 text-center">
            Bid Form
          </h1>
          <form onSubmit={handleAddJob}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email of the Seller
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 p-2 w-full bg-gray-100 rounded"
                defaultValue={userEmail}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email of the Buyer
              </label>
              <input
                type="email"
                name="buyerEmail"
                className="mt-1 p-2 w-full bg-gray-100 rounded"
                defaultValue={email}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                className="mt-1 p-2 w-full rounded"
                placeholder="Enter job title"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Deadline
              </label>
              <input
                type="date"
                name="date"
                className="mt-1 p-2 w-full rounded"
                required
              />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Price
                </label>
                <input
                  type="number"
                  name="minimum"
                  className="mt-1 p-2 w-full rounded"
                  placeholder="Your price"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              Bid the project
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BidDetails;
