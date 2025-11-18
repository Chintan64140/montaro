"use client";
import React, { useEffect, useState } from "react";
import HeroCarousel from "../../Components/carousel";
import { products } from "../../Data/products";
import ProductCard from "./productCard";
import { brands } from "../../Data/brands";

const Landing = () => {
  const [productList, setProductList] = useState([...products]);
  const [selectedBrand, setSelectedBrand] = useState("");

  function getRandom65to95() {
    return Math.floor(Math.random() * (90 - 65 + 1)) + 65;
  }

  useEffect(() => {
    setProductList(
      selectedBrand
        ? products.filter(
            (item) => item.brand.toLowerCase() == selectedBrand.toLowerCase()
          )
        : products
    );
  }, [selectedBrand]);

  return (
    <div>
      <HeroCarousel />
      <div className="p-4 flex justify-between items-center">
        <p className="text-[18px] font-[600] momo">Winter Jackets</p>
        <p className="text-[14px] momo">{productList.length} Items</p>
      </div>
      <div
        style={{ whiteSpace: "nowrap", overflow: "auto" }}
        className="flex  nowrap p-1 gap-1 mb-4 px-4"
      >
        {brands.map((item) => {
          const samebrand = item == selectedBrand;
          return (
            <div
              key={item}
              className="border border-[#75757585] rounded-[20px] bg-[#f0f0f0] px-6 py-2 min-w-fit "
              style={{
                background: samebrand ? "#f0f0f0" : "#fefefeff",
              }}
              onClick={() => {
                if (selectedBrand == item) {
                  setSelectedBrand("");
                } else {
                  setSelectedBrand(item);
                }
              }}
            >
              <p className="leading-[1] text-[15px] poppins text-[#757575] font-[400]">
                {item}
              </p>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3 px-4">
        {productList.map((item, index) => {
          const imagess = item.imgdata.images.filter(
            (iii) => iii.type == "background"
          );

          const pric_e = item.priceObj;

          return (
            <div key={index}>
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
  );
};
export default Landing;
