import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import ReviewSlider from "@/components/ReviewSlider";
import SaleDropdown from "@/components/SaleDropdown";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import AccordionComponent from "@/components/AccordionComponent";
import { sanity_client, urlFor } from "@/lib/sanity-client";

const getDataProduct = async (slug) => {
  const query = `*[_type == "product" && slug.current == "${slug}"]`;

  const data = await sanity_client.fetch(query);

  return data;
};

const getFaqData = async () => {
  const query = `*[_type == 'faqs']`;

  const data = await sanity_client.fetch(query);

  return data;
};
export const revalidate = 30;
function Product({ data, faqs }) {
  const images = data.images.map((imageObject) =>
    urlFor(imageObject.asset._ref).url()
  );
  return (
    <div className="bg-white">
      <SaleDropdown />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-8">
        <ImageGallery images={images} />
        <div className="flex flex-col justify-start items-start p-4">
          <div className="mt-4 text-left">
            <span className="text-md font-light text-gray-500 my-2">
              Brompton
            </span>
            <p className="font-semibold text-3xl text-black my-4">
              {data && data.name}
            </p>
            <p className="font-semibold text-gray-500 text-lg">$1850</p>
            <div className="flex flex-row items-center justify-start mt-2">
              {data && data.in_stock ? (
                <div className=" flex flex-row items-center">
                  <div className="bg-green-500 rounded-full animate-ping w-2 h-2" />
                  <p className="mx-2 text-sm font-semibold text-black">
                    In Stock
                  </p>
                  <Link
                    href="https://wa.me/919547071934/"
                    className="px-4 py-2 bg-green-500 flex flex-row items-center space-x-2"
                  >
                    <FaWhatsapp className="text-white" />
                    <span className="text-white font-semibold">Buy Now</span>
                  </Link>
                </div>
              ) : (
                <div className=" flex flex-row items-center">
                  <div className="bg-red-500 rounded-full animate-ping w-2 h-2" />
                  <p className="mx-2 text-sm font-semibold text-black">
                    Out of Stock
                  </p>
                  <Link
                    href="https://wa.me/919547071934/"
                    className="px-4 py-2 bg-green-500 flex flex-row items-center space-x-2"
                  >
                    <FaWhatsapp className="text-white" />
                    <span className="text-white font-semibold">
                      Preorder Now
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <span className="mt-8 mb-4">
            Availability:{" "}
            <span className="font-semibold">{data && data.availability}</span>
          </span>
          <span className="my-4">
            Color: <span className="font-semibold">{data && data.color}</span>
          </span>
          <span className="my-4">
            Weight: <span className="font-semibold">{data && data.weight}</span>
          </span>
          <span className="my-4">
            Handlebar type:{" "}
            <span className="font-semibold">{data && data.handlebar_type}</span>
          </span>
          <span className="my-4">
            Mudguards:{" "}
            <span className="font-semibold">{data && data.mudguard}</span>
          </span>
          <span className="my-4">
            Rake: <span className="font-semibold">{data && data.rack}</span>
          </span>
          <span className="my-4">
            Chainring Size:
            <span className="font-semibold">{data && data.chainring}</span>
          </span>
        </div>
      </div>
      <div class="border-b border-gray-200 dark:border-gray-700 my-8">
        <nav
          class="-mb-0.5 flex justify-center space-x-6"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-amber-600 hs-tab-active:text-amber-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-amber-600 focus:outline-none focus:text-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-amber-500 active"
            id="horizontal-alignment-item-1"
            data-hs-tab="#horizontal-alignment-1"
            aria-controls="horizontal-alignment-1"
            role="tab"
          >
            Description
          </button>
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-amber-600 hs-tab-active:text-amber-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-amber-600 focus:outline-none focus:text-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-amber-500"
            id="horizontal-alignment-item-2"
            data-hs-tab="#horizontal-alignment-2"
            aria-controls="horizontal-alignment-2"
            role="tab"
          >
            FAQs
          </button>
        </nav>
      </div>

      <div class="mt-3">
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          className="w-full flex flex-row justify-center items-center text-center"
        >
          <p class="text-gray-500 font-medium dark:text-gray-400 md:w-[80%]">
            {data.description}
          </p>
        </div>
        <div
          id="horizontal-alignment-2"
          class="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-2"
          className="w-full flex flex-row justify-center items-center text-center"
        >
          <AccordionComponent faqs={faqs} />
        </div>
      </div>
      <ReviewSlider />
      <Footer />
    </div>
  );
}

const page = async ({ params }) => {
  const data = await getDataProduct(params.slug);
  const faqs = await getFaqData();

  return <Product data={data[0]} faqs={faqs} />;
};

export default page;
