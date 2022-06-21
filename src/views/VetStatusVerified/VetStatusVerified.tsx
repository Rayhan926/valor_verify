import Button from "@components/Button";
import HeaderWithNavLinks from "@components/HeaderWithNavLinks";
import VetStatusCard from "@components/VetStatusCard";
import React from "react";

const VetStatusVerified = () => {
  return (
    <>
      <HeaderWithNavLinks />
      <section className="mt-20">
        <div className="container">
          <div className="bg-gradient-to-r from-white via-shadow-primary to-white py-7 flex items-center justify-center gap-10">
            <div className="w-[190px] h-[190px] bg-slate-200"></div>
            <h1 className="title_40 uppercase">
              <p>Verified</p>
              as a Veteran
            </h1>
          </div>
        </div>
      </section>

      <section className="mt-[120px] mb-20">
        <div className="container">
          <div className="w-fit mx-auto">
            <div
              style={{
                boxShadow: "2.26px 13px 54px rgba(69, 172, 209,0.08)",
              }}
              className="px-[60px] py-[50px] rounded-[30px]"
            >
              <VetStatusCard />
            </div>

            <div className="w-[790px] mx-auto mt-[60px]">
              <Button>Check another veteran's Status</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VetStatusVerified;
