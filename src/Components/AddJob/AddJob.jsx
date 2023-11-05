


const AddJob = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Add Job</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email of the Employer
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full bg-gray-100 rounded"
              value="employer@example.com"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Job Title
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full rounded"
              placeholder="Enter job title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Deadline
            </label>
            <input type="date" className="mt-1 p-2 w-full rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              className="mt-1 p-2 w-full rounded"
              placeholder="Enter job description"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Category
            </label>
            <select className="mt-1 p-2 w-full rounded" required>
              <option value="" disabled selected>
                Select category
              </option>
              <option value="category1">web development</option>
              <option value="category2">digital marketing</option>
              <option value="category3">graphics design</option>
            </select>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Minimum Price
              </label>
              <input
                type="number"
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
