import React from "react";

const ProductCard = ({
  link = "#",
  brand,
  title,
  price,
  oldPrice,
  discount,
  image,
  rating,
}) => {
  

  return (
    <div className="">
      <a data-testid="product-card" href={link} target="_self" className="">
        <div className="bg-transparent relative rounded md:rounded-lg">
          <img
            alt="product card"
            src={image}
            loading="lazy"
            className="rounded-lg w-full h-full"
          />
          {rating && (
            <div className="absolute bottom-3 left-3 bg-[#fff] rounded-[33px] p-1.25 px-2 flex justify-center items-center">
              <span
                className="bg-contain h-[9px] w-[9px] mr-[4px] "
                style={{
                  backgroundImage:
                    "url(https://constant.myntassets.com/pwa/assets/img/2bce8a2b-e1d5-465a-8980-62f3d778377c1548353615799-Fill-90-Copy-7.png)",
                }}
              ></span>
              <p className="text-[12px] leading-[1]">{rating}</p>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="bg-transparent">
          <div className="lg:text-sm xl:text-base mt-3 line-clamp-1 break-words text-left text-md font-medium !leading-[18px] text-ssBlack md:mt-4 md:text-base select-none md:select-text">
            {brand}
          </div>
          <div className="mt-1 line-clamp-2 min-h-[36px] overflow-hidden break-words text-left text-xs font-light !leading-[18px] tracking-xs text-neutral-800  md:text-base xl:text-sm select-none md:select-text">
            {title}
          </div>

          {/* Price Section */}
          <div className="bg-transparent mt-2 flex flex-row items-center justify-start gap-[8px] md:mt-3 xs:gap-[6px]">
            <div className="text-xs !font-normal !leading-[16px] text-black md:text-base xs:!leading-[12px] select-none md:select-text">
              ₹{price}
            </div>

            <p className="text-xs !font-normal !leading-[10.42px] !min-h-0 tracking-[0.326px] text-neutral-400 line-through dark:text-neutral-500 md:text-base">
              ₹{oldPrice}
            </p>

            <p className="text-[10px] font-medium !leading-3 text-orange-700 md:text-sm">
              {discount}% OFF
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
