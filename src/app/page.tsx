'use client'
import MarteForm from "@/components/MarteForm";
import TerraForm from "@/components/TerraForm";
import { useState } from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { SiPlanetscale } from "react-icons/si";
import { IoRocketSharp } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [planet, setPlanet] = useState<"Terra" | "Marte">("Terra");

  return (
    <main className="flex flex-col items-center justify-center w-full h-fit md:h-screen bg-neutral-800 py-4">
      <ToastContainer autoClose={3000} position="top-right" />
      <section className="flex flex-col items-center gap-4 w-[90%] md:w-xl h-full bg-white p-5 rounded-md">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-neutral-700 text-2xl font-semibold w-full">Space Delivery</h1>
             {planet === "Terra" ? (
                <div className="flex items-center gap-2">
                  <FaEarthAmericas className="text-2xl text-neutral-800" />
                  <IoRocketSharp className="text-lg text-neutral-400" />
                  <SiPlanetscale className="text-2xl text-neutral-800" />
                </div>
             ): (
              <div className="flex items-center gap-2">
                  <SiPlanetscale className="text-2xl text-neutral-800" />
                  <IoRocketSharp className="text-lg text-neutral-400" />
                  <FaEarthAmericas className="text-2xl text-neutral-800" />
                </div>
             )}
        </div>
        
        <div className="flex flex-col justify-start items-center w-full gap-4 border-t-1 border-neutral-300 pt-6">
          <h1 className="text-neutral-400 text-md font-normal">Choose your planet</h1>
          <div className="flex justify-center items-center w-full rounded-md">
            <button className={`w-1/2 ${planet === "Terra" ? "shadow-[2px_3px_10px_2px] shadow-neutral-600/40" : "shadow-neutral-200"} cursor-pointer rounded-lg p-2 text-neutral-800`} onClick={() => setPlanet("Terra")}>
              Earth
            </button>
            <button className={`w-1/2 ${planet === "Marte" ? "shadow-[2px_3px_10px_2px] shadow-neutral-600/40" : "shadow-neutral-200"} cursor-pointer rounded-lg p-2 text-neutral-800`} onClick={() => setPlanet("Marte")}>
              Mars
            </button>
          </div>
        </div>

        <div className=" w-full mt-6 rounded-md">
          {planet === "Terra" ? <TerraForm /> : <MarteForm />}
        </div>
      </section>
    </main>
  );
}
