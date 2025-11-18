import React, { useState } from "react";

export default function ProductDetailCard({ product = {} }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [pin, setPin] = useState("");
  const [accordionOpen, setAccordionOpen] = useState({
    details: true,
    brand: false,
  });

  const sizes = product.sizes || ["S", "M", "L", "XL"];

  function toggleAccordion(key) {
    setAccordionOpen((s) => ({ ...s, [key]: !s[key] }));
  }

  function checkDelivery() {
    // Replace with real API call if needed
    console.log("Checking delivery for PIN:", pin);
    alert(
      pin ? `Checking delivery for PIN: ${pin}` : "Please enter a PIN code"
    );
  }

  return (
    <div className="px-4">
      <div>
        <div className="flex flex-col items-start sm:px-4 md:px-0 md:pt-0 lg:px-0 xs:pt-4 mm:px-0">
          <div className="flex gap-4" />

          <div className="flex w-full flex-row items-center justify-center">
            <h1 className="mt-3 w-full">
              <div className="flex w-full items-start justify-between">
                <div className="w-full self-stretch text-2xl font-medium leading-[31.2px] tracking-normal text-neutral-900 select-none md:select-text">
                  {product.brand || "CALVIN KLEIN"}
                </div>

                <div className="rounded-full border p-2 md:hidden">
                  <img
                    alt="share-icon"
                    src={product.shareIcon || "/icons/share-icon.svg"}
                    className="size-4"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-1 w-full self-stretch text-base font-light leading-6 tracking-wide text-neutral-900 select-none md:select-text">
                {product.title || "Color Block Nylon Regular Fit Men Jacket"}
              </div>
            </h1>
          </div>

          <div className="mt-5 flex items-stretch gap-2 self-stretch">
            <div className="flex items-stretch justify-between gap-2">
              <div className="flex select-none md:select-text">
                <div className="grow whitespace-nowrap text-xl font-medium leading-5 tracking-wide text-neutral-400">
                  MRP
                </div>
                <div className="ml-1 grow whitespace-nowrap text-xl font-medium leading-5 text-black">
                  {/* ₹{product.price || "11,999"} */}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-1 text-xs font-normal text-neutral-700 md:leading-3 select-none md:select-text">
            inclusive of all taxes
          </div>
        </div>
      </div>

      <div className="flex max-w-[460px] flex-col items-stretch pt-4">
        <div>
          <div className="flex items-center xs:justify-between">
            <div className="text-sm leading-[16.8px] text-neutral-500 select-none md:select-text">
              Select Size
            </div>
            <span className="ml-3 cursor-pointer text-sm font-medium leading-[16.8px] text-blue-600 select-none md:select-text">
              Size Chart
            </span>
          </div>

          {/* <div className="!hide-scrollbar flex items-start gap-3 overflow-x-auto pt-2 md:flex-wrap">
            {sizes.map((sz) => (
              <div key={sz}>
                <button
                  onClick={() => setSelectedSize(sz)}
                  className={`inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none shadow font-medium relative h-9 min-w-[46px] cursor-pointer gap-2 overflow-hidden rounded-[2px] bg-whiteShade px-4 py-3 text-center text-sm !leading-[14px] text-black ${
                    selectedSize === sz ? "ring-2 ring-blue-400" : ""
                  }`}
                >
                  <p className="text-xs font-medium uppercase leading-4 tracking-sm">
                    <span className="non-selectable z-10 font-normal text-neutral-800 select-none md:select-text">
                      {sz}
                    </span>
                  </p>
                </button>
                <div className="mt-1 text-center text-xs font-medium text-red-600 select-none md:select-text">
                  {sz === "XL" &&
                    (product.xlLeft ? `${product.xlLeft} Left` : "5 Left")}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <div>
        <div className="my-8 flex items-center gap-1">
          <img
            alt="img"
            src={product.returnIcon || "/icons/return.svg"}
            className="my-auto w-8 max-w-full object-contain object-center xs:w-6"
            loading="lazy"
          />
          <div className="flex grow basis-0 flex-col items-stretch justify-center self-stretch pr-3">
            <div className="whitespace-nowrap text-base font-normal capitalize leading-4 tracking-wide text-neutral-900 xs:text-xs select-none md:select-text">
              14 Days easy return or exchange
            </div>
          </div>
        </div>

        <div className="pb-7">
          <div className="max-md:px-5 flex flex-col items-start bg-white">
            <div className="text-base font-bold uppercase !leading-[19.2px] tracking-large text-neutral-900 select-none md:select-text">
              Check Delivery
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-full border border-solid border-neutral-400 px-3 py-[7.34px] md:min-h-[40px] md:w-7/12 w-full">
              <div className="flex w-full items-center justify-between gap-3">
                <div className="relative flex w-full items-center pr-2">
                  <img
                    alt="location"
                    src={product.locationIcon || "/icons/location.svg"}
                    className="h-[18px]"
                    loading="lazy"
                  />
                  <input
                    placeholder="Enter your PIN code"
                    type="tel"
                    className="ml-2 w-full bg-transparent text-sm font-normal leading-[22px] outline-none placeholder:text-neutral-600"
                    min="0"
                    maxLength={6}
                    value={pin}
                    onChange={(e) =>
                      setPin(e.target.value.replace(/[^0-9]/g, ""))
                    }
                  />
                </div>
              </div>

              <div className="h-full cursor-pointer" onClick={checkDelivery}>
                <div className="text-xs font-medium text-blue-600 select-none md:select-text">
                  Check
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-border w-full">
          {/* Product Details Accordion */}
          <div className="border-b px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5">
            <h3 className="flex">
              <button
                type="button"
                aria-expanded={accordionOpen.details}
                className="group flex flex-1 items-center justify-between transition-all py-0 text-xs font-bold uppercase leading-[14.4px] text-neutral-900 md:text-sm md:leading-[19.2px] md:tracking-large lg:text-base"
                onClick={() => toggleAccordion("details")}
              >
                Product Details
                <img
                  alt="icon"
                  src={
                    accordionOpen.details
                      ? "/icons/accordion_minus.svg"
                      : "/icons/accordion_plus.svg"
                  }
                  className="size-6 shrink-0 transition-transform duration-200 md:size-10"
                  loading="lazy"
                />
              </button>
            </h3>

            {accordionOpen.details && (
              <div className="overflow-hidden text-sm pt-3 md:pb-1">
                <div className="flex flex-wrap xs:gap-3">
                  <div className="flex w-full flex-row items-end">
                    <div className="whitespace-normal text-sm font-normal leading-[18px] text-neutral-500 md:w-full md:whitespace-normal xs:basis-5/12 select-none md:select-text">
                      Pattern:
                    </div>
                    <p className="pl-1 text-sm font-medium leading-[18px] text-neutral-900 md:ml-0 md:pl-0 xs:basis-7/12 select-none md:select-text">
                      {product.pattern || "Color Block"}
                    </p>
                  </div>

                  <div className="flex w-full flex-row items-end">
                    <div className="whitespace-normal text-sm font-normal leading-[18px] text-neutral-500 md:w-full md:whitespace-normal xs:basis-5/12 select-none md:select-text">
                      Pack Of:
                    </div>
                    <p className="pl-1 text-sm font-medium leading-[18px] text-neutral-900 md:ml-0 md:pl-0 xs:basis-7/12 select-none md:select-text">
                      {product.packOf || "1"}
                    </p>
                  </div>

                  <div className="flex w-full flex-row items-end">
                    <div className="whitespace-normal text-sm font-normal leading-[18px] text-neutral-500 md:w-full md:whitespace-normal xs:basis-5/12 select-none md:select-text">
                      Gender:
                    </div>
                    <p className="pl-1 text-sm font-medium leading-[18px] text-neutral-900 md:ml-0 md:pl-0 xs:basis-7/12 select-none md:select-text">
                      {product.gender || "Men"}
                    </p>
                  </div>

                  <div className="flex w-full flex-row items-end">
                    <div className="whitespace-normal text-sm font-normal leading-[18px] text-neutral-500 md:w-full md:whitespace-normal xs:basis-5/12 select-none md:select-text">
                      Neckline:
                    </div>
                    <p className="pl-1 text-sm font-medium leading-[18px] text-neutral-900 md:ml-0 md:pl-0 xs:basis-7/12 select-none md:select-text">
                      {product.neckline || "Collared"}
                    </p>
                  </div>

                  <div className="flex w-full flex-row items-end">
                    <div className="whitespace-normal text-sm font-normal leading-[18px] text-neutral-500 md:w-full md:whitespace-normal xs:basis-5/12 select-none md:select-text">
                      Occasion:
                    </div>
                    <p className="pl-1 text-sm font-medium leading-[18px] text-neutral-900 md:ml-0 md:pl-0 xs:basis-7/12 select-none md:select-text">
                      {product.occasion || "Winter Wear"}
                    </p>
                  </div>

                  <div className="flex w-full flex-row items-end">
                    <div className="whitespace-normal text-sm font-normal leading-[18px] text-neutral-500 md:w-full md:whitespace-normal xs:basis-5/12 select-none md:select-text">
                      Fabric:
                    </div>
                    <p className="pl-1 text-sm font-medium leading-[18px] text-neutral-900 md:ml-0 md:pl-0 xs:basis-7/12 select-none md:select-text">
                      {product.fabric || "Nylon"}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pb-2 text-xs font-medium text-blue-500 select-none md:select-text">
                  View All
                </div>
              </div>
            )}
          </div>

          {/* About The Brand Accordion */}
          <div className="border-b px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5">
            <h3 className="flex">
              <button
                type="button"
                aria-expanded={accordionOpen.brand}
                className="group flex flex-1 items-center justify-between transition-all py-0 text-xs font-bold uppercase leading-[14.4px] text-neutral-900 md:text-sm md:leading-[19.2px] md:tracking-large lg:text-base"
                onClick={() => toggleAccordion("brand")}
              >
                About The Brand
                <img
                  alt="icon"
                  src={
                    accordionOpen.brand
                      ? "/icons/accordion_minus.svg"
                      : "/icons/accordion_plus.svg"
                  }
                  className=" size-6 shrink-0 transition-transform duration-200 md:size-10"
                  loading="lazy"
                />
              </button>
            </h3>

            {accordionOpen.brand && (
              <div className="overflow-hidden text-sm pt-3 md:pb-1">
                <p className="text-sm text-neutral-600">
                  {product.brandDescription || "Brand description goes here."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
