import Image from "next/image";

const SizeChartModal = ({ onClose }) => {
  const sizeData = [
    { size: "S", brand: "S", bust: 112.8, shoulder: 47.2, length: 66 },
    { size: "M", brand: "M", bust: 117.9, shoulder: 48.5, length: 68.1 },
    { size: "L", brand: "L", bust: 122.9, shoulder: 49.8, length: 70.1 },
    { size: "XL", brand: "XL", bust: 128, shoulder: 51.1, length: 71.9 },
  ];

  return (
    <div className="fixed inset-0 z-[102] flex flex-col bg-white md:rounded-l-2xl overflow-hidden animate-in fade-in slide-in-from-bottom">
      {/* Header */}
      <div className="flex items-center gap-4 px-5 py-3 border-b">
        <button onClick={onClose}>
          <Image src="/icons/leftarrow.svg" alt="back" width={30} height={30} />
        </button>
        <h2 className="text-xl font-medium">Size Chart</h2>
      </div>

      {/* Product info */}
      <div className="overflow-y-auto">
        <div className="px-7 py-6">
          <div className="flex gap-5">
            <Image
              src="https://images-magento.shoppersstop.com/pub/media/catalog/product/A24325592YAFWHI/A24325592YAFWHI_WHITE/A24325592YAFWHI_WHITE.jpg_2000Wx3000H"
              alt="Product"
              width={140}
              height={180}
              className="object-cover"
            />

            <div>
              <p className="text-xl font-semibold">CALVIN KLEIN</p>
              <p className="text-lg text-neutral-800 mt-1">
                Color Block Nylon Regular Fit Men Jacket
              </p>
              <p className="text-lg font-medium mt-2">₹11999</p>
            </div>
          </div>

          {/* Toggle & Divider */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex cursor-pointer">
              <div className="px-4 py-1 border rounded-l bg-black text-white text-sm">
                CM
              </div>
              <div className="px-4 py-1 border rounded-r text-sm">IN</div>
            </div>
            <p className="text-sm text-blue-600 cursor-pointer">
              How to Measure
            </p>
          </div>

          <div className="h-px bg-gray-300 my-5"></div>

          {/* Size Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[500px]">
              {/* Table header */}
              <div className="grid grid-cols-5 gap-4 text-sm font-medium text-black">
                <span>Size</span>
                <span className="text-center">Brand Size</span>
                <span className="text-center">Bust</span>
                <span className="text-center">Shoulder</span>
                <span className="text-center">Length</span>
              </div>

              <div className="h-px bg-gray-300 my-3" />

              {/* Rows */}
              {sizeData.map((item) => (
                <div key={item.size}>
                  <div className="grid grid-cols-5 gap-4 py-2 text-neutral-500 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-black"></div>
                      {item.size}
                    </div>
                    <div className="text-center">{item.brand}</div>
                    <div className="text-center">{item.bust}</div>
                    <div className="text-center">{item.shoulder}</div>
                    <div className="text-center">{item.length}</div>
                  </div>
                  <div className="h-px bg-gray-200 my-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="fixed bottom-0 w-full bg-white shadow-md px-5 py-3 flex gap-3">
        <button className="flex-1 bg-black text-white py-3 rounded text-sm flex items-center justify-center gap-2">
          <Image src="/icons/bag_white.svg" alt="bag" width={20} height={20} />
          Add to Bag
        </button>

        <button className="flex-1 border py-3 rounded text-sm flex items-center justify-center gap-2">
          <Image
            src="/icons/pdp_wishlist_add.svg"
            alt="wishlist"
            width={20}
            height={20}
          />
          Wishlist
        </button>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 opacity-70 hover:opacity-100"
      >
        <Image src="/icons/cross.svg" alt="close" width={35} height={35} />
      </button>
    </div>
  );
};

export default SizeChartModal;
