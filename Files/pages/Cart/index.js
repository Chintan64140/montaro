"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../../Context/CartContext";
import { useOrder } from "../../Context/OrderContext";
import CartHeader from "../../Components/cartHeader";
import PriceDetails from "../../Components/cartPrice-Details";

const Cartpage = () => {
  const { cart } = useCart();
  const [totalPrice, setTotalPrice] = useState();
  const { addOrder } = useOrder();

  const placeOrder = () => {
    const newOrder = {
      id: crypto.randomUUID(),
      items: cart,
      total: 1200,
      status: "Pending",
      date: new Date().toISOString(),
      totalAmount: {
        ...totalPrice,
      },
      address: {},
      payment: "Pending",
    };

    addOrder(newOrder);
  };

  useEffect(() => {
    if (cart.length) {
      const totalMRP = cart.reduce(
        (sum, item) => sum + item.priceObj.mrp * item.quantity,
        0
      );
      const totalSell = cart.reduce(
        (sum, item) => sum + item.priceObj.selling_price * item.quantity,
        0
      );

      const totalDis = totalMRP - totalSell;
      const totalObj = {
        totalDis,
        totalMRP,
        totalSell,
      };

      setTotalPrice(totalObj);
    }
  }, [cart]);

  const totalItems = cart?.length;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="relative">
        <CartHeader green={0} />
        <div className="grid relative min-h-[72px] grid-cols-1 place-content-between gap-6 px-4 md:mx-14 md:grid-cols-3">
          <div className="max-md:pb-5 mb-8 flex flex-col items-stretch rounded monts border-[0.5px] border-dashed border-[#ca594d] bg-[#fdf8f8] px-6 py-5 md:pt-4">
            <div className="max-md:max-w-full flex items-center justify-between gap-5">
              <div className="text-xs font-bold uppercase leading-[14.4px] tracking-large text-neutral-900 md:text-base md:!leading-[19.2px]">
                Offers for you
              </div>
            </div>
            <div className="max-md:max-w-full mt-5 flex h-px shrink-0 flex-col bg-red-900 opacity-[20%]"></div>
            <div data-testid="offer">
              <div className="max-md:max-w-full mt-3 flex items-stretch justify-between gap-2">
                <img
                  alt="product_offer_icon"
                  src="https://www.shoppersstop.com/icons/temporary/product_offer_icon.svg"
                  className="aspect-square w-6 max-w-full shrink-0 overflow-hidden object-contain object-center"
                  loading="lazy"
                />
                <div className="my-auto shrink grow basis-auto self-center text-sm capitalize leading-4 text-neutral-500">
                  <span className="font-medium text-neutral-500">
                    Up to 90% Off
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 w-full monts rounded-lg border bg-white shadow-sm xs:order-4">
            <div className="bg-transparent">
              {/* ITEM COUNT */}
              <div className="mb-2 ml-4 mt-4 text-xs font-bold leading-[19.2px] tracking-wide text-neutral-900 md:ml-6 md:text-base select-none md:select-text">
                {totalItems} ITEM
              </div>

              <div className="p-6 xs:p-2">
                <div>
                  {/* PRODUCT CARD */}
                  {cart.map((item, index) => {
                    console.log(item, "sjiosjijiojiojio");
                    const immg = item.imagesData[0].src;

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-6"
                        data-item-type="CartProductCard"
                        data-product-id="98471"
                      >
                        {/* Product Image */}
                        <div className="flex w-full basis-2/5 cursor-pointer md:w-[133px] xs:w-[74px]">
                          <img
                            alt="product_img"
                            src={immg}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        {/* Details */}
                        <div className="w-full">
                          <div className="flex w-full items-start justify-between">
                            {/* Title */}
                            <div className="basis-10/12 cursor-pointer">
                              <div className="text-xs font-medium leading-[18px] text-neutral-900 md:text-base select-none md:select-text">
                                {item.brand}
                              </div>

                              <div className="text-xs font-light leading-[18px] text-neutral-800 md:text-sm select-none md:select-text">
                                {item.name}
                              </div>
                            </div>
                          </div>

                          {/* Size + Quantity */}
                          <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                            {/* Size */}
                            <div className="flex flex-row items-center md:gap-6 xs:gap-[15px]">
                              {/* Quantity */}
                              <div className="flex basis-2/5 items-center gap-1 md:gap-5">
                                {/* Count */}
                                <div className="mx-0 text-xs font-medium leading-4 text-neutral-950 md:mx-0 md:text-base select-none md:select-text">
                                  Quantity: {item.quantity}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Price */}
                          <div className="mt-4">
                            <div className="mt-1 text-xs font-medium leading-4 text-black md:text-base md:font-normal select-none md:select-text">
                              ₹{item?.priceObj?.selling_price}
                              <span>
                                <span className="ml-2 mr-1.5 font-normal text-neutral-400 line-through">
                                  ₹{item?.priceObj?.mrp}
                                </span>
                                <span className="text-sm font-medium text-orange-700 xs:text-[10px]">
                                  {item?.priceObj?.discount}% OFF
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <img
                        alt="delivery icon"
                        src="https://www.shoppersstop.com/icons/delivery_time.svg"
                        className="aspect-square w-4"
                        loading="lazy"
                      />
                      <div className="text-xs font-medium leading-4 text-neutral-600 xs:font-normal xs:text-neutral-900 select-none md:select-text">
                        Standard Delivery Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PriceDetails
            totalPrice={totalPrice}
            onClick={() => {
              placeOrder();
              window.location.href = "/cart/address";
            }}
          />
        </div>
        {/* <div className="absolute bottom-0 w-full z-10"> */}
        {/* <div
          className="flex flex-col items-center bg-white px-7 fixed bottom-0 left-0 w-full z-10000"
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px -2px 4px 0px" }}
        >
          <div className="bg-transparent flex w-full flex-row justify-between py-5">
            <div className="bg-transparent flex flex-col justify-center items-center">
              <div className="text-sm font-medium leading-[21px] text-ssBlack select-none md:select-text">
                ₹ {totalPrice?.totalSell?.toLocaleString()}
              </div>
            </div>
            <button
              onClick={() => {
                placeOrder();
                window.location.href = "/cart/address";
              }}
              className="inline-flex cursor-pointer  items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none  shadow text-white h-9 px-4 font-medium rounded-sm gap-0 disabled:bg-neutral-300 disabled:opacity-100 w-2/4 py-4 !bg-[#221f20]"
            >
              <p className="uppercase tracking-sm text-white text-xs font-medium leading-4 tracking-wide">
                PLACE ORDER
              </p>
            </button>
          </div>
        </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Cartpage;
