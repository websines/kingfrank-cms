import { sanity_client } from "@/lib/sanity-client";
import ReviewSlider from "@/components/ReviewSlider";
import SaleDropdown from "@/components/SaleDropdown";

const getData = async () => {
  const query = `*[_type == 'terms']`;

  const data = await sanity_client.fetch(query);

  return data;
};

function Terms({ data }) {
  return (
    <div className="bg-white">
      <SaleDropdown />

      <ReviewSlider />
    </div>
  );
}

const page = async () => {
  const data = await getData();
  return <Terms data={data} />;
};

export default page;
