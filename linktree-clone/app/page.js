"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    if (text.trim() !== "") {
      router.push(`/generate?handle=${text}`);
    }
  };
  const goToGenerate = () => {
    router.push(`/generate`);
  };

  return (
    <div>
      <main>
        <section className="bg-[#264815] min-h-[100vh] grid grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center ml-[10vw] gap-3">
            <p className="text-yellow-300 font-bold text-7xl">
              A link in bio built
            </p>
            <p className="text-yellow-300 font-bold text-7xl mb-5">for you.</p>
            <p className="text-yellow-300 text-xl">
              Join 70M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
            </p>

            {/* HANDLE INPUT + BUTTON */}
            <div className="input flex gap-3 mt-5">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="bg-white px-2 py-2 focus:outline-green-800 rounded-lg"
                type="text"
                placeholder="Enter your Handle"
              />
              <button
                onClick={createTree}
                className="bg-pink-200 hover:bg-pink-300 rounded-full p-4 font-semibold"
              >
                Claim your BitTree
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-center justify-center mr-[10vw]">
            <img className="pt-10" src="./home.png" alt="home.png image" />
          </div>
        </section>

        {/* SECOND SECTION */}
        <section className="bg-[#2665d6] min-h-[100vh] grid grid-cols-2 gap-0.5">
          <div className="flex items-center justify-center mr-[10vw]">
            <img
              className="pt-10 pl-[20%] w-auto"
              src="/img2.png"
              alt="home.png image"
            />
          </div>
          <div className="flex flex-col justify-center pr-[20%]">
            <p className="font-bold text-6xl text-[#d2e823]">
              Create and customize
            </p>
            <p className="font-bold text-6xl text-[#d2e823]">your Bittree in</p>
            <p className="font-bold text-6xl text-[#d2e823]">minutes</p>
            <p className="pt-3 text-white text-xl">
              Connect all your content across social media, websites, stores and
              more in one link in bio. Customize every detail or let Linktree
              automatically enhance it to match your brand and drive more
              clicks.
            </p>
            <button
              onClick={goToGenerate}
              className="bg-[#d2e823] mt-8 rounded-full p-4 font-semibold w-fit mx-auto"
            >
              Get Started
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
