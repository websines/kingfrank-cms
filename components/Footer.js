import Link from "next/link";
import { CiStar } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center mt-8 mb-2">
      <div className="px-6 py-4 w-full bg-amber-50 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-row items-start justify-start space-x-2 p-2">
          <CiStar className="text-red-400 w-4 h-4" />
          <div className="flex flex-col items-start justify-start">
            <p className="uppercase tracking-wide font-medium text-xs text-black">
              installment plan available
            </p>
            <p className="text-xs mt-2 text-gray-500">
              Split the cost in 3, 6, or 12 easy monthly payments
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start space-x-2 p-2">
          <CiStar className="text-red-400 w-4 h-4" />
          <div className="flex flex-col items-start justify-start">
            <p className="uppercase tracking-wide font-medium text-xs text-black">
              Trusted Merchants{" "}
            </p>
            <p className="text-xs mt-2 text-gray-500">
              Customers gave us 5 stars, but we’re continuously shooting for 6
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start space-x-2 p-2">
          <CiStar className="text-red-400 w-4 h-4" />
          <div className="flex flex-col items-start justify-start">
            <p className="uppercase tracking-wide font-medium text-xs text-black">
              WANT OTHER MODELS OR COLORS?
            </p>
            <p className="text-xs mt-2 text-gray-500">
              We accept custom orders. Contact us for a quote
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-16 bg-gray-900 flex flex-col items-center justify-center">
        <img
          src={"/footer-logo.png"}
          alt="logo-white"
          className="h-[150px] w-[200px]"
        />
        <div className="w-full md:w-[80%]  mt-16 mb-8 font-medium tracking-wide flex flex-row items-center justify-between flex-wrap space-x-2">
          <Link
            href="/about"
            className="text-gray-400 hover:text-gray-500 text-sm "
          >
            About
          </Link>
          <Link
            href="/faqs"
            className="text-gray-400 hover:text-gray-500 text-sm "
          >
            FAQs
          </Link>
          <Link
            href="/terms"
            className="text-gray-400 hover:text-gray-500 text-sm "
          >
            Terms
          </Link>
          <Link
            href="/contact-us"
            className="text-gray-400 hover:text-gray-500 text-sm "
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="my-2 flex flex-row items-center justify-between p-2 w-full flex-wrap">
        <div className="text-gray-500 text-xs uppercase tracking-wide">
          © 2024 KingFrankCo Pte. Ltd. (Singapore). All rights reserved.
        </div>
        <div className="flex flex-row items-center justify-center">
          <img
            src={"/payment_logo_paynow.svg"}
            alt="payunow"
            className="h-12 w-24"
          ></img>
          <img src={"/visa.svg"} alt="visa" className="h-6 w-12"></img>
          <img
            src={"/mastercard.svg"}
            alt="mastercard"
            className="h-6 w-12"
          ></img>
          <img src={"/amex.svg"} alt="amex" className="h-6 w-12"></img>
        </div>
      </div>
    </div>
  );
}
