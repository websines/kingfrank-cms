import ReviewSlider from "@/components/ReviewSlider";
import SaleDropdown from "@/components/SaleDropdown";
import Footer from "@/components/Footer";

import Link from "next/link";

import { FiSmartphone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-white text-black">
      <SaleDropdown />
      <div className="flex flex-col">
        <h1 className="text-center font-medium md:text-5xl text-3xl my-8">
          Contact Us
        </h1>
        <div className="flex flex-col items-start justify-start my-2 p-4">
          <div className="flex flex-row items-center space-x-4 my-4">
            <FiSmartphone className="text-red-400" />{" "}
            <p className="font-medium text-xl">Whatsapp Us:</p>
          </div>
          <p className="font-light">
            We aim to respond quickly, but it may take longer than usual.
          </p>

          <div className=" flex flex-col items-start my-4 space-y-2">
            <p className="text-base font-medium text-black">WhatsApp: </p>
            <Link
              href="https://wa.me/919547071934?text=Hello+text"
              className="px-4 py-2 bg-green-500 flex flex-row items-center space-x-2"
            >
              <FaWhatsapp className="text-white" />
              <span className="text-white font-semibold">
                Click to Whatsapp
              </span>
            </Link>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex flex-col items-start justify-start p-4">
          <div className="flex flex-row items-center space-x-4 my-4">
            <CiMail className="text-red-400 " />{" "}
            <p className="font-medium text-xl">Visitations & Collections: </p>
          </div>
          <p className="font-light my-2">
            Visitations and collections are by appointment only from 11am–10pm
            daily, excluding certain public holidays
          </p>

          <div className="flex flex-col mt-4">
            <p className="font-medium text-lg">Collection Address:</p>
            <p className="mb-2">3 Lorong 5 Toa Payoh, Singapore 319459</p>

            <p className="my-2">By car: Free parking onsite</p>
            <p className="my-2">
              By train: Alight at Braddell MRT, Exit C, walk along main road Toa
              Payoh Lor 1, then make a right turn at Toa Payoh Lorong 4
            </p>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex flex-col items-start justify-start p-4">
          <div className="flex flex-row items-center space-x-4 my-4">
            <CiMail className="text-red-400" />{" "}
            <p className="font-medium text-xl">Email Us:</p>
          </div>
          <p className="font-medium text-lg my-2">Customer Service:</p>
          <Link
            href="mailto:contact@thebikesnob.com"
            className="hover:underline"
          >
            contact@thebikesnob.com
          </Link>
        </div>
      </div>
      <ReviewSlider />
      <Footer />
    </div>
  );
}
