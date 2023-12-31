import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const userEmail = user.email;
  console.log(userEmail);

  const handleAddJob = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const minimumPrice = form.minimumPrice.value;
    const title = form.title.value;
    const category = form.category.value;
    const maximumPrice = form.maximumPrice.value;
    const newJobs = {
      email,
      deadline,
      title,
      description,
      minimumPrice,
      category,
      maximumPrice,
    };
    console.log(newJobs);
    fetch("https://server-site-theta-two.vercel.app/jobs", {
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
    <div className="bg-gray-100 min-h-screen -mt-28 flex items-center justify-center">
       <Helmet>
        <meta charSet="utf-8" />
        <title>MarketPlace || Add Job</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Add Job</h1>
        <form onSubmit={handleAddJob}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email of the Employer
            </label>
            <input
              type="email"
              name="email"
              defaultValue={userEmail}
              className="mt-1 p-2 w-full bg-gray-100 rounded"
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
              name="deadline"
              className="mt-1 p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              className="mt-1 p-2 w-full rounded"
              placeholder="Enter job description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Category
            </label>
            <select
              className="w-full px-4 py-2 rounded "
              name="category"
              required
            >
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing </option>
              <option value="Digital Marketing">Graphics Design </option>
            </select>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Minimum Price
              </label>
              <input
                type="number"
                name="minimumPrice"
                className="mt-1 p-2 w-full rounded"
                placeholder="Min price"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Maximum Price
              </label>
              <input
                type="number"
                name="maximumPrice"
                className="mt-1 p-2 w-full rounded"
                placeholder="Max price"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded hover:from-pink-600 hover:to-purple-600 transition duration-300"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
