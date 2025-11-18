import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-neutral-100 p-4  md:px-10 md:py-6 lg:px-14 lg:py-8 xl:px-20 xl:py-10">
        <div className="flex flex-col justify-between md:flex-row md:px-1">
          <div className="footerXXS flex gap-2 border-b pb-4 md:flex-col md:gap-5 md:border-0 md:pb-0">
            <h4 className="text-xs md:text-sm lg:text-base xl:text-lg text-ssBlack font-normal uppercase daark:text-gold md:leading-5 lg:!leading-[25.56px] select-none md:select-text">
              Pay securely by
            </h4>

            <div className="flex items-center gap-1 lg:gap-2">
              <img
                alt="Visa-Card"
                src="https://www.shoppersstop.com/images/visa.png"
                className="h-6 w-8 lg:h-6 lg:w-10 xl:h-8 xl:w-[3.25rem]"
                loading="lazy"
              />
              <img
                alt="Master-Card"
                src="https://www.shoppersstop.com/images/masters_card.png"
                className="h-6 w-8 lg:h-6 lg:w-10 xl:h-8 xl:w-[3.25rem]"
                loading="lazy"
              />
              <img
                alt="American-Express"
                src="https://www.shoppersstop.com/images/american_express.png"
                className="h-6 w-8 lg:h-6 lg:w-10 xl:h-8 xl:w-[3.25rem]"
                loading="lazy"
              />
              <img
                alt="Rupay"
                src="https://www.shoppersstop.com/images/rupay.png"
                className="h-6 w-8 lg:h-6 lg:w-10 xl:h-8 xl:w-[3.25rem]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="border-b py-4 md:border-0 md:py-0">
            <h4 className="text-xs md:text-sm lg:text-base xl:text-lg text-ssBlack font-normal uppercase daark:text-gold md:mb-1 md:!leading-[25.56px] lg:mb-2 select-none md:select-text">
              Reach out to us
            </h4>

            <div className="text-[10px] md:text-xs lg:text-sm xl:text-base text-ssBlack font-normal daark:text-white md:leading-3 lg:leading-6 select-none md:select-text">
              For any queries, please write to us:
              <div className="text-[10px] md:text-xs lg:text-sm xl:text-base text-ssBlack cursor-pointer font-medium underline daark:text-white md:block select-none md:select-text">
                <a href="mailto:customercare@montaro.com">
                  {" "}
                  customercare@montaro.com
                </a>
              </div>
            </div>
          </div>

          {/* <div className="footerXXS flex items-center gap-2 border-b py-4 md:flex-col md:items-start md:gap-4 md:border-0 md:py-0">
          <h4 className="text-xs md:text-sm lg:text-base xl:text-lg text-ssBlack font-normal uppercase !leading-[25.56px] daark:text-gold select-none md:select-text">
            Download the app
          </h4>

          <div className="flex items-center gap-2">
            <img alt="google-play" src="https://www.shoppersstop.com/images/footer_payment_paly_store_app.png" className="h-7 cursor-pointer xl:h-[34.57px]" loading="lazy" />
            <img alt="app-store" src="https://www.shoppersstop.com/images/footer_appstore.png" className="h-7 cursor-pointer xl:h-[35px]" loading="lazy" />
          </div>
        </div> */}

          <div className="footerXXS flex items-center gap-2 border-b py-4 md:flex-col md:items-start md:gap-0 md:border-0 md:py-0">
            <h4 className="text-xs md:text-sm lg:text-base xl:text-lg text-ssBlack font-normal text-left uppercase !leading-[25.56px] daark:text-gold md:mb-2 lg:mb-4 select-none md:select-text">
              Verified by
            </h4>

            <div className="flex items-center gap-2 lg:gap-4">
              <img
                alt="entrust"
                src="https://www.shoppersstop.com/images/entrust.png"
                className="size-5 xl:size-[35px]"
                loading="lazy"
              />
              <img
                alt="visa-verified"
                src="https://www.shoppersstop.com/images/visa_verified.png"
                className="h-4 w-7 xl:h-8 xl:w-14"
                loading="lazy"
              />
              <img
                alt="master-card-verified"
                src="https://www.shoppersstop.com/images/master_card.png"
                className="h-4 w-9 xl:h-[25px] xl:w-[70px]"
                loading="lazy"
              />
              <img
                alt="dss"
                src="https://www.shoppersstop.com/images/dss.png"
                className="h-[15px] w-[38px] xl:h-[30px] xl:w-[76px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 border-0 border-dividerShade border-opacity-[0.34] py-4 daark:border-neutral-600 md:my-6 md:flex-row md:items-center md:border lg:my-8 lg:gap-8 lg:py-6 xl:my-10 xl:gap-16 xl:py-8">
          {/* <div className="flex items-center gap-2 border-b border-divider pb-4 md:border-0 md:pb-0 lg:gap-4 xl:gap-5">
          <p className="text-xs lg:text-base xl:text-lg text-ssBlack font-normal uppercase !leading-[25.56px] daark:text-gold md:text-xs select-none md:select-text">Follow us on</p>

          <a href="https://www.facebook.com/shoppersstopindia" target="_self" rel="noreferrer" />
          <a href="https://twitter.com/shoppersstop" target="_self" rel="noreferrer">
            <img alt="twitter-icon" src="https://cmsimages.shoppersstop.com/twitter_b1a5711e35/twitter_b1a5711e35.png" className="size-5 cursor-pointer xl:size-[42px]" loading="lazy" />
          </a>

          <a href="https://www.instagram.com/shoppers_stop/" target="_self" rel="noreferrer">
            <img alt="instagram-icon" src="https://cmsimages.shoppersstop.com/Instagram_d01a55135b/Instagram_d01a55135b.png" className="size-5 cursor-pointer xl:size-[42px]" loading="lazy" />
          </a>
        </div> */}

          <div className="footerXXS flex justify-between gap-2.5 md:items-center">
            <div className="flex flex-col items-center gap-2 md:flex-row md:items-center lg:gap-4">
              <img
                alt="easy-exchange"
                src="https://www.shoppersstop.com/icons/easy_exchange.svg"
                className="size-8 xl:size-[42px]"
                loading="lazy"
              />
              <p className="text-[10px] font-medium capitalize !leading-[27px] text-ssBlack daark:text-gold md:text-sm lg:text-base xl:text-lg select-none md:select-text">
                Easy exchange
                <br />& return
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 md:flex-row lg:gap-4">
              <img
                alt="secure-payment"
                src="https://www.shoppersstop.com/icons/secure_payment.svg"
                className="size-8 xl:size-[42px]"
                loading="lazy"
              />
              <div>
                <p className="text-center text-[10px] font-medium capitalize !leading-[27px] text-ssBlack daark:text-gold md:text-sm lg:text-base xl:text-lg select-none md:select-text">
                  Secure payment
                </p>
                <p className="text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-center capitalize text-neutral-500 daark:text-white md:text-start select-none md:select-text">
                  Secure payment
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 md:flex-row lg:gap-4">
              <img
                alt="express-pickup"
                src="https://www.shoppersstop.com/icons/express_pickup.svg"
                className="size-8 xl:size-[35px]"
                loading="lazy"
              />
              <div>
                <p className="text-center text-[10px] font-medium capitalize !leading-[27px] text-ssBlack daark:text-gold md:text-sm lg:text-base xl:text-lg select-none md:select-text">
                  Express Pickup
                </p>
                <p className="text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-center capitalize text-neutral-500 daark:text-white md:text-start select-none md:select-text">
                  Stores near you
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 md:flex-row lg:gap-4">
              <img
                alt="authentic-products"
                src="https://www.shoppersstop.com/icons/authentic_products.svg"
                className="size-8 xl:size-[40px]"
                loading="lazy"
                width="35"
                height="35"
              />
              <div>
                <p className="text-center text-[10px] font-medium capitalize !leading-[27px] text-ssBlack daark:text-gold md:text-sm lg:text-base xl:text-lg select-none md:select-text">
                  Authentic products
                </p>
                <p className="text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-center capitalize text-neutral-500 daark:text-white md:text-start select-none md:select-text">
                  100% Genuine
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-between px-[2%] py-4 md:px-[4.6%] md:pb-0 xl:py-8 xs:pb-[20vw] !pb-[60px] ">
        <span className="text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-normal text-copyRight darrk:text-white md:!text-xs md:!leading-[22px] select-none md:select-text">
          © Montaro. 2025-26. All Rights Reserved.
        </span>

        <nav
          aria-label="Footer legal"
          className="flex items-center gap-2 md:gap-[28px]"
        >
          <div className="text-[8px] md:text-[10px] lg:text-xs xl:text-sm cursor-pointer font-normal text-copyRight darrk:text-white md:!text-xs md:!leading-[16.8px] select-none md:select-text">
            Privacy Policy
          </div>

          <div className="text-[8px] md:text-[10px] lg:text-xs xl:text-sm cursor-pointer font-normal text-copyRight darrk:text-white md:!text-xs md:!leading-[16.8px] select-none md:select-text">
            Terms &amp; Conditions
          </div>

          <div className="text-[8px] md:text-[10px] lg:text-xs xl:text-sm cursor-pointer font-normal text-copyRight darrk:text-white md:!text-xs md:!leading-[16.8px] select-none md:select-text">
            Disclaimer
          </div>
        </nav>
      </div>
    </div>
  );
}
