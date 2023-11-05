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
          <img className=""
            src="https://html.creativegigstf.com/khuj/khuj/images/banner/banner-2.jpg"
            alt=""
          />
          <img className="absolute top-96 -left-16" src="https://html.creativegigstf.com/khuj/khuj/images/screen/screen-4.png" alt="" />
          <img className="absolute -top-16 -left-20" src="https://html.creativegigstf.com/khuj/khuj/images/screen/screen-6.png" alt="" />
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
            efficient e-business.
            Harness innovative technologies,<br /> revolutionizing the digital <br />landscape for seamless user experiences. <br />
          </h3>
          <br />
          <button className="btn btn-outline btn-wide btn-success ml-36">
            More Details
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
