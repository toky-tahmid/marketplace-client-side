import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import TabsData from "../Tabs/TabsData";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import { Helmet } from "react-helmet";

const Home = () => {
    const newJobs = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <TabsData newJobs={newJobs}></TabsData>
            <WhyChooseUs></WhyChooseUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;