import CustomerReviews from "./CustomerReviews";
import { sanity_client } from "@/lib/sanity-client";

const getReviewData = async () => {
  const query = `*[_type == 'reviews']`;

  const data = await sanity_client.fetch(query);

  return data;
};

export const revalidate = 30;

export default async function ReviewSlider() {
  const reviews = await getReviewData();
  return (
    <div className="my-8 md:p-16 flex flex-col justify-center items-center">
      <div className="flex flex-col my-2 text-center">
        <p>What Buyers say</p>
        <p className="md:text-3xl text-2xl font-semibold text-black">
          Customer Reviews
        </p>
      </div>
      <CustomerReviews reviews={reviews} />
    </div>
  );
}
