const Change = () => {
  return (
    <div className="mt-5 flex items-center gap-4 self-stretch">
      <img
        alt="img"
        src="/icons/delivery_express.svg"
        className="w-8 object-contain object-center opacity-40"
        loading="lazy"
      />
      <div className="flex flex-wrap items-center gap-1 text-sm font-normal capitalize leading-[16.41px] tracking-wide text-blackLight">
        <div className="opacity-40 select-none md:select-text">
          Express Store Pick Up Not Available
        </div>
      </div>
    </div>
  );
};
