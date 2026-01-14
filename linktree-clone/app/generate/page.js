"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";

const Generate = () => {
  const searchParams = useSearchParams();

  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, setHandle] = useState(searchParams.get("handle") || "");
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");

  const inputClass =
    "px-4 py-2 rounded-full bg-[#f3e7c3] border border-black/20 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black focus:bg-[#f8eed3]";

  const handleChange = (index, field, value) => {
    setLinks((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const addLink = () => {
    setLinks([...links, { link: "", linktext: "" }]);
  };

  const submitLinks = async () => {
    const response = await fetch("http://localhost:3000/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ handle, links, pic, desc }),
    });

    const result = await response.json();

    if (result.success) {
      toast.success(result.message);
      setLinks([{ link: "", linktext: "" }]);
      setHandle("");
      setPic("");
      setDesc("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-[#d7a025f7] min-h-screen grid grid-cols-2 pt-24 px-12">
      <div className="flex justify-center items-center flex-col text-gray-900">
        <h1 className="font-bold text-4xl mt-8 mb-4">Create your Bittree</h1>

        <div className="flex flex-col gap-6 w-[80%]">
          <h2 className="font-semibold text-2xl">Step 1: Claim your Handle</h2>

          <input
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className={inputClass}
            type="text"
            placeholder="Choose a Handle"
          />

          <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>

          {links.map((item, index) => (
            <div key={index} className="flex gap-2">
              <input
                value={item.linktext}
                onChange={(e) =>
                  handleChange(index, "linktext", e.target.value)
                }
                className={`${inputClass} w-1/2`}
                type="text"
                placeholder="Enter link text"
              />
              <input
                value={item.link}
                onChange={(e) => handleChange(index, "link", e.target.value)}
                className={`${inputClass} w-1/2`}
                type="text"
                placeholder="Enter link"
              />
            </div>
          ))}

          <button
            onClick={addLink}
            className="bg-black text-[#f3e7c3] px-6 py-2 rounded-full w-fit"
          >
            + Add Link
          </button>

          <h2 className="font-semibold text-2xl mt-4">
            Step 3: Add Picture and Description
          </h2>

          <input
            value={pic}
            onChange={(e) => setPic(e.target.value)}
            className={inputClass}
            type="text"
            placeholder="Enter link to your picture"
          />

          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className={inputClass}
            type="text"
            placeholder="Enter description"
          />

          <button
            disabled={!handle || !links[0].linktext}
            onClick={submitLinks}
            className="disabled:bg-gray-400 bg-black text-[#f3e7c3] px-8 py-3 rounded-full w-fit mt-4"
          >
            Create your BitTree
          </button>
        </div>
      </div>

      <div className="w-full h-screen flex items-center justify-center">
        <img
          className="max-h-full max-w-full object-contain"
          src="/generate.png"
          alt="Generate your links"
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Generate;
