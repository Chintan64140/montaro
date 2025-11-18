"use client";
import React, { useEffect, useState } from "react";
import Carousel from "../../Components/rtl_carousel";
import { useParams } from "next/navigation";
import { products } from "../../Data/products";
import ProductDetailCard from "./product-details-com";
import { ProductCardDetails } from "./prod-det";

const ProductPage = ({}) => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState();
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (products && id) {
      // setProductDetails();
      const prod = products.find((iit) => iit.id == id);
      const images = prod?.imgdata?.images?.filter(
        (img) => img.type === "background"
      );

      const prods = { ...prod, imagesData: images };
      setProductDetails(prods);
    }
  }, [id, products]);

  // console.log(productDetails);
  if (productDetails) {
    return (
      <div>
        <Carousel
          animate={false}
          images={productDetails.imagesData.map((iit) => iit.src)}
          rating={productDetails.rating}
        />
        <div className="pt-8">
          <ProductCardDetails product={productDetails} />
          {/* <ProductDetailCard product={productDetails} /> */}
          {/* <ProductPage /> */}
          {/* {productDetails && (
        <Carousel images={productDetails.images.map((iit) => iit.src)} />
      )} */}
        </div>
      </div>
    );
  }
};

export default ProductPage;
