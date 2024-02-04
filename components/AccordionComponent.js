"use client";

export default function AccordionComponent({ faqs }) {
  return (
    <div className="hs-accordion-group space-y-2">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl"
          id="hs-active-bordered-heading-one"
        >
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
            aria-controls="hs-basic-active-bordered-collapse-one"
          >
            {index + 1}. {faq.question}
            <svg
              className="hs-accordion-active:hidden block w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg
              className="hs-accordion-active:block hidden w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <div
            id="hs-basic-active-bordered-collapse-one"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-active-bordered-heading-one"
          >
            <div className="pb-4 px-5">
              <p className="text-gray-800 text-left">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
