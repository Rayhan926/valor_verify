import HeaderWithNavLinks from "@components/HeaderWithNavLinks";
import CrcularProgress from "@components/Icons/CrcularProgress";
import MedalStar from "@components/Icons/MedalStar";
import SecurityTime from "@components/Icons/SecurityTime";
import WelcomeToValorverifyModal from "@components/WelcomeToValorverifyModal";
import { cx } from "@config/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SearchColumnRenderer from "./components/SearchColumnRenderer";
import VeteranStarsStatusBox from "./components/VeteranStarsStatusBox";

const Dashboard = () => {
  const [openWelcomeToValorverifyModal, setOpenWelcomeToValorverifyModal] =
    useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenWelcomeToValorverifyModal(true);
    }, 1000);
  }, []);

  return (
    <>
      <WelcomeToValorverifyModal
        isOpen={openWelcomeToValorverifyModal}
        onRequestClose={() => setOpenWelcomeToValorverifyModal(false)}
      />
      <HeaderWithNavLinks />
      <section className="mt-[60px]">
        <div className="container">
          <div className="grid grid-cols-2 gap-[60px]">
            <VeteranStarsStatusBox
              progress={<CrcularProgress />}
              icon={<MedalStar />}
            />
            <VeteranStarsStatusBox
              color="secondary"
              progress={
                <Image
                  src="/images/circle_chart.svg"
                  width={150}
                  height={150}
                  alt="circle_chart"
                />
              }
              icon={<SecurityTime />}
            />
          </div>
        </div>
      </section>

      {/* Divider --Start-- */}
      <div className="container">
        <div className="h-2.5 border-t border-b-[3px] border-primary mt-20 mb-[70px]"></div>
      </div>
      {/* Divider --End-- */}

      <section>
        <div className="container">
          <div className="flex items-center justify-between">
            <h3 className="title_40 text-primary">Your Last 10 Searches</h3>

            <Link href={"#"}>
              <a className="flex items-center gap-10 underline hover:no-underline">
                <span className="opacity-80">
                  View the results from a past search
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="12"
                  viewBox="0 0 58 12"
                >
                  <path
                    id="Left_1"
                    data-name="Left 1"
                    d="M15.821,7.588a.791.791,0,0,1,0-1.107.764.764,0,0,1,1.091,0l1.846,1.856a23.5,23.5,0,0,1,1.667,1.78,3.161,3.161,0,0,1,.8,2.564,3.422,3.422,0,0,1-.8,1.712,23.479,23.479,0,0,1-1.667,1.78l-1.846,1.856a.764.764,0,0,1-1.091,0,.791.791,0,0,1,0-1.107l1.813-1.823a22.877,22.877,0,0,0,1.582-1.681,3.677,3.677,0,0,0,.265-.375h-55.46a.777.777,0,0,1-.771-.783.777.777,0,0,1,.771-.783h55.46a3.677,3.677,0,0,0-.265-.375,22.886,22.886,0,0,0-1.582-1.681Z"
                    transform="translate(36.75 -6.25)"
                    fill="#e3b900"
                  />
                </svg>
              </a>
            </Link>
          </div>

          <div className="mt-10 mb-24 grid grid-cols-2 gap-[50px]">
            {[1, 2].map((e) => (
              <div className="grid grid-cols-3" key={e}>
                <SearchColumnRenderer
                  title="Name"
                  columnKey="name"
                  className="!ml-0 z-[3] rounded-[30px]"
                />
                <SearchColumnRenderer
                  title="Type of Search"
                  columnKey="type"
                  color="#7A86A1"
                  className="z-[2]"
                />
                <SearchColumnRenderer
                  title="Result"
                  columnKey="isVerified"
                  render={(val) => (
                    <div className={cx("flex items-center gap-3.5")}>
                      <span
                        className={cx(
                          "scale-125 inline-block",
                          val ? "text-primary" : "text-[#C0BDCC]",
                        )}
                      >
                        •
                      </span>
                      {val ? "Verified" : "Not Verified"}
                    </div>
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
