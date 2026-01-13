import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main >
        <section className="bg-[#254F1A] min-h-[100vh] grid grid-cols-2">
          <div className=" flex flex-col justify-center   ml-[10vw]">
            <p className="text-yellow-300 font-bold text-7xl ">A link in bio built</p>
            <p className="text-yellow-300 font-bold text-7xl mb-5 ">for you.</p>
            <p className="text-yellow-300 text-xl">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
            <div className="input flex gap-3 mt-5">
              <input className="bg-white px-2 py-2 focus:outline-green-800 rounded-lg" type="text" placeholder="bittr.ee/your-url" ></input>
              <button className="bg-pink-200 hover:bg-pink-300 rounded-full p-4 font-semibold">Claim your BitTree</button>
            </div>
          </div>
          <div className=" flex items-center justify-center mr-[10vw]"> 
            <img src="./home.png" alt="home.png image"></img>
          </div>
        </section>
        <section className="bg-red-600 min-h-[100vh]"></section>
      </main>
    </div>
  );
}
