const Generate = () => {
  return (
    <div className="bg-[#D4A73A] min-h-screen grid grid-cols-2">
      
      {/* LEFT COLUMN */}
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-bold text-4xl">Create your Bittree</h1>

        <div className="flex flex-col gap-5 my-8">
          <h2 className="font-semibold text-2xl">
            Step 1: Claim your Handle
          </h2>

          <input
            className="px-4 py-2 rounded-full"
            type="text"
            placeholder="Choose a Handle"
          />

          <h2 className="font-semibold text-2xl">
            Step 2: Add Links
          </h2>

          <input
            className="px-4 py-2 rounded-full"
            type="text"
            placeholder="Enter link text"
          />
          <input
            className="px-4 py-2 rounded-full"
            type="text"
            placeholder="Enter link"
          />
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full h-screen flex items-center justify-center">
        <img
          className="max-h-full max-w-full object-contain"
          src="/generate.png"
          alt="Generate your links"
        />
      </div>

    </div>
  );
};

export default Generate;
