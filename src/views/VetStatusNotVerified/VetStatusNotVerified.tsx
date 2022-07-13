import React from "react";
import Button from "@components/Button";
import HeaderWithNavLinks from "@components/HeaderWithNavLinks";
import VetStatusCard from "@components/VetStatusCard";
import { BsInfoCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const VetStatusNotVerified = () => {
  return (
    <>
      <HeaderWithNavLinks />
      <section className="mt-20">
        <div className="container">
          <div className="bg-gradient-to-r from-white via-[#FFEFEE] to-white py-7 flex items-center justify-center gap-10">
            <div className="w-[175px] h-[175px] rounded-full overflow-hidden flex items-center justify-center bg-red-500 text-white">
              <IoClose size={120} />
            </div>
            <h1 className="title_40 uppercase">
              <p>Not Verified as</p>a Veteran
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
              <Button className="flex items-center justify-center gap-3.5">
                <BsInfoCircle />
                Try again
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VetStatusNotVerified;
