import React, { useEffect, useState } from "react";
import { getRandom10, toKeyValueArray } from "../../func";
import { products } from "../../Data/products";
import ProductCard from "../Landing/productCard";
import { useCart } from "../../Context/CartContext";
import { toast } from "react-toastify";

export function ProductCardDetails({ product }) {
  //   const result =
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  console.log(cart, "dijiodjcido");
  const [selectedSize, setSelectedSize] = useState("");
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    setSimilar(getRandom10(products));
  }, [products]);

  const prodincart = cart.find((prod) => prod.id == product.id);
  const cartQty = prodincart?.quantity;

  const prod = { ...product };

  return (
    <div className="mx-auto max-w-full md:min-h-screen">
      <div className="bg-transparent">
        {/* IMAGE CAROUSEL */}

        {/* FIXED BOTTOM BUTTONS */}

        <div className="fixed bottom-0 z-[99] w-full">
          {prodincart ? (
            <div className="absolute bottom-0 w-full">
              <div
                className="bg-white flex flex-row items-center justify-between px-2 py-3 md:px-0"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px -2px 4px 0px",
                }}
              >
                {/* Quantity Controls */}
                <div className="flex basis-[19%] items-center justify-between gap-4">
                  {/* Minus Button */}
                  <div className="flex cursor-pointer justify-center rounded-full border-[1.5px] border-neutral-400 p-2">
                    <div
                      className="w-3 md:w-[13.71px]"
                      onClick={() => {
                        removeFromCart(prodincart.id);
                      }}
                    >
                      <img
                        alt="minus"
                        src="https://www.shoppersstop.com/icons/minus.svg"
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Count */}
                  <div className="text-base font-medium text-neutral-950 select-none md:select-text">
                    {cartQty}
                  </div>

                  {/* Plus Button Disabled */}
                  <div className="flex justify-center rounded-full border-[1.5px] border-neutral-400 p-2 cursor-not-allowed opacity-40">
                    <div
                      className="w-3 md:w-[13.71px]"
                      onClick={() => {
                        addToCart(prodincart);
                      }}
                    >
                      <img
                        alt="plus"
                        src="https://www.shoppersstop.com/icons/plus.svg"
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* View Bag Button */}
                <div className="flex basis-3/5 items-center justify-evenly w-full">
                  <button
                    onClick={() => {}}
                    className="inline-flex bg-[#221f20] items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-blackSS shadow text-white h-9 font-medium rounded-sm gap-2 disabled:bg-neutral-300 disabled:opacity-100 w-[90%] p-6"
                  >
                    <img
                      alt="bag_white"
                      src="https://www.shoppersstop.com/icons/bag_white.svg"
                      loading="lazy"
                    />
                    <p className="text-xs font-medium uppercase leading-4 tracking-sm md:text-base md:leading-4 py-2">
                      View Bag
                    </p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="max-md:px-3 flex items-center gap-2 bg-white md:gap-6 xs:mx-0 xs:pl-3 px-0"
              style={{ boxShadow: "rgba(0,0,0,0.05) 0px -2px 4px" }}
            >
              <div className="flex  w-full justify-between gap-4 my-3 flex-row-reverse">
                <button
                  onClick={() => {
                    if (selectedSize) {
                      addToCart({ ...product, size: selectedSize });
                    } else {
                      toast.error("Select Size", {
                        position: "bottom-center",
                        autoClose: 3000,
                      });
                    }
                  }}
                  className="items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none shadow text-white h-9 font-medium rounded-sm gap-0 disabled:bg-neutral-300 disabled:opacity-100 flex w-full bg-neutral-800 md:min-h-[56px] md:py-[17.5px] px-1 py-0"
                >
                  <div className="bg-transparent flex items-center gap-2">
                    <img
                      src="https://www.shoppersstop.com/icons/bag_white.svg"
                      className="size-5"
                    />
                    <p className="text-xs font-medium uppercase">Add to bag</p>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* PRODUCT NAME + PRICE */}
        <div className="px-4 monts">
          <div className="flex flex-col">
            <h1 className="flex w-full flex-col mt-3">
              <div className="flex w-full items-start justify-between">
                <div className="text-2xl font-medium text-neutral-900 monts">
                  {prod.brand}
                </div>
              </div>

              <div className="mt-1 text-base font-light text-neutral-900 monts">
                {prod.name}
              </div>
            </h1>

            <div className="mt-5 flex items-stretch gap-2 self-stretch">
              <div className="flex items-stretch justify-between gap-2">
                <div className="flex select-none md:select-text">
                  <div className="grow whitespace-nowrap text-xl font-medium leading-5 text-black">
                    ₹{prod?.priceObj?.selling_price}
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-1 select-none md:select-text">
                  <div className="grow whitespace-nowrap text-xl font-medium leading-5 tracking-wide text-neutral-400">
                    MRP{" "}
                  </div>
                  <div className="ml-1 grow whitespace-nowrap text-xl font-medium leading-5 tracking-wide text-neutral-400 line-through">
                    ₹{prod?.priceObj?.mrp}
                  </div>
                </div>
              </div>
              <div className="my-auto grow self-center whitespace-nowrap text-base font-medium leading-4 text-orange-700 select-none md:select-text">
                {prod?.priceObj?.discount}% OFF
              </div>
            </div>

            <div className="mt-1 text-xs text-neutral-700">
              inclusive of all taxes
            </div>
          </div>

          {/* SIZE SELECTOR */}
          <div className="flex flex-col max-w-[460px] monts pt-6">
            <div>
              <div className="flex items-center gap-3 justify-between">
                <span className="text-sm text-neutral-500">Select Size</span>
              </div>

              <div className="hide-scrollbar flex gap-3 overflow-x-auto pt-2">
                {prod?.sizes?.map((s) => (
                  <button
                    onClick={() => {
                      setSelectedSize(s.size);
                    }}
                    key={s.size}
                    style={{
                      transition: "0.2s",
                    }}
                    className={`inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none shadow font-medium disabled:bg-neutral-300 disabled:opacity-100 relative h-9 min-w-[46px] cursor-pointer gap-2 overflow-hidden rounded-[2px]  px-4 py-3 text-center text-sm !leading-[14px]  ${
                      selectedSize == s.size ? "text-[#fff]" : "text-black"
                    } ${
                      selectedSize == s.size ? "bg-[#221f20]" : "bg-[#f2f2f2]"
                    }`}
                  >
                    {s?.size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RETURN INFO */}
          <div className="my-8 flex items-center gap-1">
            <img
              src="https://www.shoppersstop.com/icons/return.svg"
              className="my-auto w-6 max-w-full object-contain object-center xs:w-4"
            />
            <div className="text-base text-neutral-900">
              14 Days easy return or exchange
            </div>
          </div>

          {/* CHECK DELIVERY */}
          <div className="pb-7">
            <div className="flex flex-col items-start bg-white">
              <div className="text-base font-bold uppercase">
                Check Delivery
              </div>

              <div className="mt-6 flex items-center gap-3 border rounded-full px-3 py-[7px] w-full md:w-7/12">
                <div className="flex w-full items-center">
                  <img
                    src="https://www.shoppersstop.com/icons/location.svg"
                    className="h-[18px]"
                  />
                  <input
                    type="tel"
                    placeholder="Enter your PIN code"
                    maxLength={6}
                    className="ml-2 w-full bg-transparent text-sm outline-none"
                  />
                </div>
                <div className="text-xs font-medium text-blue-600 cursor-pointer">
                  Check
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 self-stretch">
              <img
                alt="img"
                src="https://www.shoppersstop.com/icons/delivery_time.svg"
                className="my-auto w-8 object-contain object-center"
                loading="lazy"
              />
              <div
                className="text-sm font-normal capitalize leading-[16.41px] tracking-wide text-blackLight select-none md:select-text"
                data-testid="standard-delivery"
              >
                Standard Estimated Delivery in 3-5 working days.
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4 ">
              <img
                alt="img"
                src="https://www.shoppersstop.com/icons/delivery_estimate.svg"
                className="w-8 object-contain object-center"
                loading="lazy"
              />
              <div className="flex flex-wrap items-center gap-2 text-sm font-normal capitalize leading-[16.41px] tracking-wide text-blackLight ">
                <div className="select-none md:select-text">
                  Express Delivery Not Available{" "}
                </div>
                <div className="size-1 rounded-full bg-black"></div>
                <div className="select-none md:select-text">
                  Full COD Available
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4 self-stretch">
              <img
                alt="img"
                src="https://www.shoppersstop.com/icons/delivery_express.svg"
                className="w-8 object-contain object-center opacity-40"
                loading="lazy"
              />
              <div className="flex flex-wrap items-center gap-1 text-sm font-normal capitalize leading-[16.41px] tracking-wide text-blackLight">
                <div className="opacity-40 select-none md:select-text">
                  Express Store Pick Up Not Available
                </div>
              </div>
            </div>
          </div>

          {/* ACCORDION — PRODUCT DETAILS */}
          <div className="accordion-border border rounded border-solid border-[#ddd] p-4 py-3">
            <div className="text-xs font-bold uppercase">Product Details</div>
            <div className="pt-3">
              <div className="flex flex-wrap gap-3">
                {toKeyValueArray(prod.specifications).map((item, index) => (
                  <div key={index} className="flex w-full">
                    <div className="text-sm text-neutral-500 w-1/2">
                      {item.key}:
                    </div>
                    <div className="text-sm font-medium text-neutral-900">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIMILAR PRODUCTS HEADER */}
          <div className="mt-10">
            <h2 className="text-xl font-medium">
              <span className="text-neutral-400">Similar </span>
              <span className="text-neutral-900">Products</span>
            </h2>
            <div className="carousel mt-5 flex overflow-auto gap-4">
              {similar.map((item, index) => {
                const imagess = item.imgdata.images.filter(
                  (iii) => iii.type == "background"
                );

                const pric_e = item.priceObj;

                return (
                  <div key={index} className="min-w-[50vw] h-[auto]">
                    <ProductCard
                      brand={item.brand}
                      title={item.name}
                      price={pric_e.selling_price}
                      oldPrice={pric_e.mrp}
                      discount={pric_e.discount}
                      image={imagess[0].src}
                      link={`/prod/${item.id}`}
                      rating={
                        item.rating && item.rating_count
                          ? `${item.rating} | ${item.rating_count}`
                          : ""
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ height: "70px" }}></div>
      </div>
    </div>
  );
}
