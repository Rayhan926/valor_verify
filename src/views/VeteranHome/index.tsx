import Header from "@components/Header";
import DownloadColored from "@components/Icons/DownloadColored";
import VetStatusCard from "@components/VetStatusCard";
import { veteranCards } from "@config/constants";
import React, { ReactNode } from "react";
import VateranDetailsCard from "./components/VateranDetailsCard";

const VeteranHome = () => {
  return (
    <>
      <Header />
      <section className="mt-20">
        <div
          style={{
            boxShadow: "2.26px 13px 54px rgba(69, 172, 209,0.08)",
          }}
          className="container px-[60px] py-[50px] rounded-[30px] bg-white"
        >
          <div className="-mt-3 flex items-end gap-10 flex-wrap">
            <VetStatusCard />

            <button className="secondary_gradient border border-transparent hover:border-secondary duration-150 flex items-center gap-[18px] p-[32px] rounded-[30px] ml-auto">
              <DownloadColored />
              <span className="text-black">Download PDF</span>
            </button>
          </div>
        </div>
      </section>

      <section className="mt-20 mb-28">
        <div className="container">
          <div className="grid grid-cols-4">
            {veteranCards.map((veteranCard, i) => (
              <div key={i}>
                <VateranDetailsCard
                  {...veteranCard}
                  style={{
                    zIndex: veteranCards.length - i,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VeteranHome;
