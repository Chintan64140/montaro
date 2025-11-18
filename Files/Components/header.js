import React from "react";

const Header = () => {
  function greet() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return "Good Morning!";
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon!";
    } else if (hour >= 17 && hour < 21) {
      return "Good Evening!";
    } else {
      return "Good Night!";
    }
  }

  console.log(greet());

  return (
    <div className="w-full p-2 bg-[#221f20]">
      <img src="/assets/Logo/logo.png" className="h-12" />
      <div className="flex justify-between items-center pt-4">
        <p className="text-[#cfcfcf] text-[14px]  momo">{greet()}</p>
        <div className="flex items-center gap-5 md:gap-8">
          {/* <img
            alt="near-by-store"
            src="https://www.shoppersstop.com/icons/store_black.svg"
            className="cursor-pointer dark:invert invert"
            loading="eager"
            width={24}
          /> */}

          {/* <div className="relative">
            <img
              alt="wish-list"
              src="https://www.shoppersstop.com/icons/heart_black.svg"
              className="w-6 cursor-pointer dark:invert invert"
              loading="eager"
            />
          </div> */}

          <div className="relative">
            <img
              alt="shopping-cart"
              src="https://www.shoppersstop.com/icons/bag_black.svg"
              className="size-6 cursor-pointer dark:invert invert"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
