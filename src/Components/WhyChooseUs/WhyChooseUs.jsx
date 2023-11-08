import {
  AiFillPropertySafety,
  AiOutlineClockCircle,
  AiOutlineCloudUpload,
} from "react-icons/ai";
const WhyChooseUs = () => {
  return (
    <>
      <h1 className="text-6xl font-bold text-center">Why Choose Us</h1>
      <br />
      <hr />
      <br />
      <div className="flex justify-evenly mb-20">
        <div className="text-center mt-48">
          <h1 className="text-4xl font-bold ">
            <span className=" antialiased font-bold leading-snug tracking-normal text-gray-900 bg-gradient-to-r from-purple-500 to-red-400 text-transparent bg-clip-text">MARKETPLACE</span>{" "}
            Website Only For <br /> Your Dream Jobs
           
          </h1>
          <h3 className="text-xl font-semibold">
            Proficiency develop empowered communicate rather than <br />{" "}
            front-end networks. Competently formula revolute infrastructures
            with high standards.
          </h3>
          <div className="flex items-center mt-6">
            <div className="rounded-full bg-gradient-to-r from-pink-400 to-purple-400 p-2 mr-4">
              <AiFillPropertySafety className="text-3xl text-white"></AiFillPropertySafety>
            </div>
            <h2 className="text-2xl font-semibold">Payment Gateway Secure</h2>
          </div>
          <div className="flex items-center mt-4 mb-4">
            <div className="rounded-full bg-gradient-to-r from-pink-400 to-purple-400 p-2 mr-4">
              <AiOutlineCloudUpload className="text-3xl text-white"></AiOutlineCloudUpload>
            </div>
            <h2 className="text-2xl font-semibold">Fast Load</h2>
          </div>
          <div className="flex items-center">
            <div className="rounded-full bg-gradient-to-r from-pink-400 to-purple-400 p-2 mr-4">
              <AiOutlineClockCircle className="text-3xl text-white"></AiOutlineClockCircle>
            </div>
            <h2 className="text-2xl font-semibold">Work Per Hour</h2>
          </div>

          <button className="btn btn-outline mt-6 btn-wide btn-success ">
            Learn More
          </button>
        </div>
        <div>
          <img
            src="https://html.creativegigstf.com/khuj/khuj/images/banner/banner-3.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
