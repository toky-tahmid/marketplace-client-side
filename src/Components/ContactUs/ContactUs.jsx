import Visit from "../Visit/Visit";

const ContactUs = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center">About Us</h1>
      <br />
      <hr />
      <br />
      <br />
      <div className="flex justify-evenly">
        <div className="relative">
          <img
            className=""
            src="https://html.creativegigstf.com/khuj/khuj/images/banner/banner-2.jpg"
            alt=""
          />
          <img
            className="absolute top-96 -left-16"
            src="https://html.creativegigstf.com/khuj/khuj/images/screen/screen-4.png"
            alt=""
          />
          <img
            className="absolute -top-16 -left-20"
            src="https://html.creativegigstf.com/khuj/khuj/images/screen/screen-6.png"
            alt=""
          />
          <img
            className="absolute -right-24 -top-12"
            src="https://html.creativegigstf.com/khuj/khuj/images/screen/screen-5.png"
            alt=""
          />
        </div>
        <div className="mt-20">
          <br />
          <h1 className="text-4xl font-bold">
            Find Your Perfect Job <br />
            Based on Experience
          </h1>
          <br />
          <h3 className="text-2xl font-semibold">
            Energetically iterate effective data whereas is to highly <br />
            efficient e-business. Harness innovative technologies,
            <br /> revolutionizing the digital <br />
            landscape for seamless user experiences. <br />
          </h3>
          <br />
          <button className="btn btn-outline btn-wide btn-success ml-36">
            More Details
          </button>
        </div>
      </div>
      <Visit></Visit>

      <div className="flex justify-evenly mt-10 py-24 bg-gradient-to-r from-red-300 to-purple-300 p-8 rounded-lg shadow-lg">
        <div>
          <h1 className="text-5xl font-bold text-white">
            Subscribe to Our <br /> Newsletter
          </h1>
        </div>

        <div className="relative flex h-12 mt-5 w-full min-w-[200px] max-w-[24rem]">
          <input
            type="email"
            className="peer h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 pr-20 text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-white"
            required
          />
          <button
            className="!absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
            data-ripple-light="true"
          >
            Subscribe
          </button>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Email Address
          </label>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
