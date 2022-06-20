import CrcularProgress from "@components/Icons/CrcularProgress";
import MedalStar from "@components/Icons/MedalStar";
import { cx } from "@config/constants";
import { VeteranStarsStatusBoxProps } from "@config/types";
import React from "react";
import VateranStatBox from "../VateranStatBox";

const VeteranStarsStatusBox = ({
  icon,
  progress,
  color,
}: VeteranStarsStatusBoxProps) => {
  const isSecondary = color === "secondary";
  return (
    <div
      className={cx(
        "px-10 pb-[60px] pt-[50px]  rounded-[30px]",
        isSecondary ? "secondary_gradient" : "primary_gradient",
      )}
    >
      <div className="px-[30px] grid grid-cols-[150px,auto] place-items-center gap-10">
        <div>
          <div className="relative">
            <div className="w-[114px] aspect-square rounded-full overflow-hidden bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              {icon}
            </div>
            {progress}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h2 className="title_60 font-gorga-light">85%</h2>
          <p className="title_24 font-gorga-light text-[#7A86A1] mt-2">
            Monthly Veteran Status Stats
          </p>
          <div className="mt-5 border border-primary rounded-full w-full text-center text-lg font-gorga-light py-3 px-5 text-primary">
            % of Veteran Status Checks Used
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-[60px]">
        <VateranStatBox
          value={130}
          description="Veteran Status Checks Remaining This Month"
          bg={isSecondary ? "bg-shadow-primary" : ""}
        />
        <VateranStatBox
          value={870}
          description="Veteran Status Checks Remaining This Month"
          bg={isSecondary ? "bg-shadow-primary" : ""}
        />
      </div>
    </div>
  );
};

export default VeteranStarsStatusBox;
