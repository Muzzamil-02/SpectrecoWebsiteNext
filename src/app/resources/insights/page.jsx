import Insights from "@/components/common/Insights";
import insightsData from "@/lib/constant/insights.json";

const page = () =>(
      <Insights data={insightsData} showReadMore={true} />
  );

export default page;
