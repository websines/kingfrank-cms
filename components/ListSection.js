import React from "react";
import CardComponent from "./CardComponent";
import { sanity_client } from "@/lib/sanity-client";

const getData = async () => {
  const query = `*[_type == 'product']`;

  const data = await sanity_client.fetch(query);

  return data;
};

const ListSection = async () => {
  const products = await getData();
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl md:text-4xl font-semibold tracking-wide my-4">
          Brand New Bromptons for Sale in Singapore
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 my-4 gap-16">
          {products.map((product, index) => (
            <CardComponent key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListSection;
