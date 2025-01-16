import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Insights from "@/components/common/Insights";
import insightsData from "@/lib/constant/insights.json";

const page = () => {
  return (
    <>
      <Navbar />
      <Insights data={insightsData} showReadMore={true} />
      <Footer />
    </>
  );
};

export default page;
