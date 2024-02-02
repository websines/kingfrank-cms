import { sanity_client } from "@/lib/sanity-client";
import ReviewSlider from "@/components/ReviewSlider";
import SaleDropdown from "@/components/SaleDropdown";
import Footer from "@/components/Footer";

const getData = async () => {
  const query = `*[_type == "terms"]|order(_updatedAt asc)`;

  const data = await sanity_client.fetch(query);

  return data;
};

function Terms({ data }) {
  return (
    <div className="bg-white">
      <SaleDropdown />
      <div className="flex flex-col justify-center items-start my-8 p-4 md:p-8">
        <h1 className="tracking-wide md:text-4xl text-3xl font-semibold text-black">
          Terms & Conditions
        </h1>
        {data &&
          data.map((terms, index) => (
            <div
              key={index}
              className="my-4 flex flex-col justify-center items-start text-black"
            >
              <div className="flex flex-row items-center justify-start space-x-2 my-2 text-2xl font-medium">
                <span>{index + 1}.</span> <p>{terms.title}</p>
              </div>
              <p className="text-md">{terms.text}</p>
            </div>
          ))}
      </div>
      <ReviewSlider />
      <Footer />
    </div>
  );
}

const page = async () => {
  const data = await getData();
  return <Terms data={data} />;
};

export default page;
