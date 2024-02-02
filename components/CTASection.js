import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <div className="p-2">
      <div className="flex flex-col md:flex-row space-x-8 items-center justify-center relative">
        <img
          src={"/img3.jpg"}
          alt="image1"
          className="h-[570px] w-[550px] object-fill"
        ></img>
        <img
          src={"/img2.jpg"}
          alt="image2"
          className="h-[570px] w-[550px] object-fill hidden md:block"
        ></img>
        <div className="absolute top-40 bg-white h-[220px] w-[280px] md:w-[440px] flex flex-col items-center justify-center px-6 text-black">
          <span className="font-medium text-xl sm:text-2xl text-center">
            New to Brompton?
          </span>
          <div className="mt-4 mx-auto text-sm font-medium text-center">
            <span>
              Don’t worry, everyone starts somewhere. We’ve put together a
              Brompton FAQ to help you get started.
            </span>
          </div>
          <div className="mx-auto mt-4 text-sm font-medium">
            <Link href="/faqs" className="flex flex-row items-center space-x-4">
              Read FAQs{" "}
              <span className="mx-2 font-medium">
                <FaArrowRight className="hover:translate-x-2 duration-300 ease-in-out" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
