import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Insights from "@/components/common/Insights";
import pressreleeseData from "@/lib/constant/pressreleese.json";

const page = () => (
      <Insights data={pressreleeseData} />
  );

export default page;
