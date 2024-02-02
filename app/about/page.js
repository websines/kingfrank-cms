import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ReviewSlider from "@/components/ReviewSlider";
import SaleDropdown from "@/components/SaleDropdown";
import { sanity_client, urlFor } from "@/lib/sanity-client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const getData = async () => {
  const query = `*[_type == 'about']`;

  const data = await sanity_client.fetch(query);

  return data;
};

export const revalidate = 30;
function About({ data }) {
  const sectionStyle = {
    backgroundImage: `url(${urlFor(data.main_image.asset._ref).url()})`,
    backgroundSize: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "440px",
  };
  return (
    <div className="bg-white">
      <SaleDropdown />
      <section
        className="flex flex-row items-center justify-center bg-cover bg-center my-5"
        style={sectionStyle}
      >
        <h1 class="text-white text-3xl md:text-4xl font-bold text-center md:w-[60%] w-[80%]">
          {data.main_image_text}
        </h1>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 my-8 py-8">
        <div>
          <img src="/img4.jpg" alt="img" />
        </div>
        <div className="flex flex-col justify-start items-start p-8">
          <p className="text-left text-gray-500 uppercase text-sm font-semibold ">
            Our story
          </p>
          <h2 className="text-left text-black md:text-3xl text-xl font-semibold">
            {data.our_story_heading}
          </h2>
          <p className="mt-4 text-black text-md opacity-85">
            {data.our_story_text}
          </p>
        </div>
      </section>
      <section className="w-full bg-gray-50 my-8 p-8 md:p-16 flex flex-col justify-center items-center text-black">
        <p className="font-semibold tracking-wide md:text-4xl text-3xl">
          How we manage low prices
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-[80%] my-8">
          <p>
            In this digital age where we have information at our fingertips,
            it’s very easy to gauge if a product price is justified or not.
            <br />
            Keeping this in mind, we operate with a simple philosophy: to offer
            good bicycles at good honest prices. To do so, we work hard to
            reduce costs and cut time wasting, and we pass the benefits of this
            low-cost structure along to our customers.
          </p>

          <p>
            Therefore if you're looking for a Brompton bicycle, we believe we
            can offer the low price than any other retailer. You can quickly
            find out whether you can save money by sending us a message now.
          </p>
        </div>
        <Link
          href="/"
          className="flex flex-row items-center space-x-4 bg-black px-4 py-2 text-white"
        >
          Shop Now
          <span className="mx-2 font-medium">
            <FaArrowRight className="hover:translate-x-2 duration-300 ease-in-out" />
          </span>
        </Link>
      </section>
      <section className="my-8 p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-8">
          <div className="flex flex-col items-center justify-center space-y-2">
            <img
              src={`${urlFor(data.images[0].asset._ref).url()}`}
              className="h-[500px] w-[440px] object-cover"
            />
            <img
              src={`${urlFor(data.images[1].asset._ref).url()}`}
              className="h-[500px] w-[440px] object-cover"
            />
            <img
              src={`${urlFor(data.images[2].asset._ref).url()}`}
              className="h-[500px] w-[440px] object-cover"
            />
          </div>
          <div className="flex flex-col md:py-6 mt-2 items-center justify-center space-y-2">
            <img
              src={`${urlFor(data.images[3].asset._ref).url()}`}
              className="h-[500px] w-[440px] object-cover"
            />
            <img
              src={`${urlFor(data.images[4].asset._ref).url()}`}
              className="h-[500px] w-[440px] object-cover"
            />
          </div>
        </div>
      </section>
      <CTASection />
      <ReviewSlider />
      <Footer />
    </div>
  );
}

const page = async () => {
  const data = await getData();

  return <About data={data[0]} />;
};

export default page;
