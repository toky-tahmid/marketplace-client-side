const Banner = () => {
  return (
    <div
      className="hero opacity-90 -mt-24 mb-12 min-w-full lg:min-h-screen relative"
      style={{
        backgroundImage:
          "url(https://www.homeworkingclub.com/wp-content/uploads/2019/04/Sites-like-Upwork-for-freelancers.jpg)",
      }}
    >
      <div className="text-white mt-48 text-center">
        <h1 className="text-5xl font-bold text-purple-600 mb-6">
          Welcome To The
        </h1>
        <h1 className="text-5xl font-bold text-purple-600">
          Awesome Creative Marketplace
        </h1>
      </div>
      <div className="absolute inset-0 mt-96 flex items-center justify-center">
        <button
          className="rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300"
          data-ripple-light="true"
        >
          Explore More
        </button>
        <button
          className="rounded-lg ml-7 bg-gradient-to-r from-pink-500 to-purple-500 py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300"
          data-ripple-light="true"
        >
          Become a Seller
        </button>
      </div>
    </div>
  );
};

export default Banner;
