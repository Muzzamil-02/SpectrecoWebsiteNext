import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Insights from '@/components/common/Insights';
import insightsData from '@/lib/constant/insights.json';

const page = () => {
  return (
    <>
      <Insights data={insightsData} />
    </>
  );
};

export default page;
