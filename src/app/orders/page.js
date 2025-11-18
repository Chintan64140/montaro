import React from "react";
import Allorders from "../../../Files/pages/All-orders";
import Script from "next/script";

export const metadata = {
  title: "Orders | The Montaro",
  description:
    "View your order history, track orders, and manage your purchases on The Montaro.",
  keywords: [
    "The Montaro Orders",
    "Montaro Orders",
    "Montaro order history",
    "Track orders Montaro",
    "Track orders Montaro Jackets",

  ],
  alternates: {
    canonical: "https://themontaro.vercel.app/orders",
  },
  openGraph: {
    title: "Orders | The Montaro",
    description: "Check and manage all your orders on The Montaro.",
    url: "https://themontaro.vercel.app/orders",
    siteName: "The Montaro",
  },
};

const Orders = () => {
  return (
    <>
      {/* JSON-LD STRUCTURED DATA */}
      <Script
        id="orders-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Orders – The Montaro",
            url: "https://themontaro.vercel.app/orders",
          }),
        }}
      />

      {/* SEO H1 wrapper */}
      <div>
        {/* <h1 className="text-xl font-bold mb-4">Your Orders – The Montaro</h1> */}
        <Allorders />
      </div>
    </>
  );
};

export default Orders;
