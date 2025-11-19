"use client";
import React, { useEffect, useState } from "react";
import HeroCarousel from "../../Components/carousel";
import { products } from "../../Data/products";
import ProductCard from "./productCard";
import { brands } from "../../Data/brands";
import CategoryScroller from "../../Components/CategoryScroller";
import Carousel from "../../Components/rtl_carousel";

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
  const slides = [
    {
      id: 1,
      title: "Discover Premium Products",
      subtitle: "Top brands, best quality, delivered to your doorstep.",
      img: "https://cmsimages.shoppersstop.com/Mens_day_main_kv_app_9375684089/Mens_day_main_kv_app_9375684089.png",
    },
    {
      id: 2,
      title: "Exclusive Deals Everyday",
      subtitle: "Save big on trending fashion and gadgets.",
      img: "https://cmsimages.shoppersstop.com/PB_fest_main_kv_app_fa1b8eb0c4/PB_fest_main_kv_app_fa1b8eb0c4.png",
    },

    {
      id: 3,
      title: "Exclusive Deals Everyday",
      subtitle: "Save big on trending fashion and gadgets.",
      img: "https://cmsimages.shoppersstop.com/Women_Indian_main_banner_app_de6650f5f6/Women_Indian_main_banner_app_de6650f5f6.png",
    },
    {
      id: 3,
      title: "Shop Smart. Live Better.",
      subtitle: "Experience a seamless and fast shopping journey.",
      img: "https://cmsimages.shoppersstop.com/Main_KV_3feba984d6/Main_KV_3feba984d6.png",
    },
  ];

  const cardImages = [
    "https://cmsimages.shoppersstop.com/Celio_ac39ba9643/Celio_ac39ba9643.png",
    "https://cmsimages.shoppersstop.com/TH_a67d078bcc/TH_a67d078bcc.png",
    "https://cmsimages.shoppersstop.com/Jack_and_jones_b5998456e6/Jack_and_jones_b5998456e6.png",
    "https://cmsimages.shoppersstop.com/Ck_6e91f6968b/Ck_6e91f6968b.png",
    "https://cmsimages.shoppersstop.com/Rare_rabbit_f7af833880/Rare_rabbit_f7af833880.png",
  ];

  const indianCharmCards = [
    {
      href: "/women-indian-fusion-wear/c-1462?filter=brand_uFilter%253A%2522Libas%2522",
      img: "https://cmsimages.shoppersstop.com/libas_static_app_3b34aa5cbe/libas_static_app_3b34aa5cbe.png",
    },
    {
      href: "/men-indian-festive-wear/c-1047?filter=brand_uFilter%253A%2522Manyavar%2522",
      img: "https://cmsimages.shoppersstop.com/Manyavar_b1bfc3963e/Manyavar_b1bfc3963e.png",
    },
    {
      href: "/women-indian-fusion-wear/c-1462?filter=brand_uFilter%253A%2522Autumn%2520Lane%2522",
      img: "https://cmsimages.shoppersstop.com/Autumn_Lane_8fbf55551f/Autumn_Lane_8fbf55551f.png",
    },
    {
      href: "/men-indian-festive-wear/c-1047?filter=brand_uFilter%253A%2522Ethnic%2520India%2522",
      img: "https://cmsimages.shoppersstop.com/Ethnic_India_7ac7105af2/Ethnic_India_7ac7105af2.png",
    },
    {
      href: "/women-indian-fusion-wear/c-1462?filter=brand_uFilter%253A%2522Aurelia%2522",
      img: "https://cmsimages.shoppersstop.com/Aurelia_0910d20fd8/Aurelia_0910d20fd8.png",
    },
    {
      href: "/women-indian-fusion-wear/c-1462?filter=brand_uFilter%253A%2522neerus%2522",
      img: "https://cmsimages.shoppersstop.com/Neerus_dc90b27ffe/Neerus_dc90b27ffe.png",
    },
  ];

  return (
    <div className="monts ">
      <div className="py-4 flex flex-col ">
        {/* <div className="pb-4">
          <CategoryScroller />
        </div> */}
        <Carousel
          animate={false}
          images={slides.map((iit) => iit.img)}
          styles={{
            height: "50vh",
            borderRadius: "0px",
          }}
        />
        <div
          className="w-full"
          style={{ backgroundColor: "rgb(255, 255, 255)", height: "30px" }}
        ></div>
        <div>
          <div
            className="bg-transparent mx-4 box-content flex-row md:mx-[70px]"
            data-testid="herobanner"
          >
            <div
              className="bg-transparent cursor-pointer"
              data-testid="HeroBanner-single-card-component"
            >
              <a
                target="_self"
                href="/search/result?q=*&filter=categoryPath1_uFilter%253A%2522Men%2522%2523categoryPath2_uFilter%253A%2522Casual%2520Wear%252CFormal%2520Wear%252CWatches%2522%2523discountPercent_uFilter%253A%252250%2525%252C30%2525%252C40%2525%252C20%2525%252C25%2525%2522"
              >
                <img
                  alt="hero_banner"
                  src="https://cmsimages.shoppersstop.com/brands_to_celebrate_strip_app_7ed704d3fb/brands_to_celebrate_strip_app_7ed704d3fb.png"
                  className="md:pl-[2px]"
                  loading="eager"
                />
              </a>
            </div>
          </div>
          <div
            className="bg-transparent"
            style={{ background: "rgb(231, 235, 237)" }}
          >
            <div
              className="bg-transparent carousel gap-5 py-4 pl-4 md:pl-8 lg:gap-8 lg:pl-14 xl:pl-[70px] bg-[#f5f5f5]"
              data-testid="carousel"
            >
              <div className="flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8">
                <div className="flex gap-4 overflow-x-auto hide-scrollbar">
                  {cardImages.map((src, i) => (
                    <div key={i} className="min-w-[167px]">
                      <div
                        className="mx-1 h-[220px] cursor-pointer rounded-lg md:mx-2 md:h-[268px] lg:h-[316px] xl:h-[366px]"
                        data-testid="deals-card-container"
                        style={{
                          background:
                            "linear-gradient(188deg, rgba(0,0,0,0) 21.79%, rgba(0,0,0,0.32) 54.24%, rgba(0,0,0,0.72) 97.5%)",
                          // mixBlendMode: "hard-light",
                        }}
                      >
                        <img
                          src={src}
                          className="size-full rounded-lg"
                          loading="lazy"
                          alt={`card-${i}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div
            className="bg-transparent mx-4 box-content flex-row md:mx-[70px]"
            data-testid="herobanner"
          >
            <div
              className="bg-transparent cursor-pointer"
              data-testid="HeroBanner-single-card-component"
            >
              <a
                target="_self"
                href="/search/result?q=Shoppers+Stop+Exclusive&filter=discountPercent_uFilter%253A%252260%2525%252C55%2525%252C50%2525%252C40%2525%252C53%2525%252C56%2525%252C54%2525%252C59%2525%252C62%2525%252C57%2525%252C46%2525%252C63%2525%252C67%2525%2522"
              >
                <img
                  alt="hero_banner"
                  src="https://cmsimages.shoppersstop.com/House_of_exclusive_strip_app_8033bf22bf/House_of_exclusive_strip_app_8033bf22bf.png"
                  className="md:pl-[2px]"
                  loading="eager"
                />
              </a>
            </div>
          </div>
          <div>
            <div className="bg-transparent mx-4 box-content flex-row md:mx-[70px]">
              <div className="bg-transparent cursor-pointer">
                <a
                  target="_self"
                  href="/search/result?q=*&amp;filter=brand_uFilter%253A%2522Stop%252CLife%252CKashish%252CFRATINI%252CHaute%2520Curry%252CKarrot%252CBandeya%252CU%2520R%2520YOU%2522&amp;page=1&amp;sort=new_arrivals"
                >
                  <img
                    alt="hero_banner"
                    src="https://cmsimages.shoppersstop.com/Small_Strip_711d90288b/Small_Strip_711d90288b.png"
                    className="md:pl-[2px]"
                    loading="eager"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="text-left text-base font-medium capitalize leading-xs md:text-center md:text-xl lg:text-2xl xl:text-[2rem] mb-5 md:mb-8 select-none md:select-text">
            <div data-testid="">
              <div>
                <strong>
                  <span style={{ color: "#A3A3A3" }}>The</span>{" "}
                  <span style={{ color: "#171717" }}>Indian Charm</span>
                  <br />
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: "8px",
                      color: "#171717",
                    }}
                  >
                    Extra <span style={{ color: "#B91C1C" }}>₹1000 Off*</span> |
                    Use Code : <span style={{ color: "#B91C1C" }}>SSDEAL</span>
                  </span>
                  <br />
                </strong>
              </div>
            </div>
          </div>

          <Carousel
            animate={true}
            images={indianCharmCards.map((iit) => iit.img)}
            dotsDistance="-20px"
            styles={{
              height: "auto",
              borderRadius: "0px",
            }}
          />
        </div>
      </div>

      {/* <HeroCarousel /> */}
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
