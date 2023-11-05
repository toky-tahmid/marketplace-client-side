import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import TabsData from "../Tabs/TabsData";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    const newJobs = useLoaderData()
    console.log(newJobs);
    return (
        <div>
            <Banner></Banner>
            <TabsData newJobs={newJobs}></TabsData>
            <WhyChooseUs></WhyChooseUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;