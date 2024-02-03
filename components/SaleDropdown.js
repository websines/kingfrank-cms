import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { sanity_client } from "@/lib/sanity-client";

const getData = async () => {
  const query = `*[_type == 'product']{name, slug}`;

  const data = await sanity_client.fetch(query);

  return data;
};

export const revalidate = 30;

function SaleDropdown({ data }) {
  return (
    <>
      <div className="hs-dropdown relative md:inline-flex w-full md:[w-30%]">
        <div
          id="hs-dropdown-custom-icon-trigger"
          className="bg-black text-white px-4 py-4 flex flex-row justify-center items-center space-x-3  cursor-pointer hs-dropdown-toggle"
        >
          <IoMenu className="h-8 w-8" />
          <span className="font-medium">New Bromptons for Sale</span>
        </div>
        <div
          className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md  p-2 mt-2 "
          aria-labelledby="hs-dropdown-custom-icon-trigger"
        >
          {data &&
            data.map((list, index) => (
              <Link
                key={index}
                className="flex items-center gap-x-3.5 py-2 px-3 text-md font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 "
                href={`/product/${list.slug.current}`}
              >
                {list.name}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default async function page() {
  const data = await getData();
  return <SaleDropdown data={data} />;
}
